import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materials/materials.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListingComponent } from './components/listing/listing.component';
import { DiningOutComponent } from './components/dining-out/dining-out.component';
import { ProPageComponent } from './components/pro-page/pro-page.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MainContainerComponent,
    LoginComponent,
    SignUpComponent,
    ListingComponent,
    DiningOutComponent,
    ProPageComponent,
    OrderNowComponent,
    ConfirmOrderComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
