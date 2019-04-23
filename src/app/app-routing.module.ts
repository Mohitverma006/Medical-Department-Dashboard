import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
    {
    path:'',
    component:LoginComponent
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
    path:'forgetPassword',
    component:ForgetPasswordComponent
    },
    {
    path:'createAccount',
    component:CreateAccountComponent
    },
    
    {
    path:'home',
    component:HomeComponent,
      children:[
        {
        path:'',
        component:ProfileDetailComponent
        },
        {
          path:'profileDetail',
          component:ProfileDetailComponent
          },
        {
          path:'allApplicant',
          component:AllApplicantsComponent,
            children:[
              {
                path:'',
                component:ApplicantDetailComponent
              },
              {
                path:'applicantDetail',
                component:ApplicantDetailComponent
              },
              {
                path:'applicantView',
                component:ApplicantViewComponent,
                 children:[
                    {
                      path:'',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'personalDetail',
                      component:PersonalDetailComponent
                    },
                    {
                      path:'premedDetail',
                      component:PremedDetailComponent
                    },
                    {
                      path:'passportDetail',
                      component:PassportDetailComponent
                    },
                    {
                      path:'finalmedDetail',
                      component:FinalmedDetailComponent
                    },

                 ]
              },
            ]
        },


        {
          path:'scheduled',
          component:SheduledComponent,
            children:[
              {
                path:'',
                component:SheduledApplicantComponent
              },
              {
                path:'sheduledApplicant',
                component:SheduledApplicantComponent
              },
              {
                path:'updateStatus',
                component:UpdateStatusComponent
              },

            ]

        },
        {
          path:'pendingforSchedule',
          component:PendingforScheduleComponent,
            children:[
              {
                path:'',
                component:ScheduleApplicantComponent
              },
              {
                path:'sheduleApplicant',
                component:ScheduleApplicantComponent
              },
              {
                path:'schedule',
                component:ScheduleComponent
              },
            ]
        },
        {
          path:'finalApplicant',
          component:FinalApplicantComponent,
           children:[
            {
              path:'',
              component:FinalapplicantDetailComponent
            },
            {
              path:'finalapplicantDetail',
              component:FinalapplicantDetailComponent
            },
            {
              path:'applicantView',
              component:ApplicantViewComponent,
               children:[
                  {
                    path:'',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'personalDetail',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'premedDetail',
                    component:PremedDetailComponent
                  },
                  {
                    path:'passportDetail',
                    component:PassportDetailComponent
                  },
                  {
                    path:'finalmedDetail',
                    component:FinalmedDetailComponent
                  },

               ]
            },
          ]



        },
        {
          path:'failedApplicant',
          component:FailedApplicantComponent,
          children:[
            {
              path:'',
              component:FailedapplicantDetailComponent
            },
            {
              path:'failedapplicantDetail',
              component:FailedapplicantDetailComponent
            },
            {
              path:'applicantView',
              component:ApplicantViewComponent,
               children:[
                  {
                    path:'',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'personalDetail',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'premedDetail',
                    component:PremedDetailComponent
                  },
                  {
                    path:'passportDetail',
                    component:PassportDetailComponent
                  },
                  {
                    path:'finalmedDetail',
                    component:FinalmedDetailComponent
                  },

               ]
            },
          ]

          
        }
        
        
      ]
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
