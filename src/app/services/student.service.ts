import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable, catchError, map, of } from 'rxjs';
import { StudentDTO } from '../models/student.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private csvUrl = 'assets/notas_alumnos-1.csv';
  constructor(private papa: Papa, private http: HttpClient) {}

  getStudents(): Observable<StudentDTO[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map((data) => {
        const parsedData = this.papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed: ', result);
          },
        });

        const students: StudentDTO[] = parsedData.data.map((item: any) => ({
          id: item.ID_Alumno,
          nombre: item.Nombre,
          apellidos: item.Apellidos,
          sexo: item.Sexo,
          nota_final: item.Nota_Final,
          faltas_asistencia: item.Faltas_Asistencia,
        }));

        return students;
      }),
      catchError((error) => {
        console.error('Error loading CSV file:', error);
        return of([]);
      })
    );
  }
}
