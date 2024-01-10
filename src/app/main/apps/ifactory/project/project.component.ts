import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { IFactoryService, PostShiftUrls, PostProjectUrls, PutProjectUrls, DeleteProjectUrls } from '../ifactory.service';
import DataSource from 'devextreme/data/data_source';
import { LoadOptions } from 'devextreme/data/load_options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  factoryInformations: any;

  dataSource: DataSource;

  constructor(public router: Router,
              public ifactoryService: IFactoryService) {
    this.factoryInformations = JSON.parse(localStorage.getItem('factory'));

    this.dataSource = new DataSource({
      key: '_id',
      load: async function(options: LoadOptions) {
        return await ifactoryService.project_post_request({ facID: JSON.parse(localStorage.getItem('factory'))._id }, PostProjectUrls.getAllByFactory).then(result => {
          return {
            data: result
          };
        }).catch(err => {
          alert(err);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  routeLink(id: string): void {
    this.router.navigate(['/apps/ifactory/project/single-project', { id }]);
  }

  deleteShift(id: string): void {
    if (!confirm('Silmek istediğinize emin misiniz?')) {
      return;
    }

    this.ifactoryService.project_delete_request({ id }, DeleteProjectUrls.delete).then(res => {
      this.dataSource.reload();
    }).catch(err => {

    });
  }

}
