import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: string[] = [];
  errorMessage: string = 'Error';

  ngOnInit(){
    this.loadDataList('')
  }

  loadDataList(param:string){
    this.dataService.getData(param)
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