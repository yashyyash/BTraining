import { Routes } from "@angular/router";
import { EpHome } from "./features/home/ep-home/ep-home";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { EventList } from "./features/events/components/event-list/event-list";
import { Login } from "./features/security/components/login/login";
import { RegisterEvent } from "./features/events/components/register-event/register-event";
import { EventDetails } from "./features/events/components/event-details/event-details";
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
        path:"events",
        component:EventList,
        title : "Event list"
    },
        {
        path:"events/:id",
        component:EventDetails,
        title : "Event Details"
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

