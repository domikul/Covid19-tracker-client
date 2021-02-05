export class ChartStats {
  private _country: string;
  private _status: string;
  private _casesMap: Map<Date, number>;

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get casesMap(): Map<Date, number> {
    return this._casesMap;
  }

  set casesMap(value: Map<Date, number>) {
    this._casesMap = value;
  }
}
