import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent {
  summonerName: string;
  constructor( private route: Router) { }

  onSubmit() {
    this.route.navigate(['search/' + this.summonerName]).then(
      (nav)=> { console.log('navigate :' + nav);},
      (err) => { console.log('navigate : ' + err);}
    );
  }
}
