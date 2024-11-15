import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teams: any[] =[
    {
      teamName:"Group 1",
      members:["Allyn", "Dominika", "Katie"]
    },
    {
    teamName: "Group 2",
    members: ["Agata", "Alessio", "Aleks"]
  },
  {
    teamName: "Group 3",
    members: ["Patricijia", "Martin"]
  },
  {
    teamName: "Group 4",
    members: ["Cian", "Irene"]
  },
  {
    teamName: "Group 5",
    members: ["Bartek", "Jason", "Benji"]
  },
  {
    teamName: "Group 6",
    members: ["Ciara", "Katrina"]
  },
  {
    teamName: "Group 7",
    members: ["Thomas", "Rajat"]
  }];

  
}
