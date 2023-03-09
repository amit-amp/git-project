import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VariableCategoryService } from "./variableCategory.service";
import { VariableCategoryControllerBase } from "./base/variableCategory.controller.base";

@swagger.ApiTags("variableCategories")
@common.Controller("variableCategories")
export class VariableCategoryController extends VariableCategoryControllerBase {
  constructor(
    protected readonly service: VariableCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
