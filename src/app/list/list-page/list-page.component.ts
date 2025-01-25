import { Component, OnInit } from '@angular/core';
import { StudentDTO } from '../../models/student.dto';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent{

  constructor(private sharedService: SharedService) {}


  getStudents(): StudentDTO[]{
    return this.sharedService.getStudents();
  }

  trackById(index: number, student: StudentDTO): number {
    return student.id;
  }

}
