import { Variable as TVariable } from "../api/variable/Variable";

export const VARIABLE_TITLE_FIELD = "name";

export const VariableTitle = (record: TVariable): string => {
  return record.name || String(record.id);
};
