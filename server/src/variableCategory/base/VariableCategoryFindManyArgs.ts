/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VariableCategoryWhereInput } from "./VariableCategoryWhereInput";
import { Type } from "class-transformer";
import { VariableCategoryOrderByInput } from "./VariableCategoryOrderByInput";

@ArgsType()
class VariableCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VariableCategoryWhereInput,
  })
  @Field(() => VariableCategoryWhereInput, { nullable: true })
  @Type(() => VariableCategoryWhereInput)
  where?: VariableCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [VariableCategoryOrderByInput],
  })
  @Field(() => [VariableCategoryOrderByInput], { nullable: true })
  @Type(() => VariableCategoryOrderByInput)
  orderBy?: Array<VariableCategoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VariableCategoryFindManyArgs as VariableCategoryFindManyArgs };