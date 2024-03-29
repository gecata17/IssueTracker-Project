import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropListComponent } from './components/drop-list/drop-list/drop-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { AllIssuesComponent } from './components/all-issues/all-issues/all-issues.component';
import { ProjectsIssuesComponent } from './components/projects-issues/projects-issues/projects-issues.component';
import { AssigneeIssuesComponent } from './components/assignee-issues/assignee-issues.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IssueTicketComponent } from './components/issue-ticket/issue-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { EditWindowComponent } from './components/edit-window/edit-window/edit-window.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProviders } from './utils/auth.interceptor';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewTicketComponent } from './components/add-new-ticket/add-new-ticket.component';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DropListComponent,
    NavBarComponent,
    AllIssuesComponent,
    ProjectsIssuesComponent,
    AssigneeIssuesComponent,
    IssueTicketComponent,
    //EditWindowComponent,
    SignupComponent,
    LoginComponent,
    SignupComponent,
    AddNewTicketComponent,
    AddNewProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    PortalModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    EditWindowComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
