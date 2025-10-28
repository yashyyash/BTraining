import { Routes } from "@angular/router";
import { EpHome } from "./features/home/ep-home/ep-home";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { EventList } from "./features/events/components/event-list/event-list";
import { Login } from "./features/security/components/login/login";
import { RegisterEvent } from "./features/events/components/register-event/register-event";
import { RegisterEmployeeComponent } from "./features/employees/components/register-employee/register-employee";
export const routes :Routes= [
    {
        path:" ",//default Route
        component:EpHome,
        title:'Bajaj-EP-Home'
    },
    {
        path:"home",
        component:EpHome,
        title : "Bajaj Ep Home"
    },
    {
        path:"employees",
        component:EmployeeList,
        title : "Employee list"
    },
    {
        path:"employees/register",
        component:RegisterEmployeeComponent,
        title : "Employee list"
    },
    {
        path:"events",
        component:EventList,
        title : "Event list"
    },
    {
        path:"events/register",
        component:RegisterEvent,
        title:"Register events"
    },
    {
        path:"login",
        component:Login,
        title:"Login"

    }
];

