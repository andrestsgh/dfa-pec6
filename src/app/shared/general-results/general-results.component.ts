import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SharedService } from '../../services/shared.service';
import { StudentDTO } from '../../models/student.dto';

@Component({
  selector: 'app-general-results',
  standalone: true,
  imports: [],
  templateUrl: './general-results.component.html',
  styleUrl: './general-results.component.css'
})
export class GeneralResultsComponent  implements OnInit{
  chart: any = [];

  title = 'Gender Chart';

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
        if (student.nota_final < 5) {
          acc.suspendidos++;
        } else {
          acc.aprobados++;
        }
        return acc;
      },
      { aprobados: 0, suspendidos: 0 }
    );

    this.chart = new Chart('general-results-canvas', {
      type: 'pie',
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
              text: 'General Results Chart'
          }
        }
      },
    });
  }
}