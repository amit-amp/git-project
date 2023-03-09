import { VariableCategory } from "../variableCategory/VariableCategory";

export type Variable = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  variableCategory?: VariableCategory | null;
};
