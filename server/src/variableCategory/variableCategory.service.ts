import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VariableCategoryServiceBase } from "./base/variableCategory.service.base";

@Injectable()
export class VariableCategoryService extends VariableCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
