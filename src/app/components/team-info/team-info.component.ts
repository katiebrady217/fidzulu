import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent {
  mockTeamData = [
    {
      "team" : "team1",
      "membersNames" : "Dominika, Allyn, Katie"
    },
    {
      "team" : "team1",
      "membersNames" : "Thomas, Rajat"
    },
    {
      "team" : "team1",
      "membersNames" : "Benji, Jason, Bartek"
    }
  ]
  errorMessage: string = '';

  constructor(private dataService: ServiceService){};
  teamInfo: Object[] = [];

  ngOnInit(){
    this.dataService.getData().subscribe({
      next: (data) => {
        this.teamInfo = data;
        this.errorMessage = '';
        console.log(this.teamInfo);
      },
      error: (e) => (this.errorMessage = e),
    });
}
}
