import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SharedService } from '../../services/shared.service';
import { StudentDTO } from '../../models/student.dto';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.css'
})
export class GenderComponent implements OnInit{
  chart: any = [];

  title = 'Resume Data';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {    
    this.sharedService.students$.subscribe((students: StudentDTO[]) => {
      if (students.length > 0) {
        this.createChart(students);
      }
    });
  }

  createChart(students: StudentDTO[]) {
    const chartData = students.reduce(
      (acc, student) => {
        if (student.sexo === 'M') {
          acc.male++;
        } else if (student.sexo === 'F') {
          acc.female++;
        }
        return acc;
      },
      { male: 0, female: 0 }
    );

    this.chart = new Chart('gender-canvas', {
      type: 'doughnut',
      data: {
        labels: Object.keys(chartData),
        datasets: [
          {
            data: Object.values(chartData),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
              display: true,
              text: 'Gender Chart'
          }
        }
      },
    });
  }
}
