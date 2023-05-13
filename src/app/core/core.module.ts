import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';



@NgModule({
  declarations: [
    LoginComponent,
    PageNotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
})
export class CoreModule { }
