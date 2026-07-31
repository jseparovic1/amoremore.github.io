import type { ApartmentId } from './apartments';

export const guestWifi: Record<ApartmentId, { network: string; password: string }> = {
  amore: { network: 'Amore', password: '#AmoreMore' },
  more: { network: 'More', password: '#MoreAmore' },
};

export const checkInTime = '15:00';
export const checkOutTime = '10:00';

/** Optional host phone (e.g. '+385 91 234 5678'); leave empty to hide. */
export const hostPhone = '';
