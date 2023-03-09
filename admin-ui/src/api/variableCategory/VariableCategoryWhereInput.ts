import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VariableListRelationFilter } from "../variable/VariableListRelationFilter";

export type VariableCategoryWhereInput = {
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  variables?: VariableListRelationFilter;
};
