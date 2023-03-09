import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type CategoryUpdateInput = {
  name?: string | null;
  variableCategory?: VariableCategoryWhereUniqueInput | null;
};
