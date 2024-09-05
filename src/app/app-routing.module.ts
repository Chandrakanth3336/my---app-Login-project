import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartplusComponent } from './flipkartplus/flipkartplus.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CreateIDComponent } from './create-id/create-id.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReloadComponent } from './reload/reload.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankaccountComponent } from './view-bankaccount/view-bankaccount.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentComponent } from './parent/parent.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SiblingComponent } from './sibling/sibling.component';
import { AmazonComponent } from './amazon/amazon.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent, children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BmiComponent},
  {path:'dice',component:DiceComponent},
  {path:'directives-pipes',component:DirectivesPipesComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'flipkart',component:FlipkartComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'bankaccounts',component:BankaccountsComponent},
  {path:'flipkartplus',component:FlipkartplusComponent},
  {path:'mail',component:MailComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'create-bankaccounts',component:CreateBankaccountsComponent},
  {path:'Identity-card',component:IdentityCardComponent},
  {path:'Create-ID',component:CreateIDComponent},
  {path:"photogallery",component:PhotogalleryComponent},
  {path:"reload",component:ReloadComponent},
  {path:"view-vehicle/:id",component:ViewVehicleComponent},
  {path:"edit-vehicle/:id",component:CreateVehicleComponent},
  {path:"view-bankaccount/:id",component:ViewBankaccountComponent},
  {path:"edit-bankaccount/:id",component:CreateBankaccountsComponent},
  {path:"create-user",component:CreateUserComponent},
  {path:"student-details",component:StudentDetailsComponent},
  {path:"parent",component:ParentComponent},
  {path:"text-area",component:TextAreaComponent},
  {path:"sibling",component:SiblingComponent},
  {path:"amazon",component:AmazonComponent},
  {path:"todo",component:TodoComponent},
  {path:'',component:WelcomeComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
