import { Routes } from "@angular/router";
import { EpHome } from "./features/home/ep-home/ep-home";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { EventList } from "./features/events/components/event-list/event-list";
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
        title : "Emplyee list"
    },
    {
        path:"events",
        component:EventList,
        title : "event list"
    }
];

