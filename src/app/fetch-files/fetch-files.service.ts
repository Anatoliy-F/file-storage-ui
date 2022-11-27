import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService, ApiResult } from '../base.service';
import { Observable } from 'rxjs';

import { FileData } from './fileData';

@Injectable({
    providedIn: 'root',
  })

  export class FetchFilesService extends BaseService<FileData>{

    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    getData(
        pageIndex: number,
        pageSize: number,
        sortColumn: string,
        sortOrder: string,
        filterColumn: string | null,
        filterQuery: string | null
      ): Observable<ApiResult<FileData>> {
        let url = this.getUrl("file");

        let params = new HttpParams()
        .set("pageIndex", pageIndex.toString())
        .set("pageSize", pageSize.toString())
        .set("sortColumn", sortColumn)
        .set("sortOrder", sortOrder);
  
        if (filterColumn && filterQuery) {
            params = params
            .set("filterColumn", filterColumn)
            .set("filterQuery", filterQuery);
        }

        return this.http.get<ApiResult<FileData>>(url, { params })
      }
      
      get(id: string): Observable<FileData>
      {
        let url = this.getUrl("file/" + id);
        return this.http.get<FileData>(url);
      }

      put(item: FileData): Observable<FileData>{
        let url = this.getUrl("file/" + item.id);
        return this.http.put<FileData>(url, item);
      }

  }