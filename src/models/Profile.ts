interface Diet {
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

export interface Intolerances {
  dairy: boolean;
  egg: boolean;
  gulten: boolean;
  grain: boolean;
  peanut: boolean;
  seafood: boolean;
  sesame: boolean;
  shellfish: boolean;
  soy: boolean;
  sulfite: boolean;
  treeNut: boolean;
  wheat: boolean;
}

export default interface Profile {
  _id?: string;
  uid: string;
  pantry: string[];
  equipment: string[];
  diet: Diet;
  intolerances: any;
  favorites: string[];
}
