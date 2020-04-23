import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserCreatePageRoutingModule } from './user-create-routing.module';
import { UserCreatePage } from './user-create.page';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule, UserCreatePageRoutingModule],
  declarations: [UserCreatePage]
})
export class UserCreatePageModule {}
