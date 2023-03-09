import { VariableCategoryWhereInput } from "./VariableCategoryWhereInput";
import { VariableCategoryOrderByInput } from "./VariableCategoryOrderByInput";

export type VariableCategoryFindManyArgs = {
  where?: VariableCategoryWhereInput;
  orderBy?: Array<VariableCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
