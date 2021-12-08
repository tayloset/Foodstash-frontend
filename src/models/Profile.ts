export interface Diet {
  glutengree: boolean;
  ketogenic: boolean;
  vegetarian: boolean;
  lactovegetarian: boolean;
  ovovegetarian: boolean;
  pescetarian: boolean;
  paleo: boolean;
  primal: boolean;
  lowFODMAP: boolean;
  whole30: boolean;
}

export default interface Profile {
  _id?: string;
  uid: string;
  pantry: string[];
  pantryString: string;
  equipment: string[];
  equipmentString: string;
  diet: Diet;
  intolerances: string;
  favorites: string;
}
