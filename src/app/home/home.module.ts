import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { StudentService } from '../services/student.service';
import { SharedService } from '../services/shared.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [StudentService,SharedService]
})
export class HomeModule { }
