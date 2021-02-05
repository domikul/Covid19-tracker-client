export class CountryStats {
  private _country: string;
  private _countryPl: string;
  private _confirmedCases: number;
  private _recoveredCases: number;
  private _deathsCases: number;


  set countryPl(value: string) {
    this._countryPl = value;
  }

  get countryPl(): string {
    return this._countryPl;
  }

  get country(): string {
    return this._country;
  }

  get confirmedCases(): number {
    return this._confirmedCases;
  }

  get recoveredCases(): number {
    return this._recoveredCases;
  }

  get deathsCases(): number {
    return this._deathsCases;
  }
}
