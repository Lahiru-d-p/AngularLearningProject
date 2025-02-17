import { Component ,Inject,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {HousingService} from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService;

  constructor(housingService: HousingService) {
    this.housingService = housingService;
  }

  ngOnInit(): void {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
