import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  @Input() locations: any[] = [];
  errorMessage: string = 'Error';
  dataObject: Object[] = [];
  value: string = '';
  @Output() locationSelectionChange = new EventEmitter<string>();

  constructor(private dataService: ServiceService) {}

  getLocationParam(event: Event) {
    const selectedElement = event.target as HTMLSelectElement;
    this.value = selectedElement.value;
    console.log("value: " + JSON.stringify(this.value))
    if (this.value !== '') {
      
      console.log('value: ' + this.value);
      this.locationSelectionChange.emit(this.value);
      
    }
  }

  
}
