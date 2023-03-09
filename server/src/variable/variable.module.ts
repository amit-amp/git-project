import { Module } from "@nestjs/common";
import { VariableModuleBase } from "./base/variable.module.base";
import { VariableService } from "./variable.service";
import { VariableController } from "./variable.controller";
import { VariableResolver } from "./variable.resolver";

@Module({
  imports: [VariableModuleBase],
  controllers: [VariableController],
  providers: [VariableService, VariableResolver],
  exports: [VariableService],
})
export class VariableModule {}
