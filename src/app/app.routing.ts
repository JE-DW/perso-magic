import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    PagesComponent,
    
    PersoComponent
} from './pages';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'perso',
                component: PersoComponent
            },
            {
                path: '',
                redirectTo: 'perso',
                pathMatch: 'full'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
