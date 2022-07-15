import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { WorkComponent } from './modules/work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FooterComponent } from './modules/footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './modules/blog/blog.component';
import { SharedService } from './modules/shared.service';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplePdfViewerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
