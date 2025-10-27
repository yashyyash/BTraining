import { Routes } from "@angular/router";
import { EpHome } from "./features/home/ep-home/ep-home";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { EventList } from "./features/events/components/event-list/event-list";
import { ResorceNotFound } from "./shared/components/resorce-not-found/resorce-not-found";
import { Login } from "./features/security/component/login/login";
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
    },
    {
        path:"events/:id",
        loadComponent:()=>import("./features/events/components/event-details/event-details").then(ed=>ed.EventDetails),
        title:"Event Details"
    },
    {
        path:"login",
        component : Login,
        title :"Login"
    },
    {
        path:"**",
        component : ResorceNotFound,
        title:"not found -404"
    }
];

