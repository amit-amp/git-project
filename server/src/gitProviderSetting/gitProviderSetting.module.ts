import { Module } from "@nestjs/common";
import { GitProviderSettingModuleBase } from "./base/gitProviderSetting.module.base";
import { GitProviderSettingService } from "./gitProviderSetting.service";
import { GitProviderSettingResolver } from "./gitProviderSetting.resolver";

@Module({
  imports: [GitProviderSettingModuleBase],
  providers: [GitProviderSettingService, GitProviderSettingResolver],
  exports: [GitProviderSettingService],
})
export class GitProviderSettingModule {}
