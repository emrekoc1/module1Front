import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { IFactoryService, PostProjectUrls, PutProjectUrls } from '../../ifactory.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SingleProjectComponent implements OnInit {

  currentUser: any;
  factoryInformations: any;

  projectId: string | null;

  projectForm: FormGroup;

  constructor(public router: Router, public route: ActivatedRoute,
              public ifactoryService: IFactoryService,
              private fb: FormBuilder,
              public dialog: MatDialog) {

    this.factoryInformations = JSON.parse(localStorage.getItem('factory'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.route.params.subscribe(params => {
      this.projectId = params['id'] ? params['id'] : null;
    });

    this.projectForm = this.fb.group({
      name: [null, Validators.required],
      type: '',
      facID: [this.factoryInformations._id, Validators.required]
    });

  }

  ngOnInit(): void {
    if (this.projectId) {
      this.ifactoryService.project_post_request({ id: this.projectId }, PostProjectUrls.getById)
        .then(res => {
          const project = res[0];

          this.projectForm = this.fb.group({
            _id: project._id,
            name: [project.name, Validators.required],
            type: [project.type, Validators.required],
            facID: [project.facID, Validators.required],
            createdDate: new Date(parseInt(project.createdDate, 10))
          });
        }).catch(err => {
          console.log(err);
        });

    }
  }

  submitShift(): void {
    const data = {
      name: this.projectForm.value.name,
      type: this.projectForm.value.type,
      facID: this.projectForm.value.facID
    };

    let response: Promise<any>;
    if (!this.projectId) {
      response = this.ifactoryService.project_post_request(data, PostProjectUrls.create);
    } else {
      data['id'] = this.projectId;
      response = this.ifactoryService.project_put_request(data, PutProjectUrls.updateById);
    }

    response.then(_response => {
      setTimeout(() => {
        this.router.navigate(['/apps/ifactory/project']);
      }, 1000);

    }).catch(error => {
      console.log(error);
    });
  }

}
