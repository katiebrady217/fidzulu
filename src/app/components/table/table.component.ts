import { Component, Input, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CapitalizeFirstPipe } from 'src/app/pipes/capilalise-first';

@Component({
  selector: 'app-table',
  
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {

  @Input() productData: any[] = [];



  

  keys: string[] = [];
  rows: any[] = [];
  data: any[] = this.productData;

  ngOnChanges(changes: SimpleChanges) {
    console.log("productData: " + JSON.stringify(this.productData));
    console.log("changes hald")
     if (changes['productData'] && this.productData.length > 0) { 
      console.log("changes good")
      this.keys = Object.keys(this.productData[0]); 
      console.log("keys: " + JSON.stringify(this.keys))
      this.rows = this.productData.map((row) => this.keys.map((key) => row[key])); 
      console.log("rows: " + JSON.stringify(this.rows))
    
    } }
}
