import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SharedService } from '../../services/shared.service';
import { StudentDTO } from '../../models/student.dto';

@Component({
  selector: 'app-resume-data',
  standalone: true,
  imports: [],
  templateUrl: './resume-data.component.html',
  styleUrl: './resume-data.component.css'
})
export class ResumeDataComponent implements OnInit{
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
        acc.total++;
        if (student.nota_final < 5) {
          acc.suspendidos++;
        } else {
          acc.aprobados++;
        }
        return acc;
      },
      { total: 0, aprobados: 0, suspendidos: 0 }
    );

    this.chart = new Chart('resume-data-canvas', {
      type: 'bar',
      data: {
        labels: Object.keys(chartData),
        datasets: [
          {
            label: 'Total Students',
            data: Object.values(chartData),
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
              display: true,
              text: 'Resume Data Chart'
          }
        }
      },
    });
  }
}
