import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GitSpaceResolverBase } from "./base/gitSpace.resolver.base";
import { GitSpace } from "./base/GitSpace";
import { GitSpaceService } from "./gitSpace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gitspace)
export class GitSpaceResolver extends GitSpaceResolverBase {
  constructor(
    protected readonly service: GitSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
