import { JsonValue } from "type-fest";
import { VariableCategory } from "../variableCategory/VariableCategory";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  variableCategories?: Array<VariableCategory>;
};
