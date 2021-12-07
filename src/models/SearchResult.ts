import Recipe from "./Recipe";

export default interface SearchResult {
  results: Recipe[];
  offset: number;
  number: number;
  totalReselts: number;
}
