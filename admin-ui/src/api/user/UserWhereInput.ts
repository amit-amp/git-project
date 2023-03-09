import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VariableCategoryListRelationFilter } from "../variableCategory/VariableCategoryListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  variableCategories?: VariableCategoryListRelationFilter;
};
