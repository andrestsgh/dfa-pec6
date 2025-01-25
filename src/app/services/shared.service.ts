import { Injectable } from '@angular/core';
import { StudentDTO } from '../models/student.dto';
import { StudentService } from './student.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private studentsSubject = new BehaviorSubject<StudentDTO[]>([]);
  students$ = this.studentsSubject.asObservable();

  students: StudentDTO[] = [];

  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  private loadStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.studentsSubject.next(data);
    });
  }

  getStudents(): StudentDTO[] {
    return this.studentsSubject.getValue();
  }
}
