import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type VariableCreateInput = {
  name?: string | null;
  variableCategory?: VariableCategoryWhereUniqueInput | null;
};
