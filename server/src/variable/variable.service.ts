import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VariableServiceBase } from "./base/variable.service.base";

@Injectable()
export class VariableService extends VariableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
