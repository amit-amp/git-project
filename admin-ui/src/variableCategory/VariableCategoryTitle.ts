import { VariableCategory as TVariableCategory } from "../api/variableCategory/VariableCategory";

export const VARIABLECATEGORY_TITLE_FIELD = "id";

export const VariableCategoryTitle = (record: TVariableCategory): string => {
  return record.id || String(record.id);
};
