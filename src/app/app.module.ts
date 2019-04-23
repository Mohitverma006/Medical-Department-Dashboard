import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { SheduledComponent } from './sheduled/sheduled.component';
import { PendingforScheduleComponent } from './pendingfor-schedule/pendingfor-schedule.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { FailedApplicantComponent } from './failed-applicant/failed-applicant.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { PremedDetailComponent } from './premed-detail/premed-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { FinalmedDetailComponent } from './finalmed-detail/finalmed-detail.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { SheduledApplicantComponent } from './sheduled-applicant/sheduled-applicant.component';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ScheduleApplicantComponent } from './schedule-applicant/schedule-applicant.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FinalapplicantDetailComponent } from './finalapplicant-detail/finalapplicant-detail.component';
import { FailedapplicantDetailComponent } from './failedapplicant-detail/failedapplicant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgetPasswordComponent,
    CreateAccountComponent,
    ProfileDetailComponent,
    AllApplicantsComponent,
    SheduledComponent,
    PendingforScheduleComponent,
    FinalApplicantComponent,
    FailedApplicantComponent,
    ApplicantDetailComponent,
    PremedDetailComponent,
    PassportDetailComponent,
    FinalmedDetailComponent,
    UpdateStatusComponent,
    SheduledApplicantComponent,
    ApplicantViewComponent,
    PersonalDetailComponent,
    ScheduleApplicantComponent,
    ScheduleComponent,
    FinalapplicantDetailComponent,
    FailedapplicantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
