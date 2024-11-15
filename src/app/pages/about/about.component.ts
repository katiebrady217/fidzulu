import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teams: any[] =[{
    teamName: "Group 2",
    members: ["Agata", "Alessio", "Aleks"]
  },{
    teamName: "Group 3",
    members: ["Agata", "Alessio"]
  }];
}
