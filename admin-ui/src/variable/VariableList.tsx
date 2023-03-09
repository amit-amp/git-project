import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VARIABLECATEGORY_TITLE_FIELD } from "../variableCategory/VariableCategoryTitle";

export const VariableList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Variables"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VariableCategory"
          source="variablecategory.id"
          reference="VariableCategory"
        >
          <TextField source={VARIABLECATEGORY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
