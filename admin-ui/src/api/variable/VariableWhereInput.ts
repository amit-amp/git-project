import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type VariableWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  variableCategory?: VariableCategoryWhereUniqueInput;
};
