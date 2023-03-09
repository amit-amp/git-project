import { CategoryUpdateManyWithoutVariableCategoriesInput } from "./CategoryUpdateManyWithoutVariableCategoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VariableUpdateManyWithoutVariableCategoriesInput } from "./VariableUpdateManyWithoutVariableCategoriesInput";

export type VariableCategoryUpdateInput = {
  categories?: CategoryUpdateManyWithoutVariableCategoriesInput;
  user?: UserWhereUniqueInput | null;
  variables?: VariableUpdateManyWithoutVariableCategoriesInput;
};
