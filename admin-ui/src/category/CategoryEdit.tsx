import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VariableCategoryTitle } from "../variableCategory/VariableCategoryTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
