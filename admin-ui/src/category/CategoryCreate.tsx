import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VariableCategoryTitle } from "../variableCategory/VariableCategoryTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="variablecategory.id"
          reference="VariableCategory"
          label="VariableCategory"
        >
          <SelectInput optionText={VariableCategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
