import type { ApartmentId } from './apartments';

export const guestWifi: Record<ApartmentId, { network: string; password: string }> = {
  amore: { network: 'Amore', password: 'AmoreMore2025' },
  more: { network: 'More', password: 'MoreAmore2025' },
};

export const checkInTime = '15:00';
export const checkOutTime = '10:00';

/** Optional host phone (e.g. '+385 91 234 5678'); leave empty to hide. */
export const hostPhone = '';
