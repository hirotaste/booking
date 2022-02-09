import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDateRangeModule } from 'ngx-daterange';
import { InputSelectModule } from 'src/app/forms/input-select/input-select.module';
import { InputModule } from 'src/app/forms/input/input.module';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsListComponent
  },
  {
    path: 'rooms/:id',
    component: RoomViewComponent
  }
];

@NgModule({
  declarations: [
    RoomsListComponent,
    RoomViewComponent
  ],
  imports: [
    InputModule,
    FormsModule,
    CommonModule,
    InputSelectModule,
    NgxDateRangeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomsModule { }
