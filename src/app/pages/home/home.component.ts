import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listOfData: string[] = ['Bike','Food','Toys','Books','Books','DVDs','Laptops'];
  listOfLocations: string[] = ['India', 'Ireland', 'USA'];
}
