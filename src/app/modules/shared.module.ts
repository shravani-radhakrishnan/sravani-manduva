import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';
import { FooterComponent } from './footer/footer.component';
const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'work',
    component:WorkComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }
]


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SimplePdfViewerModule,
    RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
