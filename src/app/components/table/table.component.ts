import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CapitalizeFirstPipe } from 'src/app/pipes/capilalise-first';

@Component({
  selector: 'app-table',
  
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  mockBikeData = [
    {
      name: 'Mamba Sport 12" Balance Bike',
      brand: 'Mamba Bikes',
      color: 'black',
      price: 75.88,
    },
    {
      name: 'DJ Fat Bike 500W',
      brand: 'DJ Bikes',
      color: 'grey',
      price: 1599.86,
    },
    {
      name: 'Kobe Aluminum Balance',
      brand: 'Kobe',
      color: 'blue',
      price: 88.56,
    },
    {
      name: "Pomona Men's Cruiser Bike",
      brand: 'Northwoods',
      color: 'silver',
      price: 221.36,
    },
  ];

  mockBookData = [
    {
      Title: 'Lord of the Rings',
      Author: 'J.R.R Tolkien',
      price: 25.99,
      ISBN: '9780261102385',
      publisher: 'HarperCollins',
    },
    {
      Title: 'The Hobbit',
      Author: 'J.R.R Tolkien',
      price: 9.88,
      ISBN: '0261102214',
      publisher: 'HarperCollins',
    },
    {
      Title: 'Lord of Souls',
      Author: 'Greg Keyes',
      price: 12.98,
      ISBN: '0345508025',
      publisher: 'Del Rey',
    },
    {
      Title: 'Chronicles of Narnia',
      Author: 'C. S. Lewis',
      price: 41.77,
      ISBN: '0064471195',
      publisher: 'HarperCollins',
    },
  ];

  mockFoodData = [
    {
      "name": "The Original Sandwich",
      "brand": "Oreo",
      "weight": "303g",
      "calories": 405,
      "price": 2.85
    },
    {
      "name": "Peanut Butter",
      "brand": "KRAFT",
      "weight": "2000g",
      "calories": 726,
      "price": 9.39
    },
    {
      "name": "Beef Ravioli",
      "brand": "Chef Boyardee",
      "weight": "425g",
      "calories": 250,
      "price": 2.45
    },
    {
      "name": "Medium Cheddar Cheese",
      "brand": "MOON CHEESE",
      "weight": "57g",
      "calories": 525,
      "price": 5.87
    }
  ]

  keys: string[] = [];
  rows: any[] = [];
  data: any[] = this.mockFoodData;

  ngOnInit() {
    if (this.data.length > 0) {
      this.keys = Object.keys(this.data[0]);
      this.rows = this.data.map((row) => this.keys.map((key) => row[key]));
    }
  }
}
