import { Routes } from "@angular/router";
import { EmployeeForbidden } from "../employees/components/employee-forbidden/employee-forbidden";

import { authGuard } from "../../core/guards/auth-guard";
import { hrGuardGuard } from "../../core/guards/hr-guard-guard";
import { EmployeeList } from "./components/employee-list/employee-list";

export const employeesRoutes: Routes = [
    {
        path:"employees",
        component:EmployeeList,
        title : "Employee list"
    },
    {
        path: "forbidden-access",
        component: EmployeeForbidden,
        title: "Forbidden Access - 403"
    },
];