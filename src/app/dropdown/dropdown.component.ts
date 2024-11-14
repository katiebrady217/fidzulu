import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: string[] = [];
  errorMessage: string = 'Error';
  value: string ='';

  constructor(private dataService: ServiceService){}

  ngOnInit(){
    this.loadDataList('')
  }

  loadDataList(value:string){
    this.dataService.getData(value)
    .subscribe({
        next: data => { 
            this.dataSet = data;
            this.errorMessage = '';
            console.log(this.data)
        },
        error: e => this.errorMessage = e
    });

}
}