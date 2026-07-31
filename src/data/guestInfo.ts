import type { ApartmentId } from './apartments';

export const guestWifi: Record<ApartmentId, { network: string; password: string }> = {
  amore: { network: 'Amore', password: '#AmoreMore' },
  more: { network: 'More', password: '#MoreAmore' },
};

export const checkInTime = '15:00';
export const checkOutTime = '11:00';

/** Code for the green entrance door (same for both apartments). */
export const doorCode = '3105';

/** Optional host phone (e.g. '+385 91 234 5678'); leave empty to hide. */
export const hostPhone = '';
