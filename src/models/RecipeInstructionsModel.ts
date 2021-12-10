export interface Instruction {
  number: number;
  step: string;
}

export default interface RecipeInstructionsModel {
  name: string;
  steps: Instruction[];
}
