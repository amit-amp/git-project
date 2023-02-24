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
import { GitProviderSettingWhereInput } from "./GitProviderSettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GitProviderSettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GitProviderSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GitProviderSettingWhereInput)
  @IsOptional()
  @Field(() => GitProviderSettingWhereInput, {
    nullable: true,
  })
  every?: GitProviderSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitProviderSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GitProviderSettingWhereInput)
  @IsOptional()
  @Field(() => GitProviderSettingWhereInput, {
    nullable: true,
  })
  some?: GitProviderSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitProviderSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GitProviderSettingWhereInput)
  @IsOptional()
  @Field(() => GitProviderSettingWhereInput, {
    nullable: true,
  })
  none?: GitProviderSettingWhereInput;
}
export { GitProviderSettingListRelationFilter as GitProviderSettingListRelationFilter };