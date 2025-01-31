import { Injectable } from '@angular/core';
import { Cardetails } from './cardetails';

@Injectable({
  providedIn: 'root'
})
export class SCarinfoService {
  protected CardetailsList:Cardetails[]=[
    {
    id: 0,
    model: 'A3',
    make: 'Audi',
    Year: '2004',
    photo: `../assets/images/A3Audi.jpg`,
    availableUnits: 4,
    wifi: true,
    insurance: true
  },
  {
    id: 1,
    model: 'Bentayga',
    make: 'Bentley',
    Year: '2003',
    photo: `../assets/images/Bentayga.jpeg`,
    availableUnits: 2,
    wifi: true,
    insurance: true
  },
  {
    id: 2,
    model: 'C-Class',
    make: 'Mercedes',
    Year: '2003',
    photo: `../assets/images/c-class.jpeg`,
    availableUnits: 2,
    wifi: true,
    insurance: true
  },
  {
    id: 3,
    model: 'C40',
    make: 'Volvo',
    Year: '2004',
    photo: `../assets/images/Volvo-C40.jpg`,
    availableUnits: 6,
    wifi: true,
    insurance: true
  },
  {
    id: 4,
    model: 'Camaro',
    make: 'Chevrolet',
    Year: '2004',
    photo: `../assets/images/Camaro.jpeg`,
    availableUnits: 8,
    wifi: true,
    insurance: true
  },
  {
    id: 5,
    model: 'Camry',
    make: 'Toyota',
    Year: '2003',
    photo: `../assets/images/camry.jpeg`,
    availableUnits: 10,
    wifi: true,
    insurance: true
  },
  {
    id: 6,
    model: 'Carnival',
    make: 'Kia',
    Year: '2002',
    photo: `../assets/images/carnival.jpeg`,
    availableUnits: 2,
    wifi: true,
    insurance: true
  },
  {
    id: 7,
    model: 'Gladiator',
    make: 'Jeep',
    Year: '2002',
    photo: `../assets/images/Gladiator.jpeg`,
    availableUnits: 5,
    wifi: true,
    insurance: true
  },
  {
    id: 8,
    model: 'MAZDAA3',
    make: 'MAZDA',
    Year: '2000',
    photo: `../assets/images/Mazda3.jpeg`,
    availableUnits: 2,
    wifi: true,
    insurance: true
  },
  {
    id: 9,
    model: 'MDX',
    make: 'Acura',
    Year: '2004',
    photo: `../assets/images/Acura_MDX.JPG`,
    availableUnits: 3,
    wifi: true,
    insurance: true
  }
];

  constructor() { }
  getAllCarDetails():Cardetails[] {
    return this.CardetailsList;
  }

  getCarinformationById(id:Number):Cardetails | undefined {
    return this.CardetailsList.find(cardetails=>cardetails.id === id);
  }
}
