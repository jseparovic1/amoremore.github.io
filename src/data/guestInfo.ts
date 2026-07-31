import type { ApartmentId } from './apartments';

/**
 * Guest portal data. TODO: replace the WiFi credentials and phone number
 * with the real ones before sharing the portal with guests.
 */
export const guestWifi: Record<ApartmentId, { network: string; password: string }> = {
  amore: { network: 'AmoreMore-Amore', password: 'CHANGE-ME' },
  more: { network: 'AmoreMore-More', password: 'CHANGE-ME' },
};

export const checkInTime = '15:00';
export const checkOutTime = '10:00';

/** Optional host phone (e.g. '+385 91 234 5678'); leave empty to hide. */
export const hostPhone = '';
