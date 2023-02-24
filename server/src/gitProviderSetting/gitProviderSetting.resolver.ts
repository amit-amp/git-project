import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GitProviderSettingResolverBase } from "./base/gitProviderSetting.resolver.base";
import { GitProviderSetting } from "./base/GitProviderSetting";
import { GitProviderSettingService } from "./gitProviderSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gitprovidersetting)
export class GitProviderSettingResolver extends GitProviderSettingResolverBase {
  constructor(
    protected readonly service: GitProviderSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
