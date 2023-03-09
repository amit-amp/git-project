import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VariableCategoryWhereUniqueInput } from "../variableCategory/VariableCategoryWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  variableCategory?: VariableCategoryWhereUniqueInput;
};
