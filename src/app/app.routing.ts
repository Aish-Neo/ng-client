import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

//Auth
import { LoginComponent } from './components/auth/login/login.component';
//Guards
import { ApiGuard } from './guards/api.guard';

//User
import { ProfileComponent } from './components/user/profile/profile.component';

//Company
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import {ListOfJobsComponent} from "./components/jobs/list-of-jobs/list-of-jobs.component";
import {NgModule} from "@angular/core";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',           component: HomeComponent,pathMatch: 'full' },

  { path: 'login', loadChildren: 'app/components/auth/login/login.module#LoginModule'},
  { path: 'user/update',     component: ProfileComponent,canActivate:[ApiGuard], pathMatch: 'full' },
  { path: 'jobs', redirectTo: '/jobs/list', pathMatch: 'full' },
  { path: 'jobs/list', component: ListOfJobsComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRouting {};
