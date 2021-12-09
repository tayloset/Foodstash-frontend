export default interface Profile {
  _id?: string;
  uid: string;
  pantry: string[];
  equipment: string[];
  diet: string[];
  intolerances: string;
  favorites: string[];
}
