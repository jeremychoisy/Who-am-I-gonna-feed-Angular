import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {ActivatedRoute} from '@angular/router';
import { Player } from '../models/player';


@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.scss']
})
export class ResultsViewComponent implements OnInit {
  summonerId: string;
  isLoading: boolean;
  isSum404 : boolean;
  isGame404 : boolean;

  teamOne: Array<Player> = [];
  teamTwo: Array<Player> = [];
  constructor(private httpS: HttpService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.isLoading = true;

    this.httpS.getSummonerID(name).subscribe(
      (resId) => {
        const key = 'id';
        this.httpS.getActiveGame(resId[key]).subscribe(
          (resGame) => {
            for(let player of resGame['participants']) {
              console.log(player.summonerId)
              this.httpS.getRank(player.summonerId).subscribe(
                (resRank) => {
                  let division = resRank[0].tier;
                  let tier = resRank[0].rank;
                  let wins = resRank[0].wins;
                  let losses = resRank[0].losses;
                  let profileIconId = player.profileIconId;
                  let championId = player.championId;
                  let summonerName = player.summonerName;
                  let mainRunePageId = player.perks.perkStyle;
                  let mainRuneId = player.perks.perkIds[0];
                  let secondaryRunePageId = player.perks.perkSubStyle;
                  let spell1Id = player.spell1Id;
                  let spell2Id = player.spell2Id;

                  let p = new Player(profileIconId, championId, summonerName, mainRunePageId, mainRuneId, secondaryRunePageId, spell1Id, spell2Id, division, tier, wins, losses)
                  if (player['teamId'] === 100) {
                    this.teamOne.push(p);
                  } else {
                    this.teamTwo.push(p);

                  }
                }
              );
            }

            this.isLoading = false;
          },
        (error) => {
            this.isLoading = false;
            this.isGame404 = true;
          }
        );
      },
      (error) => {
        this.isLoading = false;
        this.isSum404 = true;
      }
    );
  }
}
