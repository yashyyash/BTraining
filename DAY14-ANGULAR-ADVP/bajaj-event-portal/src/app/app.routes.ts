import { Routes } from "@angular/router";
import { EpHome } from "./features/home/ep-home/ep-home";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { EventList } from "./features/events/components/event-list/event-list";
import { ResorceNotFound } from "./shared/components/resorce-not-found/resorce-not-found";
import { Login } from "./features/security/components/login/login";
import { authGuard } from "./core/guards/auth-guard";
export const routes :Routes= [
    {
        path:" ",          //default Route
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
        title : "Event list",
        canActivate: [authGuard]
    },
    {
        path:"events/:id",
        loadComponent: () => import('./features/events/components/event-details/event-details').then(ed => ed.EventDetails),
        title : "Event details",
        data: { companyName: 'Bajaj Finserv' },
        canActivate:[authGuard]
    },
    {
        path:"login",
        component: Login,
        title : "Login"
    },
    {
        path:"**",
        component:ResorceNotFound,
        title : "Resorce Not Found - 404"
    }
];

