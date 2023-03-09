/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateVariableCategoryArgs } from "./CreateVariableCategoryArgs";
import { UpdateVariableCategoryArgs } from "./UpdateVariableCategoryArgs";
import { DeleteVariableCategoryArgs } from "./DeleteVariableCategoryArgs";
import { VariableCategoryFindManyArgs } from "./VariableCategoryFindManyArgs";
import { VariableCategoryFindUniqueArgs } from "./VariableCategoryFindUniqueArgs";
import { VariableCategory } from "./VariableCategory";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { VariableFindManyArgs } from "../../variable/base/VariableFindManyArgs";
import { Variable } from "../../variable/base/Variable";
import { User } from "../../user/base/User";
import { VariableCategoryService } from "../variableCategory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Variablecategory)
export class VariableCategoryResolverBase {
  constructor(
    protected readonly service: VariableCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "read",
    possession: "any",
  })
  async _variableCategoriesMeta(
    @graphql.Args() args: VariableCategoryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [VariableCategory])
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "read",
    possession: "any",
  })
  async variableCategories(
    @graphql.Args() args: VariableCategoryFindManyArgs
  ): Promise<VariableCategory[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => VariableCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "read",
    possession: "own",
  })
  async variableCategory(
    @graphql.Args() args: VariableCategoryFindUniqueArgs
  ): Promise<VariableCategory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VariableCategory)
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "create",
    possession: "any",
  })
  async createVariableCategory(
    @graphql.Args() args: CreateVariableCategoryArgs
  ): Promise<VariableCategory> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VariableCategory)
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "update",
    possession: "any",
  })
  async updateVariableCategory(
    @graphql.Args() args: UpdateVariableCategoryArgs
  ): Promise<VariableCategory | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VariableCategory)
  @nestAccessControl.UseRoles({
    resource: "VariableCategory",
    action: "delete",
    possession: "any",
  })
  async deleteVariableCategory(
    @graphql.Args() args: DeleteVariableCategoryArgs
  ): Promise<VariableCategory | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Parent() parent: VariableCategory,
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    const results = await this.service.findCategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Variable])
  @nestAccessControl.UseRoles({
    resource: "Variable",
    action: "read",
    possession: "any",
  })
  async variables(
    @graphql.Parent() parent: VariableCategory,
    @graphql.Args() args: VariableFindManyArgs
  ): Promise<Variable[]> {
    const results = await this.service.findVariables(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: VariableCategory): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}