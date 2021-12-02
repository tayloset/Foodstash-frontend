// interface Diet {}

// interface Intolerances {}

export default interface Profile {
  _id?: string;
  uid: string;
  pantry: string[];
  equipment: string[];
  diet: any;
  intolerances: any;
  favorites: string;
}
