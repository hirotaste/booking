import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [CommonModule, BrowserModule, RouterModule],
})
export class LayoutsModule {}
