import { Component, Input } from '@angular/core';
import { Cardetails } from '../cardetails';
import { DetailsComponent } from '../details/details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carinformation',
  standalone: true,
  imports: [DetailsComponent, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="V_CarInformation.photo" alt="Exterior photo of car">
      <h2 class="listing-heading">{{V_CarInformation.model}}</h2>
      <p class="listing-location">{{V_CarInformation.make}}, {{V_CarInformation.Year}}</p>
      <a [routerLink]="['/details', V_CarInformation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './carinformation.component.css'
})
export class CarinformationComponent {
  @Input() V_CarInformation!: Cardetails;
}
