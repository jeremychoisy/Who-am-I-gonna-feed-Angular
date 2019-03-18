import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'RGAPI-bdfe7a10-9c2d-46e5-b1a5-72af9c363631';
const API_URL = 'https://euw1.api.riotgames.com/lol';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HttpC: HttpClient) { }

  public getSummonerID(name: string) {
    return this.HttpC.get(API_URL + '/summoner/v4/summoners/by-name/' + name + '?api_key=' + API_KEY);
  }

  public getActiveGame(id: string) {
    return this.HttpC.get(API_URL + '/spectator/v4/active-games/by-summoner/' + id + '?api_key=' + API_KEY);
  }

  public getRank(id: string){
    return this.HttpC.get("https://euw1.api.riotgames.com/lol/league/v4/positions/by-summoner/" + id +"?api_key=" + API_KEY);
  }
}
