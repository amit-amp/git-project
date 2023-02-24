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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { GitSpaceWhereUniqueInput } from "../../gitSpace/base/GitSpaceWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumGitProviderSettingProvider } from "./EnumGitProviderSettingProvider";

@InputType()
class GitProviderSettingUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accessToken?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  copes?: string | null;

  @ApiProperty({
    required: false,
    type: () => GitSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GitSpaceWhereUniqueInput)
  @IsOptional()
  @Field(() => GitSpaceWhereUniqueInput, {
    nullable: true,
  })
  gitSpaces?: GitSpaceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  installationId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    enum: EnumGitProviderSettingProvider,
  })
  @IsEnum(EnumGitProviderSettingProvider)
  @IsOptional()
  @Field(() => EnumGitProviderSettingProvider, {
    nullable: true,
  })
  provider?: "GitHub" | "GiLab" | "Bitbucket";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  refreshToken?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tokenType?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uuid?: string | null;
}

export { GitProviderSettingUpdateInput as GitProviderSettingUpdateInput };