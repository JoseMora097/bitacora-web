import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './administration/test-page/test-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminIndexComponent } from './administration/admin-index/admin-index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminDashboardComponent } from './administration/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { PasswordRecoverComponent } from './authentication/password-recover/password-recover.component';
import { BranchesComponent } from './journal-sections/branches/branches.component';
import { RolesComponent } from './journal-sections/roles/roles.component';
import { PostsComponent } from './journal-sections/posts/posts.component';
import { EducationComponent } from './journal-sections/education/education.component';
import { UsersComponent } from './journal-sections/users/users.component';
import { CategoriesComponent } from './journal-sections/categories/categories.component';
import { CategoriesDetailComponent } from './journal-sections/categories-detail/categories-detail.component';
import { ErrorLogComponent } from './journal-sections/error-log/error-log.component';
import { SystemJournalComponent } from './journal-sections/system-journal/system-journal.component';
import { ExperimentsJournalComponent } from './journal-sections/experiments-journal/experiments-journal.component';
import { ClientSearchComponent } from './client-front/client-search/client-search.component';
import { ClientResultsComponent } from './client-front/client-results/client-results.component';
import { CartComponent } from './client-front/cart/cart.component';
import { CheckoutComponent } from './client-front/checkout/checkout.component';
import { ProjectsComponent } from './journal-sections/projects/projects.component';
import { LanguageComponent } from './administration/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    AdminIndexComponent,
    AdminDashboardComponent,
    LoginComponent,
    PasswordRecoverComponent,
    BranchesComponent,
    RolesComponent,
    PostsComponent,
    EducationComponent,
    UsersComponent,
    CategoriesComponent,
    CategoriesDetailComponent,
    ErrorLogComponent,
    SystemJournalComponent,
    ExperimentsJournalComponent,
    ClientSearchComponent,
    ClientResultsComponent,
    CartComponent,
    CheckoutComponent,
    ProjectsComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
