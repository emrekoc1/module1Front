import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { DataService } from 'app/services/data.service';
import { MontageService } from '../../montage.service';
import { PartDialogComponent } from './part-dialog/part-dialog.component';
import { QualityControlOperationDialogComponent } from './quality-control-operation-dialog/quality-control-operation-dialog.component';
import { TestOperationDialogComponent } from './test-operation-dialog/test-operation-dialog.component';
import { TodoListDialogComponent } from './todo-list-dialog/todo-list-dialog.component';

@Component({
  selector: 'app-single-bom',
  templateUrl: './single-bom.component.html',
  styleUrls: ['./single-bom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SingleBomComponent implements OnInit {
  dialogRef: any;

  bom: any;

  newBomForm: FormGroup;

  partDisplayedColumns = ['id', 'partName', 'isAssinged', 'buttons'];
  qualityControlOperationDisplayedColumns = ['id', 'operation', 'buttons'];
  testOperationDisplayedColumns = ['id', 'operation', 'waitTimeStr', 'testQuantityPercentage', 'buttons'];
  todoListDisplayedColumns = ['id', 'desc', 'buttons'];

  factory: any;
  currentUser: any;

  operators: any;
  operations: any;
  products: any;
  customData = [];

  pageType = '';

  partDataSource = new MatTableDataSource();
  qualityControlOperationDataSource = new MatTableDataSource();
  testOperationDataSource = new MatTableDataSource();
  todoListDataSource = new MatTableDataSource();

  bomPartTypes = [
    { value: '1', name: 'Dürbün' },
    { value: '2', name: 'Parça' }
  ];
  filteredBomPartTypes: { value: string, name: string }[] = [];

  constructor(public router: Router,
    public route: ActivatedRoute,
    public dataService: DataService,
    public montageService: MontageService,
    private fb: FormBuilder,
    public dialog: MatDialog) {
    this.factory = JSON.parse(localStorage.getItem('factory'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.filteredBomPartTypes = this.bomPartTypes;

    let bomId = null;

    this.route.params.subscribe(params => {
      bomId = params['id'];
    });

    if (bomId) {
      this.montageService.get_single_montage_bom({ bom_id: bomId }).then(result => {
        this.bom = result['data'];
        const parts = [];
        const testOperations = [];
        const qualityControlOperations = [];
        const checkList = [];

        if (this.bom.parts) {
          this.bom.parts.forEach(element => {
            const routes = [];

            if (element.routes) {
              element.routes.forEach(eRoute => {
                const operations = [];

                if (eRoute.Operations) {
                  eRoute.Operations.forEach(operation => {
                    const inputs = [];

                    if (operation.inputs) {
                      operation.inputs.forEach(input => {
                        inputs.push(this.fb.group({
                          p_name: [input.p_name, Validators.required],
                          p_planned_quantity: [input.p_planned_quantity, Validators.required],
                          p_type: [(input.p_type).toString(), Validators.required],
                          p_input_array: this.fb.array(input.p_input_array),
                          p_input_quantity: input.p_input_quantity,
                          p_wastageArray: this.fb.array(input.p_wastageArray),
                          p_wastage_quantity: input.p_wastage_quantity,
                          updatedDate: input.updatedDate,
                          _id: input._id
                        }));
                      });
                    }

                    operations.push(this.fb.group({
                      operationName: [operation.operationName, Validators.required],
                      operatorList: this.fb.array(operation.operatorList),
                      name: operation.name,
                      code: operation.code,
                      status: operation.status,
                      inputs: this.fb.array(inputs),
                      outputs: operation.outputs,
                      finishDate: operation.finishDate,
                      startDate: operation.startDate,
                      updatedDate: operation.updatedDate,
                      _id: operation._id
                    }));
                  });
                }

                routes.push(this.fb.group({
                  Operations: this.fb.array(operations),
                  ConnectionParts: this.fb.array(eRoute.ConnectionParts),
                  ConnectionIDs: this.fb.array(eRoute.ConnectionIDs),
                  Output: '',
                  finishDate: eRoute.finishDate,
                  startDate: eRoute.startDate,
                  updatedDate: eRoute.updatedDate,
                  _id: eRoute._id,
                }));
              });
            }

            parts.push(this.fb.group({
              partName: [element.partName, Validators.required],
              isAssinged: [element.isAssinged, Validators.required],
              partType: [element.partType, Validators.required],
              status: element.status,
              level: element.level,
              _id: element._id,
              operatorList: this.fb.array(element.operatorList),
              routes: this.fb.array(routes),
              finishDate: element.finishDate,
              startDate: element.startDate,
              updatedDate: element.updatedDate
            }));
          });
        }

        if (this.bom.test_operations) {
          this.bom.test_operations.forEach(element => {
            testOperations.push(this.fb.group({
              operation: [element.operation, Validators.required],
              wait_time: [element.wait_time, Validators.required],
              test_quantity_percentage: [element.test_quantity_percentage, Validators.required],
              wait_time_str: [this.parseWaitTime(element.wait_time), Validators.required]
            }));
          });
        }

        if (this.bom.quality_control_operations) {
          this.bom.quality_control_operations.forEach(element => {
            qualityControlOperations.push(this.fb.group({
              operation: [element.operation, Validators.required]
            }));
          });
        }

        if (this.bom.check_list) {
          this.bom.check_list.forEach(element => {
            checkList.push(this.fb.group({
              desc: [element.desc, Validators.required]
            }));
          });
        }

        this.newBomForm = this.fb.group({
          bomName: this.bom.name,
          bom_type: this.bom.bom_type,
          bom_part_type: this.bom.bom_part_type.toString(),
          bomCreatedUser: this.bom.bomCreatedUser ?? '',
          markaNumber: this.bom.markaNumber,
          operatorList: this.fb.array([]),
          parts: this.fb.array(parts),
          test_operations: this.fb.array(testOperations),
          quality_control_operations: this.fb.array(qualityControlOperations),
          check_list: this.fb.array(checkList),
        });

        this.refreshPartDataSource();
        this.refreshQualityControlOperationDataSource();
        this.refreshTestOperationDataSource();
        this.refreshTodoListDataSource();

        this.pageType = 'edit';
      });
    }
    else {
      this.newBomForm = this.fb.group({
        bomName: ['', Validators.required],
        bom_type: ['', Validators.required],
        bom_part_type: ['', Validators.required],
        bomCreatedUser: ['', Validators.required],
        markaNumber: '',
        operatorList: this.fb.array([]),
        parts: this.fb.array([]),
        test_operations: this.fb.array([]),
        quality_control_operations: this.fb.array([]),
        check_list: this.fb.array([]),
      });

      this.pageType = 'new';
    }

    this.getUsersByFactory();
    this.getProductsByFactory();
    this.getOperationsByFactory();
    this.getCustomDataByFactory();
  }

  ngOnInit(): void {
  }

  get newBomFormControllers(): { [key: string]: AbstractControl; } { return this.newBomForm.controls; }
  get Parts(): FormArray { return this.newBomFormControllers['parts'] as FormArray; }
  get TestOperations(): FormArray { return this.newBomForm.get('test_operations') as FormArray; }
  get QualityControlOperations(): FormArray { return this.newBomForm.get('quality_control_operations') as FormArray; }
  get ToDoList(): FormArray { return this.newBomForm.get('check_list') as FormArray; }
  get Routes(): FormGroup { return this.Parts.get('routes') as FormGroup; }
  get Multiples(): FormArray { return this.Routes.get('MultipleInput') as FormArray; }

  GetRoutesGroup(index): FormGroup { return this.Parts.controls[index].get('routes') as FormGroup; }
  GetMultipleArray(index): FormArray { return this.GetRoutesGroup(index).get('MultipleInput') as FormArray; }
  GetOperationArray(index): FormArray { return this.GetRoutesGroup(index).get('Operations') as FormArray; }
  GetInputFromOperation(index, index2): FormArray { return (this.GetOperationArray(index).controls[index2]).get('inputs') as FormArray; }
  GetConnectionIDs(index): FormArray { return this.GetRoutesGroup(index).get('ConnectionIDs') as FormArray; }

  getUsersByFactory(): void {
    this.dataService.post_with_json('users/getUserListByFactory', { facID: this.factory._id }).subscribe(a => { this.operators = a['data']; });
  }

  getProductsByFactory(): void {
    this.dataService.post_with_json('product/getAllByFactory', { facID: this.factory._id }).subscribe(a => { this.products = a['data']; });
  }

  getOperationsByFactory(): void {
    this.dataService.post_with_json('operations/getAllByFactory', { facID: this.factory._id }).subscribe(a => { console.log(a); this.operations = a['data']; });
  }

  getCustomDataByFactory(): void {
    this.dataService.post_with_json('customFactory/getAllCustomWithFactory', { facID: this.factory._id }).subscribe(a => { this.customData = a['data'][0].customBoms; });
  }

  openPartDialog(action, part, index): void {
    this.dialogRef = this.dialog.open(PartDialogComponent, {
      panelClass: 'part-form-dialog',
      data: {
        operators: this.operators,
        operations: this.operations,
        products: this.products,
        customData: this.customData,

        part: part,
        action,
        index
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const partI: number = response[2];
        if (formData) {
          switch (act) {
            case 'add':
              this.Parts.push(formData);
              break;
            case 'edit':
              this.Parts.setControl(partI, formData);
              break;
          }
        }
        this.refreshPartDataSource();
      });
  }
  openQualityControlOperationDialog(action, qualityControlOperation, index): void {
    this.dialogRef = this.dialog.open(QualityControlOperationDialogComponent, {
      panelClass: 'quality-control-operation-form-dialog',
      data: {
        operations: this.operations,

        qualityControlOperation: qualityControlOperation,
        action,
        index
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const qualityControlOperationI: number = response[2];
        if (formData) {
          switch (act) {
            case 'add':
              this.QualityControlOperations.push(formData);
              break;
            case 'edit':
              this.QualityControlOperations.setControl(qualityControlOperationI, formData);
              break;
          }
        }
        this.refreshQualityControlOperationDataSource();
      });
  }
  openTestOperationDialog(action, testOperation, index): void {
    this.dialogRef = this.dialog.open(TestOperationDialogComponent, {
      panelClass: 'test-operation-form-dialog',
      data: {
        operations: this.operations,

        testOperation,
        action,
        index
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const testOperationI: number = response[2];
        if (formData) {
          switch (act) {
            case 'add':
              this.TestOperations.push(formData);
              break;
            case 'edit':
              this.TestOperations.setControl(testOperationI, formData);
              break;
          }
        }
        this.refreshTestOperationDataSource();
      });
  }
  openTodoListDialog(action, todo, index): void {
    this.dialogRef = this.dialog.open(TodoListDialogComponent, {
      panelClass: 'todo-list-form-dialog',
      data: {
        todo: todo,
        action,
        index
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const formData: FormGroup = response[0];
        const act: string = response[1];
        const todoI: number = response[2];
        if (formData) {
          switch (act) {
            case 'add':
              this.ToDoList.push(formData);
              break;
            case 'edit':
              this.ToDoList.setControl(todoI, formData);
              break;
          }
        }
        this.refreshTodoListDataSource();
      });
  }

  saveNewBom(): void {
    if (this.newBomForm.valid) {
      this.dataService.put_with_json('newBom/update', { bomID: this.factory._id, data: JSON.stringify(this.newBomForm.value) }).subscribe(a => {
        setTimeout(() => {
          this.router.navigate(['/pages/newBomPageModule']);
        }, 1000);

      });
    } else {
      return;
    }
  }
  addNewBom(): void {
    
    if (this.newBomForm.valid) {
      this.dataService.post_with_json('newBom', { facID: this.factory._id, data: JSON.stringify(this.newBomForm.value) }).subscribe(a => {
        setTimeout(() => {
          this.router.navigate(['/apps/montage/bom/list']);
        }, 1000);

      });
    } else {
      return;
    }
  }

  deletePart(index): void {
    this.Parts.removeAt(index);
    this.refreshPartDataSource();
  }
  deleteQualityControlOperations(index): void {
    this.QualityControlOperations.removeAt(index);
    this.refreshQualityControlOperationDataSource();
  }
  deleteTestOperation(index): void {
    this.TestOperations.removeAt(index);
    this.refreshTestOperationDataSource();
  }
  deleteToDoList(index): void {
    this.ToDoList.removeAt(index);
    this.refreshTodoListDataSource();
  }

  refreshPartDataSource(): void {
    this.partDataSource.data = this.Parts.controls;
  }
  refreshQualityControlOperationDataSource(): void {
    this.qualityControlOperationDataSource.data = this.QualityControlOperations.controls;
  }
  refreshTestOperationDataSource(): void {
    this.testOperationDataSource.data = this.TestOperations.controls;
  }
  refreshTodoListDataSource(): void {
    this.todoListDataSource.data = this.ToDoList.controls;
  }

  parseWaitTime(waittime): string {
    let waitTime = parseInt(waittime as string ?? '0', 10);
    let str = '';
    if (waitTime > 86400) {
      const day = waitTime / 86400;
      waitTime -= (86400 * day);
      if (day >= 1) {
        str += day.toString() + ' gün ';
      }
    }
    if (waitTime > 3600) {
      const hour = waitTime / 3600;
      waitTime -= (3600 * hour);
      if (hour >= 1) {
        str += hour.toString() + ' saat ';
      }
    }
    if (waitTime > 60) {
      const minute = waitTime / 60;
      waitTime -= (60 * minute);
      if (minute >= 1) {
        str += minute.toString() + ' dakika ';
      }
    }
    return str;
  }

  getFilteredBomPartTypes(event) {
    this.filteredBomPartTypes = event;
  }
}
