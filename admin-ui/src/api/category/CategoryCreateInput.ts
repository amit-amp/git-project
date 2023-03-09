import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type CategoryCreateInput = {
  name?: string | null;
  variableCategory?: VariableCategoryWhereUniqueInput | null;
};
