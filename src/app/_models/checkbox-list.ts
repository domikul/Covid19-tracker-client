export class CheckboxList {
  private _name: string;
  private _selected: boolean;

  constructor(name: string, selected: boolean) {
    this._name = name;
    this._selected = selected;
  }


  get name(): string {
    return this._name;
  }

  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
  }
}
