import { Component } from '@angular/core';

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
}
