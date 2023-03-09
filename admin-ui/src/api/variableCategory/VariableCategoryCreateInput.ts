import { CategoryCreateNestedManyWithoutVariableCategoriesInput } from "./CategoryCreateNestedManyWithoutVariableCategoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VariableCreateNestedManyWithoutVariableCategoriesInput } from "./VariableCreateNestedManyWithoutVariableCategoriesInput";

export type VariableCategoryCreateInput = {
  categories?: CategoryCreateNestedManyWithoutVariableCategoriesInput;
  user?: UserWhereUniqueInput | null;
  variables?: VariableCreateNestedManyWithoutVariableCategoriesInput;
};
