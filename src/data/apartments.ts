import type { ImageMetadata } from 'astro';

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/**/*.jpg',
  { eager: true }
);

function photo(folder: string, id: string): ImageMetadata {
  const key = `../assets/photos/${folder}/${id}.jpg`;
  const mod = photoModules[key];
  if (!mod) throw new Error(`Missing photo: ${key}`);
  return mod.default;
}

export type ApartmentId = 'amore' | 'more';

export interface Apartment {
  id: ApartmentId;
  motif: 'heart' | 'wave';
  /** curated gallery order; first entry is the page hero */
  gallery: ImageMetadata[];
  card: ImageMetadata;
  plaque: ImageMetadata;
}

const amoreIds = [
  '690954614', // bed and dining, bright
  '690954625', // kitchenette and bed
  '690954606', // kitchen corner with bed
  '690954585', // dining nook and bed
  '690954409', // bed beside dining table
  '690954462', // bed and wardrobe
  '690954573', // bed detail
  '690954581', // pillows and bed
  '690954434', // kitchen with gold kettle
  '690954444', // kitchen and fridge
  '690954478', // coffee corner
  '690954591', // kettle and bathroom door
  '690954523', // bathroom fittings
  '690954534', // round mirror vanity
  '690954551', // kitchen and TV wall
  '690954487', // bed and TV
  '690954610', // Amore door plaque
];

const moreIds = [
  '690954402', // open plan living room
  '690954594', // living room with sofa
  '690954598', // sofa and hallway
  '690954569', // living and dining
  '690954356', // kitchen island with flowers
  '690954501', // dining table and kitchen
  '690954506', // kitchen towards hallway
  '690954545', // dining nook
  '690954471', // living room wide
  '690954495', // sofa and window
  '690954417', // bedroom with curtains
  '690954426', // bedroom velvet headboard
  '690954512', // bedroom with ceiling fan
  '690954619', // bed with towels
  '690954556', // bedroom mirror
  '690954561', // bathroom mosaic
  '690954565', // rain shower
  '690954394', // bathroom vanity
  '690954454', // More door plaque
];

export const apartments: Record<ApartmentId, Apartment> = {
  amore: {
    id: 'amore',
    motif: 'heart',
    gallery: amoreIds.map((id) => photo('amore', id)),
    card: photo('amore', '690954614'),
    plaque: photo('amore', '690954610'),
  },
  more: {
    id: 'more',
    motif: 'wave',
    gallery: moreIds.map((id) => photo('more', id)),
    card: photo('more', '690954402'),
    plaque: photo('more', '690954454'),
  },
};

export const sharedPhotos = {
  street: photo('shared', '694798818'),
  entrance: photo('shared', '694799033'),
};

const mapModules = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/shared/map.png', {
  eager: true,
});
export const mapImage = Object.values(mapModules)[0].default;

export const homeHero = photo('more', '690954356');

/** story section pair: airy Amore studio behind, warm More bedroom in front */
export const storyPhotos = {
  back: photo('amore', '690954625'),
  front: photo('more', '690954426'),
};

export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=43.505616,16.450061';
