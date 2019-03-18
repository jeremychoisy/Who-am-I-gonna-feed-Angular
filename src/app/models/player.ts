export class Player {
  constructor(
    public profileIconId: number,
    public championId: number,
    public summonerName: string,
    public mainRunePageId: number,
    public mainRuneId: number,
    public secondaryRunePageId: number,
    public spell1Id: number,
    public spell2Id: number,
    public division: string,
    public tier: string,
    public wins: number,
    public losses: number
    ) { }
}
