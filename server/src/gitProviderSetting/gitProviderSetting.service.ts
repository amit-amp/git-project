import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitProviderSettingServiceBase } from "./base/gitProviderSetting.service.base";

@Injectable()
export class GitProviderSettingService extends GitProviderSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
