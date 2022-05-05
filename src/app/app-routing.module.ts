import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './components/book-now/book-now.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiningOutComponent } from './components/dining-out/dining-out.component';
import { ListingComponent } from './components/listing/listing.component';
import { LoginComponent } from './components/login/login.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent },
  {path:'sign-up', component:SignUpComponent },
  {path:'listing', component:ListingComponent},
  {path:'dining-out', component:DiningOutComponent},
  {path: 'order-now', component: OrderNowComponent},
  {path: 'confirm-order', component:ConfirmOrderComponent},
  {path : 'book-now', component: BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
