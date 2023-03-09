import { InputJsonValue } from "../../types";
import { VariableCategoryCreateNestedManyWithoutUsersInput } from "./VariableCategoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  variableCategories?: VariableCategoryCreateNestedManyWithoutUsersInput;
};
