import { Module } from "@nestjs/common";
import { GitSpaceModuleBase } from "./base/gitSpace.module.base";
import { GitSpaceService } from "./gitSpace.service";
import { GitSpaceResolver } from "./gitSpace.resolver";

@Module({
  imports: [GitSpaceModuleBase],
  providers: [GitSpaceService, GitSpaceResolver],
  exports: [GitSpaceService],
})
export class GitSpaceModule {}
