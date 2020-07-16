import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './administration/test-page/test-page.component';
import { AdminDashboardComponent } from './administration/admin-dashboard/admin-dashboard.component';
import { ProjectsComponent } from './journal-sections/projects/projects.component';
import { LoginComponent } from './authentication/login/login.component';
import { BranchesComponent } from './journal-sections/branches/branches.component';
import { CategoriesComponent } from './journal-sections/categories/categories.component';
import { CategoriesDetailComponent } from './journal-sections/categories-detail/categories-detail.component';
import { EducationComponent } from './journal-sections/education/education.component';
import { ErrorLogComponent } from './journal-sections/error-log/error-log.component';
import { ExperimentsJournalComponent } from './journal-sections/experiments-journal/experiments-journal.component';
import { PostsComponent } from './journal-sections/posts/posts.component';
import { RolesComponent } from './journal-sections/roles/roles.component';
import { SystemJournalComponent } from './journal-sections/system-journal/system-journal.component';
import { UsersComponent } from './journal-sections/users/users.component';
import { PasswordRecoverComponent } from './authentication/password-recover/password-recover.component';
import { ClientSearchComponent } from './client-front/client-search/client-search.component';
import { CartComponent } from './client-front/cart/cart.component';
import { CheckoutComponent } from './client-front/checkout/checkout.component';
import { LanguageComponent } from './administration/language/language.component';

const routes: Routes = [
  { path: '',   redirectTo: '/test-page', pathMatch: 'full' },
  { path: 'app-admin-dashboard', component: AdminDashboardComponent },
  { path: 'test-page', component: TestPageComponent},
  { path: 'login-page', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories-detail', component: CategoriesDetailComponent },
  { path: 'education', component: EducationComponent },
  { path: 'error-log', component: ErrorLogComponent },
  { path: 'experiments-journal', component: ExperimentsJournalComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'system-journal', component: SystemJournalComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-recover', component: PasswordRecoverComponent },
  { path: 'client-search', component: ClientSearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'change-language', component: LanguageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
