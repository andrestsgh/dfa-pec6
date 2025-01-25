import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListRoutingModule } from './list-routing.module';
import { StudentService } from '../services/student.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedService } from '../services/shared.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [StudentService,SharedService]
})
export class ListModule { }
