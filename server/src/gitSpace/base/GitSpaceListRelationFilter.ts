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
import { GitSpaceWhereInput } from "./GitSpaceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GitSpaceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GitSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => GitSpaceWhereInput)
  @IsOptional()
  @Field(() => GitSpaceWhereInput, {
    nullable: true,
  })
  every?: GitSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => GitSpaceWhereInput)
  @IsOptional()
  @Field(() => GitSpaceWhereInput, {
    nullable: true,
  })
  some?: GitSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => GitSpaceWhereInput)
  @IsOptional()
  @Field(() => GitSpaceWhereInput, {
    nullable: true,
  })
  none?: GitSpaceWhereInput;
}
export { GitSpaceListRelationFilter as GitSpaceListRelationFilter };