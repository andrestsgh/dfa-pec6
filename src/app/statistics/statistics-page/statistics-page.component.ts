import { Component } from '@angular/core';
import { ResumeDataComponent } from '../../shared/resume-data/resume-data.component';
import { GenderComponent } from '../../shared/gender/gender.component';
import { GeneralResultsComponent } from '../../shared/general-results/general-results.component';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [ResumeDataComponent, GenderComponent, GeneralResultsComponent],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {

}
