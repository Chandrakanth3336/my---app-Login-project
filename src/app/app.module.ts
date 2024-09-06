import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {HttpClientModule} from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartplusComponent } from './flipkartplus/flipkartplus.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CreateIDComponent } from './create-id/create-id.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { ReloadComponent } from './reload/reload.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { Amazon3Component } from './amazon3/amazon3.component';
import { Amazon4Component } from './amazon4/amazon4.component';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CapitalDirective } from './capital.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehiclesComponent,
    BankaccountsComponent,
    FlipkartplusComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateBankaccountsComponent,
    IdentityCardComponent,
    CreateIDComponent,
    PhotogalleryComponent,
    ReloadComponent,
    NewVehicleComponent,
    ViewVehicleComponent,
    CreateUserComponent,
    StudentDetailsComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    TextAreaComponent,
    SiblingComponent,
    Sibling1Component,
    Sibling2Component,
    AmazonComponent,
    Amazon1Component,
    Amazon2Component,
    Amazon3Component,
    Amazon4Component,
    TodoComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component,
    CapitalDirective,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
