import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitSpaceServiceBase } from "./base/gitSpace.service.base";

@Injectable()
export class GitSpaceService extends GitSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
