import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VariableService } from "./variable.service";
import { VariableControllerBase } from "./base/variable.controller.base";

@swagger.ApiTags("variables")
@common.Controller("variables")
export class VariableController extends VariableControllerBase {
  constructor(
    protected readonly service: VariableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
