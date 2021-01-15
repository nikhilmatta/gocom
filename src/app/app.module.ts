import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule,  MatSidenavModule, MatListModule, MatButtonModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import { MenComponent } from './men/men.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/_directives/modal.component';
import { ModalService } from 'src/app/_services/modal.services';
import { WomenComponent } from './women/women.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenComponent,
    BlogComponent,
    AboutComponent,
    ModalComponent,
    WomenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,


  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
