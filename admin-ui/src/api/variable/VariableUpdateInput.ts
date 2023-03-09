import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type VariableUpdateInput = {
  name?: string | null;
  variableCategory?: VariableCategoryWhereUniqueInput | null;
};
