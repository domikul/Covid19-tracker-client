export class ChartCanvas {
  private label: string;
  private data: number[];
  private backgroundColor: string[];
  private borderColor: string[];
  private fill: boolean;
  private borderWidth: number;

  constructor(label: string, data: number[], backgroundColor: string[], borderColor: string[], fill: boolean, borderWidth: number) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.fill = fill;
    this.borderWidth = borderWidth;
  }
}
