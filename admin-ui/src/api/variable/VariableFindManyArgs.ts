import { VariableWhereInput } from "./VariableWhereInput";
import { VariableOrderByInput } from "./VariableOrderByInput";

export type VariableFindManyArgs = {
  where?: VariableWhereInput;
  orderBy?: Array<VariableOrderByInput>;
  skip?: number;
  take?: number;
};
