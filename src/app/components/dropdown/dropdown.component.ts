import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: string[] = [];
  errorMessage: string = 'Error';
  dataObject: Object[]=[];
  value: string = '';
  


  constructor(private dataService: ServiceService){}


  loadDataList(event:Event){
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