import { Component, Input, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CapitalizeFirstPipe } from 'src/app/pipes/capilalise-first';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-table',
  
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {

  @Input() productData: any[] = [];
  errorMessage: string = '';
  constructor(private dataService: ServiceService){};



  

  keys: string[] = [];
  rows: any[] = [];
  mockData: any[] = this.productData;
  dataSet: Object[] = [];
  

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

    ngOnInit(){
      this.dataService.getData().subscribe({
        next: (data) => {
          this.dataSet = data;
          this.errorMessage = '';
          console.log(this.dataSet);
        },
        error: (e) => (this.errorMessage = e),
      });

    }
}
