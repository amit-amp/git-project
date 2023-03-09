import { Category } from "../category/Category";
import { User } from "../user/User";
import { Variable } from "../variable/Variable";

export type VariableCategory = {
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  variables?: Array<Variable>;
};
