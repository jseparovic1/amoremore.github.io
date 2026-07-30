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

export interface GalleryPhoto {
  image: ImageMetadata;
  /** descriptive alt text for accessibility and image SEO */
  alt: string;
}

export interface Apartment {
  id: ApartmentId;
  motif: 'heart' | 'wave';
  /** curated gallery order; first entry is the page hero */
  gallery: GalleryPhoto[];
  card: ImageMetadata;
  plaque: ImageMetadata;
}

const amoreShots: Array<[string, string]> = [
  ['690954614', 'Bright studio with the bed and dining table'],
  ['690954625', 'Kitchenette and bed in warm light'],
  ['690954606', 'Kitchen corner with the bed beyond'],
  ['690954585', 'Dining nook beside the bed'],
  ['690954409', 'Bed next to the dining table'],
  ['690954462', 'Bed and oak wardrobe'],
  ['690954573', 'Detail of the made bed'],
  ['690954581', 'Soft pillows on the bed'],
  ['690954434', 'Kitchen with a gold kettle'],
  ['690954444', 'Kitchen and fridge'],
  ['690954478', 'Coffee corner'],
  ['690954591', 'Kettle beside the bathroom door'],
  ['690954523', 'Brass bathroom fittings'],
  ['690954534', 'Round mirror above the vanity'],
  ['690954551', 'Kitchen and TV wall'],
  ['690954487', 'Bed facing the TV'],
  ['690954610', 'Amore door plaque'],
];

const moreShots: Array<[string, string]> = [
  ['690954402', 'Open plan living room'],
  ['690954594', 'Living room with the sofa'],
  ['690954598', 'Sofa and hallway'],
  ['690954569', 'Living and dining area'],
  ['690954356', 'Kitchen island with fresh flowers'],
  ['690954501', 'Dining table and kitchen'],
  ['690954506', 'Kitchen looking towards the hallway'],
  ['690954545', 'Dining nook'],
  ['690954471', 'Wide view of the living room'],
  ['690954495', 'Sofa by the window'],
  ['690954417', 'Bedroom with curtains drawn'],
  ['690954426', 'Bedroom with a velvet headboard'],
  ['690954512', 'Bedroom with a ceiling fan'],
  ['690954619', 'Bed with folded towels'],
  ['690954556', 'Bedroom mirror'],
  ['690954561', 'Bathroom with mosaic tiles'],
  ['690954565', 'Rain shower'],
  ['690954394', 'Bathroom vanity'],
  ['690954454', 'More door plaque'],
];

export const apartments: Record<ApartmentId, Apartment> = {
  amore: {
    id: 'amore',
    motif: 'heart',
    gallery: amoreShots.map(([id, alt]) => ({ image: photo('amore', id), alt })),
    card: photo('amore', '690954614'),
    plaque: photo('amore', '690954610'),
  },
  more: {
    id: 'more',
    motif: 'wave',
    gallery: moreShots.map(([id, alt]) => ({ image: photo('more', id), alt })),
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
