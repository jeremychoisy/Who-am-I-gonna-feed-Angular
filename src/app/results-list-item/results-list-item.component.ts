import {Component, Inject, Input, OnInit} from '@angular/core';
import {Player} from '../models/player';
import {DdragonService} from '../services/ddragon.service';

@Component({
  selector: 'app-results-list-item',
  templateUrl: './results-list-item.component.html',
  styleUrls: ['./results-list-item.component.scss']
})
export class ResultsListItemComponent implements OnInit {
  @Input() player: Player;
  @Input() teamId: number;

  sumIconPath: string;
  champIconPath: string;
  mainRuneIconPath: string;
  tierIconPath: string;
  secondaryRuneIconPath: string;

  constructor( private ddS: DdragonService) { }
  ngOnInit() {
    this.sumIconPath = this.ddS.getPathSumIcon(this.player.profileIconId);
    this.champIconPath = this.ddS.getPathChampIcon(this.ddS.getChampionName(this.player.championId));
    this.ddS.getRunes().subscribe(
      (res) => {
        this.mainRuneIconPath = this.ddS.getPathRuneIcon(this.ddS.getMainRunePath(res,this.player.mainRunePageId,this.player.mainRuneId));
        this.secondaryRuneIconPath = this.ddS.getPathRuneIcon(this.ddS.getSecondaryRunePath(res,this.player.secondaryRunePageId));
      }
    )
    this.tierIconPath = '../../assets/img/tiers/Emblem_' + this.player.division.toLowerCase() + '.png';

  }

}
