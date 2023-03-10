/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VariableWhereInput } from "./VariableWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VariableListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VariableWhereInput,
  })
  @ValidateNested()
  @Type(() => VariableWhereInput)
  @IsOptional()
  @Field(() => VariableWhereInput, {
    nullable: true,
  })
  every?: VariableWhereInput;

  @ApiProperty({
    required: false,
    type: () => VariableWhereInput,
  })
  @ValidateNested()
  @Type(() => VariableWhereInput)
  @IsOptional()
  @Field(() => VariableWhereInput, {
    nullable: true,
  })
  some?: VariableWhereInput;

  @ApiProperty({
    required: false,
    type: () => VariableWhereInput,
  })
  @ValidateNested()
  @Type(() => VariableWhereInput)
  @IsOptional()
  @Field(() => VariableWhereInput, {
    nullable: true,
  })
  none?: VariableWhereInput;
}
export { VariableListRelationFilter as VariableListRelationFilter };
