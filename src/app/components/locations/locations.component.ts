import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  @Input() locations: string[] = [];
  errorMessage: string = 'Error';
  dataObject: Object[]=[];
  value: string = '';

  constructor(private dataService: ServiceService){}


  getLocationParam(event:Event) {
    const selectedElement = event.target as HTMLSelectElement;
    this.value = selectedElement.value;
    this.dataService.getData(this.value)
    .subscribe({
        next: data => { 
            this.dataObject = data;
            this.errorMessage = '';
            console.log(this.dataObject)
        },
        error: e => this.errorMessage = e
    });
    }



}
