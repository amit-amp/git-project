import { InputJsonValue } from "../../types";
import { VariableCategoryUpdateManyWithoutUsersInput } from "./VariableCategoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  variableCategories?: VariableCategoryUpdateManyWithoutUsersInput;
};
