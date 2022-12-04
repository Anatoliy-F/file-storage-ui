import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FetchFilesComponent } from './fetch-files/fetch-files.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FileDataComponent } from './fetch-files/file-data/file-data.component';
import { FileDataEditComponent } from './fetch-files/file-data-edit/file-data-edit.component';
import { ShareFileComponent } from './fetch-files/share-file/share-file.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserEditComponent } from './manage-users/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'myFiles', component: FetchFilesComponent},
  {path: 'users', component: ManageUsersComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'fileData/:id', component: FileDataComponent},
  {path: 'editFileData/:id', component: FileDataEditComponent},
  {path: 'shareFile/:id', component: ShareFileComponent},
  {path: 'user/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
