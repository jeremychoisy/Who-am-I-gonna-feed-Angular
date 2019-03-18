import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpService} from './services/http.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DdragonService} from './services/ddragon.service';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsListItemComponent } from './results-list-item/results-list-item.component';
import { FourOfourComponent } from './four-ofour/four-ofour.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchViewComponent},
  { path: 'search/:name', component: ResultsViewComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path:'fourOfour', component: FourOfourComponent},
  { path: '**', redirectTo: '/fourOfour'}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    ResultsViewComponent,
    ResultsListComponent,
    ResultsListItemComponent,
    FourOfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService, DdragonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
