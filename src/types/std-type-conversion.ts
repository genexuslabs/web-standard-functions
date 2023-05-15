import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "./gxdate";
import { GxDatetime } from "./gxdatetime";

export class Std_TypeConversions {
  static INVALID_DATE = 0;
  static DATE_AND_TIME = -1;
  static ONLY_DATE = -2;
  static ONLY_TIME = -3;

  // -----------------------------------------------------------------------------------------------------//
  //  ------------------------------------------GxDate----------------------------------------------------//

  // Serialization date/datetime/time functions
  //    * Empty date = '0000-00-00'
  //    * Empty datetime = '0000-00-00T00:00:00'
  //    * Empty time = '00:00:00'
  static SerializeDateToISOString(d: Date): string {
    if (!Std_TypeConversions.isEmpty(d)) {
      return Std_TypeConversions.dateToISOString(d);
    }
    return "0000-00-00T00:00:00";
  }

  static DeserializeISOStringToDate(s: string): Date {
    return Std_TypeConversions.dateFromISOString(s);
  }

  //  -----------------------------------------------------------------------------------------------------//
  //  ----------------------------------------END GxDate--------------------------------------------------//

  //  -----------------------------------------------------------------------------------------------------//
  //  --------------------------------------GxDateTime----------------------------------------------------//

  static SerializeDatetimeToISOString(d: Date, convertTimeFromUTC): string {
    if (!Std_TypeConversions.isEmpty(d)) {
      if (convertTimeFromUTC) {
        return Std_TypeConversions.datetimeToISOString(
          Std_TypeConversions.localToUTC(d)
        );
      } else {
        return Std_TypeConversions.datetimeToISOString(d);
      }
    }
    return "0000-00-00T00:00:00";
  }

  static DeserializeISOStringToDatetime(s: string, convertTimeFromUTC): Date {
    return Std_TypeConversions.datetimeFromISOString(s, convertTimeFromUTC);
  }

  //  -----------------------------------------------------------------------------------------------------//
  //  ------------------------------------END GxDateTime--------------------------------------------------//

  //  -----------------------------------------------------------------------------------------------------//
  //  ---------------------date/datetime/time conversion auxiliary functions------------------------------//

  static isEmpty = (target: Date): boolean => {
    return target.getTime() === EMPTY_DATE_VALUE.getTime();
  };

  static dateToISOString(d: Date): string {
    if (d) {
      const a = Std_TypeConversions.dateToArray(d);
      return Std_TypeConversions.dateArrayToDateString(a);
    }
    return "";
  }

  static dateFromISOString(s: string): Date {
    let d: Date;
    try {
      const da = Std_TypeConversions.ISODateToDTA(s);
      da[0] = Std_TypeConversions.ONLY_DATE;
      d = Std_TypeConversions.DTAToDate(da, false);
    } catch {
      throw new Error('Invalid date: "' + s + '"');
    }
    if (!Std_TypeConversions.isValidDate(d)) {
      d = new Date(0, 0, 0);
    }
    return d;
  }

  static dateArrayToDateString(s: Array<number>): string {
    // yyyy-mm-dd
    return (
      ("000" + s[0]).slice(-4) +
      "-" +
      ("0" + (s[1] + 1)).slice(-2) +
      "-" +
      ("0" + s[2]).slice(-2)
    );
  }

