import * as jstz from "jstz";

export const storageKey = "currentTimezone";

export const detect = (): string => {
  let timezone = jstz.determine().name();
  return timezone;
};

export enum timezones {
  Cairo = "Africa/Cairo",
  Johannesburg = "Africa/Johannesburg",
  Lagos = "Africa/Lagos",
  Anchorage = "America/Anchorage",
  Buenos_Aires = "America/Argentina/Buenos_Aires",
  Asuncion = "America/Asuncion",
  Bogota = "America/Bogota",
  Caracas = "America/Caracas",
  Chicago = "America/Chicago",
  Denver = "America/Denver",
  Godthab = "America/Godthab",
  Guatemala = "America/Guatemala",
  Halifax = "America/Halifax",
  Los_Angeles = "America/Los_Angeles",
  Mexico_City = "America/Mexico_City",
  Montevideo = "America/Montevideo",
  New_York = "America/New_York",
  Noronha = "America/Noronha",
  Phoenix = "America/Phoenix",
  Santiago = "America/Santiago",
  Santo_Domingo = "America/Santo_Domingo",
  Sao_Paulo = "America/Sao_Paulo",
  St_Johns = "America/St_Johns",
  Baghdad = "Asia/Baghdad",
  Beirut = "Asia/Beirut",
  Damascus = "Asia/Damascus",
  Dhaka = "Asia/Dhaka",
  Dubai = "Asia/Dubai",
  Jerusalem = "Asia/Jerusalem",
  Kabul = "Asia/Kabul",
  Karachi = "Asia/Karachi",
  Katmandu = "Asia/Katmandu",
  Kolkata = "Asia/Kolkata",
  Rangoon = "Asia/Rangoon",
  Shanghai = "Asia/Shanghai",
  Tehran = "Asia/Tehran",
  Tokyo = "Asia/Tokyo",
  Yerevan = "Asia/Yerevan",
  Azores = "Atlantic/Azores",
  Cape_Verde = "Atlantic/Cape_Verde",
  Adelaide = "Australia/Adelaide",
  Brisbane = "Australia/Brisbane",
  Darwin = "Australia/Darwin",
  Sydney = "Australia/Sydney",
  GMT_12 = "Etc/GMT_12",
  GMT_2 = "Etc/GMT_2",
  UTC = "Etc/UTC",
  Berlin = "Europe/Berlin",
  Helsinkz = "Europe/Helsinki",
  Istanbul = "Europe/Istanbul",
  London = "Europe/London",
  Auckland = "Pacific/Auckland",
  Honolulu = "Pacific/Honolulu",
  Noumea = "Pacific/Noumea",
  Tongatapu = "Pacific/Tongatapu"
}

export const fromString = (stz: string): timezones => {
  let arrTimezones = Object.keys(timezones);
  return (
    arrTimezones.find(e => timezones[e] === stz) || timezones[timezones.UTC]
  );
};
