export class CountryStats {
  country: string;
  // tslint:disable-next-line:variable-name
  private _countryPl: string;
  confirmedCases: number;
  recoveredCases: number;
  deathsCases: number;


  set countryPl(value: string) {
    this._countryPl = value;
  }

  get countryPl(): string {
    return this._countryPl;
  }
}
