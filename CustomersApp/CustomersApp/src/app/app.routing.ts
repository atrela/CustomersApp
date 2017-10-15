import { IntroductionComponent } from "./introduction/introduction.component";
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: IntroductionComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