  static ISODateToDTA(s: string): Array<number> {
    // DTA = Array<numeric> = [date_format, year, month, day, hour, min, sec, millis]
    const datetimeS = s.split("T");
    if (datetimeS.length > 1) {
      const dateS = datetimeS[0].split("-");
      const timeS = datetimeS[1].split(":");
      let dt_sec = timeS[2] || 0 ;
      let dt_millis = "0";
      if (timeS.length === 3 && timeS[2].indexOf(".") > -1) {
        const sec_millis = timeS[2].split(".");
        dt_sec = sec_millis[0];
        dt_millis = sec_millis[1];
      }
      return [
        Std_TypeConversions.DATE_AND_TIME,
        +dateS[0],
        +dateS[1],
        +dateS[2],
        +timeS[0],
        +timeS[1],
        +dt_sec,
        +dt_millis
      ];
    } else if (s.indexOf("-") > 1) {
      const dateS = datetimeS[0].split("-");
      return [
        Std_TypeConversions.ONLY_DATE,
        +dateS[0],
        +dateS[1],
        +dateS[2],
        0,
        0,
        0,
        0
      ];
    } else if (s.indexOf(":") > -1) {
      const timeS = datetimeS[0].split(":");
      let dt_sec = timeS[2];
      let dt_millis = "0";
      if (timeS.length === 3 && timeS[2].indexOf(".") > -1) {
        const sec_millis = timeS[2].split(".");
        dt_sec = sec_millis[0];
        dt_millis = sec_millis[1];
      }
      return [
        Std_TypeConversions.ONLY_TIME,
        0,
        0,
        0,
        +timeS[0],
        +timeS[1],
        +dt_sec,
        +dt_millis
      ];
    }
    return [Std_TypeConversions.INVALID_DATE, 0, 0, 0, 0, 0, 0, 0];
  }

  static DTAToDate(dta: Array<number>, utcToLocal: boolean): Date {
    if (dta[0] === Std_TypeConversions.INVALID_DATE) {
      return new Date(0, 0, 0, 0, 0, 0);
    } else if (dta[0] === Std_TypeConversions.ONLY_TIME) {
      return new Date(0, 0, 0, dta[4], dta[5], dta[6], dta[7]);
    } else {
      const a = dta.slice(1);
      if (utcToLocal && dta[0] !== Std_TypeConversions.ONLY_DATE) {
        return Std_TypeConversions.UTCToLocal(
          Std_TypeConversions.arrayToDate(a)
        );
      } else {
        return Std_TypeConversions.arrayToDate(a);
      }
    }
  }

  static isValidDate(d: any) {
    return d instanceof Date && !isNaN(d.getTime()) && d.getFullYear() >= 0;
  }

  static UTCToLocal(d: Date): Date {
    return Std_TypeConversions.applyOffset(
      d,
      -Std_TypeConversions.getTimezoneOffset()
    );
  }

  static arrayToDate(a: Array<number>): Date {
    const d = new Date();
    d.setFullYear(+a[0], +a[1] - 1, +a[2]);
    d.setHours(+a[3]);
    d.setMinutes(+a[4]);
    d.setSeconds(+a[5]);
    d.setMilliseconds(+a[6]);
    return d;
  }

  static applyOffset(d: Date, offset: number): Date {
    const d1 = new Date(d.getTime());
    d1.setMinutes(d1.getMinutes() + offset);
    return d1;
  }

  static getTimezoneOffset(): number {
    const x = new Date();
    return x.getTimezoneOffset();
  }

  static datetimeToISOString(d: Date): string {
    if (d) {
      const a = Std_TypeConversions.dateToArray(d);
      return Std_TypeConversions.dateArrayToDatetimeString(a);
    }
    return "";
  }

  static dateArrayToDatetimeString(s: Array<number>): string {
    // yyyy-mm-ddThh:mm:ss.mmm
    return (
      ("000" + s[0]).slice(-4) +
      "-" +
      ("0" + (s[1] + 1)).slice(-2) +
      "-" +
      ("0" + s[2]).slice(-2) +
      "T" +
      ("0" + s[3]).slice(-2) +
      ":" +
      ("0" + s[4]).slice(-2) +
      ":" +
      ("0" + s[5]).slice(-2) +
      "." +
      ("000" + s[6]).slice(-3)
    );
  }

  static datetimeFromISOString(s: string, utcToLocal = false): Date {
    let d: Date;
    try {
      const da = Std_TypeConversions.ISODateToDTA(s);
      d = Std_TypeConversions.DTAToDate(da, utcToLocal);
    } catch {
      throw new Error('Invalid date: "' + s + '"');
    }
    if (!Std_TypeConversions.isValidDate(d)) {
      d = new Date(0, 0, 0);
    }
    return d;
  }

