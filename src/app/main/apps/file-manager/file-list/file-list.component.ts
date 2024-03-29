import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { FileManagerService } from 'app/main/apps/file-manager/file-manager.service';

@Component({
    selector: 'file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FileManagerFileListComponent implements OnInit, OnDestroy {
  
  

    files: any;
    // dataSource: FilesDataSource | null;
    dataSource: any
    displayedColumns = ['icon', 'name', 'type', 'owner', 'deneme', 'modified', 'detail-button'];
    selected: any;
    egitimler = [{
        "id":1,
        "created": "8 Mayıs, 2023", 
        "extention": "",
        "location": "My Files > Documents",
        "modified": "8 Mayıs, 2023",
        "name": "EĞİTİM KİŞİSEL",
        "offline": true,
        "opened": "8 Mayıs, 2023",
        "owner": "İnsan Kaynakları",
        "size": "",
        "type": "folder",
        "video":"assets/1-Etkili İletişim, Diksiyon ve Beden Dili - Giriş.mp4"
    },
    {
        "id":2,
        "created": "15 Mayıs, 2023", 
        "extention": "",
        "location": "My Files > Documents",
        "modified": "15 Mayıs, 2023",
        "name": "OPTİK KAPLAMA",
        "offline": true,
        "opened": "15 Mayıs, 2023",
        "owner": "Optik Üretim",
        "size": "",
        "type": "folder",
        "video":"assets/video1.mp4"
    },


]
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FileManagerService} _fileManagerService
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _fileManagerService: FileManagerService,
        private _fuseSidebarService: FuseSidebarService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
    //    this.dataSource = new FilesDataSource(this._fileManagerService);
    this.dataSource = this.egitimler;
      
        this._fileManagerService.onFilesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(files => {
                this.files = files;
                console.log(this.files)
            });

        this._fileManagerService.onFileSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                this.selected = selected;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    closeVideoModal() {
        this.selectedVideo = null;
      }
    selectedVideo :any
    playVideo(video: string) {
        this.selectedVideo = video;
      }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On select
     *
     * @param selected
     */
    onSelect(selected): void {
        this._fileManagerService.onFileSelected.next(selected);
    }

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}

export class FilesDataSource extends DataSource<any>
{
    /**
     * Constructor
     *
     * @param {FileManagerService} _fileManagerService
     */
    constructor(
        private _fileManagerService: FileManagerService
    ) {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        return this._fileManagerService.onFilesChanged;
    }

    /**
     * Disconnect
     */
    disconnect(): void {
    }
}
