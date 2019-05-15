import { GUID } from "../../../types/guid";

export class GeneXusSDSynchronizationSynchronizationEvents {
  /**
   * Checks if there are any pending changes to submit to the server.
   * @param {number} eventStatus
   * @return {boolean} Current implementation returns always `false`.
   */
  hasEvents(eventStatus: number): boolean {
    return false;
  }

  /**
   * Accesses the stored events for processing.
   * @param {number} eventStatus
   * @return {any[]} Current implementation returns an empty array.
   */
  getEvents(eventStatus: number): any[] {
    return [];
  }

  /**
   * Marks as pending an events in order to try sending it again later
   *
   * Current implementation does nothing.
   * @param {GUID} eventGUID
   */
  markEventAsPending(eventGUID: GUID) {}

  /**
   * Removes some registry of the GXPendingEvents table.
   *
   * Current implementation does nothing.
   * @param {GUID} eventGUID
   */
  removeEvent(eventGUID: GUID) {}
}
