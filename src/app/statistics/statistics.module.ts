import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StudentService } from '../services/student.service';
import { SharedService } from '../services/shared.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    HttpClientModule,
  ],
  providers: [StudentService, SharedService]
})
export class StatisticsModule { }
