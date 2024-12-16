import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCarinfoService } from '../s-carinfo.service';
import { Cardetails } from '../cardetails';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="routerid?.photo" alt="">
      <section class="listing-features">
        <h2 class="section-heading">Details about the car</h2>
        <ul>
          <li>How many cars are available: {{routerid?.availableUnits}} </li>
          <li>Is there wifi available: {{routerid?.wifi}} </li>
          <li>Is there insurance available: {{routerid?.insurance}} </li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  carinfoService = inject(SCarinfoService);
  routerid: Cardetails | undefined;

  constructor() {
    const routerid = Number(this.route.snapshot.params['id']);
    this.routerid = this.carinfoService.getCarinformationById(routerid);
  }
}
