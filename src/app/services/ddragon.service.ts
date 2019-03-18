import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import champs from '../../assets/data/champions.json'

const VERSION = '9.5.1';
const RUNES_PAGES_NUMBER = 5;

@Injectable({
  providedIn: 'root'
})

export class DdragonService {
  constructor(private httpC:HttpClient) { }

// Runes

  public getRunes(){
     return this.httpC.get("http://ddragon.leagueoflegends.com/cdn/" + VERSION + "/data/en_US/runesReforged.json");
  }


  public getChampionName(id: number){
    for(let champ of champs){
      if(champ.id === id){
        return champ.name;
      }
    }
  }

  public getMainRunePath(runes:object, runePageId:number, runeId:number){
    for(let i=0;i < RUNES_PAGES_NUMBER;i++){
      if(runes[i].id === runePageId){
        for(let rune of runes[i].slots[0].runes){
          if(rune.id === runeId){
            return rune.icon;
          }
        }
      }
    }
  }

  public getSecondaryRunePath(runes:object, runePageId: number){
    for(let i=0; i < RUNES_PAGES_NUMBER;i++){
      if(runes[i].id === runePageId){
        return runes[i].icon;
      }
    }
  }


// Icon

  public getPathSumIcon(id:number){
    return "http://ddragon.leagueoflegends.com/cdn/" + VERSION + "/img/profileicon/" + id + ".png";
  }

  public getPathChampIcon(name:string){
    return "http://ddragon.leagueoflegends.com/cdn/" + VERSION + "/img/champion/" + name +".png";

  }

  public getPathRuneIcon(path:string){
    return "https://ddragon.leagueoflegends.com/cdn/img/" + path;

  }
}
