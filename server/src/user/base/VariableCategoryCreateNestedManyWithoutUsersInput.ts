/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VariableCategoryWhereUniqueInput } from "../../variableCategory/base/VariableCategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VariableCategoryCreateNestedManyWithoutUsersInput {
  @Field(() => [VariableCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VariableCategoryWhereUniqueInput],
  })
  connect?: Array<VariableCategoryWhereUniqueInput>;
}

export { VariableCategoryCreateNestedManyWithoutUsersInput as VariableCategoryCreateNestedManyWithoutUsersInput };
