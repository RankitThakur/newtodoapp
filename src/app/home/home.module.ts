import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { UpdateTaskPage } from '../update-task/update-task.page';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, AddNewTaskPage, UpdateTaskPage],
  entryComponents: [AddNewTaskPage, UpdateTaskPage],

})
export class HomePageModule {}
