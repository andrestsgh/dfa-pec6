import { Component } from '@angular/core';
import { StudentDTO } from '../../models/student.dto';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private sharedService: SharedService) {}

  getStudents(): StudentDTO[]{
    return this.sharedService.getStudents();
  }
  
  trackById(index: number, student: StudentDTO): number {
    return student.id;
  }

}
