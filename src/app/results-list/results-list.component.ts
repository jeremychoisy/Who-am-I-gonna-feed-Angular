import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../models/player';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() players:Player[];
  @Input() teamId: number;
  constructor() { }

  ngOnInit() {
  }

}
