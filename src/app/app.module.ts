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
import { BranchesTableComponent } from './journal-sections/branches/branches-table/branches-table.component';
import { BranchesControlComponent } from './journal-sections/branches/branches-control/branches-control.component';
import { BranchesService } from './journal-sections/branches/shared/branches.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesControlComponent } from './journal-sections/categories/categories-control/categories-control.component';
import { CategoriesTableComponent } from './journal-sections/categories/categories-table/categories-table.component';
import { CategoriesDetailControlComponent } from './journal-sections/categories-detail/categories-detail-control/categories-detail-control.component';
import { CategoriesDetailTableComponent } from './journal-sections/categories-detail/categories-detail-table/categories-detail-table.component';
import { EducationControlComponent } from './journal-sections/education/education-control/education-control.component';
import { EducationTableComponent } from './journal-sections/education/education-table/education-table.component';
import { ErrorLogControlComponent } from './journal-sections/error-log/error-log-control/error-log-control.component';
import { ErrorLogTableComponent } from './journal-sections/error-log/error-log-table/error-log-table.component';
import { ExperimentsJournalControlComponent } from './journal-sections/experiments-journal/experiments-journal-control/experiments-journal-control.component';
import { ExperimentsJournalTableComponent } from './journal-sections/experiments-journal/experiments-journal-table/experiments-journal-table.component';
import { PostsControlComponent } from './journal-sections/posts/posts-control/posts-control.component';
import { PostsTableComponent } from './journal-sections/posts/posts-table/posts-table.component';
import { ProjectsControlComponent } from './journal-sections/projects/projects-control/projects-control.component';
import { ProjectsTableComponent } from './journal-sections/projects/projects-table/projects-table.component';
import { RolesControlComponent } from './journal-sections/roles/roles-control/roles-control.component';
import { RolesTableComponent } from './journal-sections/roles/roles-table/roles-table.component';
import { SystemJournalControlComponent } from './journal-sections/system-journal/system-journal-control/system-journal-control.component';
import { SystemJournalTableComponent } from './journal-sections/system-journal/system-journal-table/system-journal-table.component';
import { UsersControlComponent } from './journal-sections/users/users-control/users-control.component';
import { UsersTableComponent } from './journal-sections/users/users-table/users-table.component';

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
    LanguageComponent,
    BranchesTableComponent,
    BranchesControlComponent,
    CategoriesControlComponent,
    CategoriesTableComponent,
    CategoriesDetailControlComponent,
    CategoriesDetailTableComponent,
    EducationControlComponent,
    EducationTableComponent,
    ErrorLogControlComponent,
    ErrorLogTableComponent,
    ExperimentsJournalControlComponent,
    ExperimentsJournalTableComponent,
    PostsControlComponent,
    PostsTableComponent,
    ProjectsControlComponent,
    ProjectsTableComponent,
    RolesControlComponent,
    RolesTableComponent,
    SystemJournalControlComponent,
    SystemJournalTableComponent,
    UsersControlComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [BranchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
