export class Gauge {
  type: "line" | "circle";
  value: number;
  minValue: number;
  maxValue: number;
  thickness: boolean;
  showValue: boolean;
  showMinMax: boolean;
  ranges: GaugeRange[];

  constructor(json: string) {
    this.fromJson(json);
  }

  /**
   * Load Gauge object represented by the GaugeSDT.ToJson()
   */
  fromJson(json: string) {
    let sdt;

    try {
      sdt = JSON.parse(json);
    } catch (e) {
      sdt = {};
    }

    switch (sdt.Type?.toLowerCase()) {
      case "circular":
      case "circle":
        this.type = "circle";
        break;
      case "line":
      default:
        this.type = "line";
        break;
    }
    this.value = sdt.Value || 0;
    this.minValue = sdt.MinValue || 0;
    this.maxValue = sdt.MaxValue || 0;
    this.thickness = sdt.Thickness || 10;
    this.showValue = sdt.ShowValue || false;
    this.showMinMax = sdt.ShowMinMax || false;
    this.ranges = sdt.Ranges
      ? sdt.Ranges.map(
          range =>
            ({
              name: range.Name,
              amount: range.Length,
              color: range.Color
            } as GaugeRange)
        )
      : [];
  }
}

export class GaugeRange {
  name: string;
  amount: number;
  color: string;
}
