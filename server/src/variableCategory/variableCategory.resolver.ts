import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VariableCategoryResolverBase } from "./base/variableCategory.resolver.base";
import { VariableCategory } from "./base/VariableCategory";
import { VariableCategoryService } from "./variableCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Variablecategory)
export class VariableCategoryResolver extends VariableCategoryResolverBase {
  constructor(
    protected readonly service: VariableCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
