export interface ScryfallImageUris {
  small?: string;
  normal?: string;
  large?: string;
  png?: string;
  art_crop?: string;
  border_crop?: string;
}

export interface ScryfallCardFace {
  image_uris?: ScryfallImageUris;
}

export interface ScryfallCard {
  id: string;
  name: string;
  image_uris?: ScryfallImageUris;
  card_faces?: ScryfallCardFace[];
}

export interface ScryfallListResponse {
  object: 'list';
  data: ScryfallCard[];
}

export interface ScryfallErrorResponse {
  object: 'error';
  code: string;
  details: string;
}
