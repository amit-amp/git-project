import { Module } from "@nestjs/common";
import { VariableCategoryModuleBase } from "./base/variableCategory.module.base";
import { VariableCategoryService } from "./variableCategory.service";
import { VariableCategoryController } from "./variableCategory.controller";
import { VariableCategoryResolver } from "./variableCategory.resolver";

@Module({
  imports: [VariableCategoryModuleBase],
  controllers: [VariableCategoryController],
  providers: [VariableCategoryService, VariableCategoryResolver],
  exports: [VariableCategoryService],
})
export class VariableCategoryModule {}
