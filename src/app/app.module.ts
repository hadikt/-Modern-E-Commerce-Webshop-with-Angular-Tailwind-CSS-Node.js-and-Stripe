import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list'

import { MatMenuModule} from '@angular/material/menu'

import { MatButtonModule} from '@angular/material/button'

import { MatCardModule} from '@angular/material/card'
import { MatIconModule} from '@angular/material/icon'
import { MatExpansionModule} from '@angular/material/expansion'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatBadgeModule} from '@angular/material/badge'
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatListModule} from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { FiltersComponent } from './components/pages/filters/filters.component';
import { ProductBoxComponent } from './components/pages/product-box/product-box.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ApiStoreService } from './services/api-store.service';
import { StaetService } from './services/staet.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [ApiStoreService,StaetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
