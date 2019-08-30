import { GUID } from "../../../types/guid";

/* tslint:disable:no-empty */
export class GeneXusSDSynchronizationSynchronizationEvents {
  /**
   * Checks if there are any pending changes to submit to the server.
   * @param {number} eventStatus
   * @return {boolean} Current implementation returns always `false`.
   */
  static hasEvents(eventStatus: number): boolean {
    return false;
  }

  /**
   * Accesses the stored events for processing.
   * @param {number} eventStatus
   * @return {any[]} Current implementation returns an empty array.
   */
  static getEvents(eventStatus: number): any[] {
    return [];
  }

  /**
   * Marks as pending an events in order to try sending it again later
   *
   * Current implementation does nothing.
   * @param {GUID} eventGUID
   */
  static markEventAsPending(eventGUID: GUID) {
    // Empty implemetation
  }

  /**
   * Removes some registry of the GXPendingEvents table.
   *
   * Current implementation does nothing.
   * @param {GUID} eventGUID
   */
  static removeEvent(eventGUID: GUID) {
    // Empty implemetation
  }
}
