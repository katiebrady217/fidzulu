import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedProductValue: string = '';
  selectedLocationValue: string = '';
  dataSet: Object[] = [];
  errorMessage: string = '';

  constructor(private dataService: ServiceService){};

    onProductSelectionChange(value: string) {
    this.selectedProductValue = value;
    console.log("Product value: ",this.selectedProductValue);
    if(this.selectedLocationValue !== '' && this.selectedProductValue  !== ''){
      this.getProducts();
    }
  }

  onLocationSelectionChange(value: string) {
    this.selectedLocationValue = value;
    console.log("Location value: ",this.selectedLocationValue);
    if(this.selectedLocationValue !== '' && this.selectedProductValue  !== ''){
      this.getProducts();
    }
  }

  getProducts(){
      this.dataService.getData(this.selectedProductValue, this.selectedLocationValue).subscribe({
        next: (data) => {
          this.dataSet = data;
          this.errorMessage = '';
          console.log(this.dataSet);
        },
        error: (e) => (this.errorMessage = e),
      })
    
    console.log("Data: " + this.dataSet)}; 

  mockFoodData: any[] = [
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

  listOfData: string[] = ['bikes','food','toys','books','dvds','laptops'];
  listOfLocations: Object[] = [{loc:'IN', name:'India'}, {loc:'IE', name:'Ireland'}, {loc:'US-NC', name:'USA'}];
}
