import { VariableCategory } from "../variableCategory/VariableCategory";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  variableCategory?: VariableCategory | null;
};
