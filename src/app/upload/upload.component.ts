import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  progress?: number;
  //fileSize?: number;
  message?: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  uploadFile(files: FileList){
    if(files.length === 0){
      return;
    }

    let fileToUpload = <File>files[0];
    //this.fileSize = fileToUpload.length
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(environment.baseUrl + 'upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
          if(event.type === HttpEventType.UploadProgress){
            this.progress = Math.round(100 * event.loaded / event.total!);
          }
          if(event.type === HttpEventType.Response){
            this.message = 'Upload success';
            this.onUploadFinished.emit(event.body);
          }
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });

  }

}
