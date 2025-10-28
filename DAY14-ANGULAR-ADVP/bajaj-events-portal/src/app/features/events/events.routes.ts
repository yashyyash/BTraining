import { Routes } from "@angular/router";
import { EventList } from "./components/event-list/event-list";

import { authGuard } from "../../core/guards/auth-guard";
import { hrGuardGuard } from "../../core/guards/hr-guard-guard";

export const eventsRoutes: Routes = [
    {
        path: "",
        component: EventList,
        title: "Event list",
        canActivate: [authGuard]
    },
    {
        path: ":id",
        loadComponent: () => import('../events/components/event-details/event-details').then(ed => ed.EventDetails),
        title: "Event details",
        data: { companyName: 'Bajaj Finserv' },
        canActivate: [authGuard, hrGuardGuard]
    },
    {
        path: "register",
        loadComponent: () => import('./components/register-event/register-event').then(re => re.RegisterEvent),
        title: "Register Event",
        canActivate: [authGuard, hrGuardGuard]
    }
];