  static localToUTC(d: Date): Date {
    return Std_TypeConversions.applyOffset(
      d,
      +Std_TypeConversions.getTimezoneOffset()
    );
  }

  static dateToArray(d: Date): Array<number> {
    return [
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    ];
  }

  static dateArrayToTimeString(s: Array<number>): string {
    // hh:mm:ss
    return (
      ("0" + s[3]).slice(-2) +
      ":" +
      ("0" + s[4]).slice(-2) +
      ":" +
      ("0" + s[5]).slice(-2)
    );
  }

  // Querystring minimal date/datetime/time functions
  static dateToQSString(d: Date): string {
    // YYYYMMDD
    if (!Std_TypeConversions.isEmpty(d) && Std_TypeConversions.isValidDate(d)) {
      const s = Std_TypeConversions.dateToArray(d);
      return (
        ("000" + s[0]).slice(-4) +
        ("0" + (s[1] + 1)).slice(-2) +
        ("0" + s[2]).slice(-2)
      );
    }
    return "";
  }

  static datetimeToQSString(d: Date): string {
    // YYYYMMDDHHMMSS
    if (!Std_TypeConversions.isEmpty(d) && Std_TypeConversions.isValidDate(d)) {
      const s = Std_TypeConversions.dateToArray(d);
      return (
        ("000" + s[0]).slice(-4) +
        ("0" + (s[1] + 1)).slice(-2) +
        ("0" + s[2]).slice(-2) +
        ("0" + s[3]).slice(-2) +
        ("0" + s[4]).slice(-2) +
        ("0" + s[5]).slice(-2)
      );
    }
    return "";
  }

  static timeToQSString(d: Date): string {
    // HHMMSS
    if (!Std_TypeConversions.isEmpty(d) && Std_TypeConversions.isValidDate(d)) {
      const s = Std_TypeConversions.dateToArray(d);
      return (
        ("0" + s[3]).slice(-2) + ("0" + s[4]).slice(-2) + ("0" + s[5]).slice(-2)
      );
    }
    return "";
  }
  //  /////////////////////////////////////////////////////////////////////////////////////

  //  /////////////////////////////////////////////////////////////////////////////////////
  // GxDate/GxDatetime/time conversion auxiliary functions

  static GxDateToISOString(d: GxDate): string {
    if (d) {
      const a = Std_TypeConversions.GxDateToArray(d);
      return Std_TypeConversions.dateArrayToDateString(a);
    }
    return "";
  }

  static GxDatetimeToISOString(d: GxDatetime): string {
    if (d) {
      const a = Std_TypeConversions.GxDateToArray(d);
      return Std_TypeConversions.dateArrayToDatetimeString(a);
    }
    return "";
  }

  static timeToISOString(d: GxDatetime): string {
    if (d) {
      const a = Std_TypeConversions.GxDateToArray(d);
      return Std_TypeConversions.dateArrayToTimeString(a);
    }
    return "";
  }

  static GxDateFromISOString(s: string): GxDate {
    let d: Date;
    try {
      const da = Std_TypeConversions.ISODateToDTA(s);
      da[0] = Std_TypeConversions.ONLY_DATE;
      d = Std_TypeConversions.DTAToDate(da, false);
    } catch {
      throw new Error('Invalid date: "' + s + '"');
    }
    if (!Std_TypeConversions.isValidDate(d)) {
      d = new Date(0, 0, 0);
    }
    return new GxDate(d);
  }

  static GxDateToArray(d: GxDate | GxDatetime): Array<number> {
    return [
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    ];
  }

  static isValidGxDate(d: GxDate | GxDatetime) {
    return (
      (d instanceof GxDate || d instanceof GxDatetime) &&
      !isNaN(d.getTime()) &&
      d.getFullYear() >= 0
    );
  }
}
