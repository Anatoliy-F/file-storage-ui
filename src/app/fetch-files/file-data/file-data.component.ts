import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { FileData } from '../fileData';
import { FetchFilesService } from '../fetch-files.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-data',
  templateUrl: './file-data.component.html',
  styleUrls: ['./file-data.component.scss']
})
export class FileDataComponent implements OnInit {

  title = "Loading data, please wait..."
  //TODO: solve this
  file?: Blob;
  fileData?: FileData;
  id?: string;
  downloadUrl?: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fetchFilesService: FetchFilesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('On init works');
    this.loadData();
  }

  loadData(){
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    
    //TODO: check null/undefined
    this.id = idParam!;

    if(this.id){
      console.log(idParam);
      this.fetchFilesService.get(this.id).subscribe(result => {
        console.log('fetched data');
        console.log(result);
        this.fileData = result;
        this.title = "file info";
        console.log(this.fileData);
        //this.downloadUrl = environment.baseUrl+"file/download/"+this.fileData.id;
      }, error => {
        console.log(error);
        this.title = "Something went wrong";
      });
    }
  }

  onDelete(){
    if(this.id){
      this.fetchFilesService.delete(this.fileData!)
        .subscribe(result => {
          this.router.navigate(['/myFiles']);
        }, error => {
          console.log(error);
          this.title = "Something went wrong";
        })
    }
  }

  onDownload(){
    if(this.id){
      this.fetchFilesService.download(this.id)
      .subscribe(result => {
        this.file = new Blob([result], { type: "application/octet-stream" })
        this.downloadUrl = window.URL.createObjectURL(this.file);
        //window.open(url);
        //window.open(window.URL.createObjectURL(result)); //open content in new window
        console.log('Success');
      }, error => {
        console.log('Not success');
        console.log(error);
      })
    }
  }

  onCreateShortLink(){
    if(this.fileData && this.fileData.isPublic){
      this.fetchFilesService.createShortLink(this.fileData)
        .subscribe(result => {
          this.fileData = result;
          console.log('short link created');
        }, error => {
          console.log(error);
        })
    }
  }

  onDeleteShortLink(){
    if(this.fileData && this.fileData.shortLink){
      this.fetchFilesService.deleteShortLink(this.fileData)
        .subscribe(result => {
          this.fileData = result;
          console.log('short link deleted');
        }, error => {
          console.log(error);
        })
    }
  }

  onBack(){
    this.location.back();
  }

}
