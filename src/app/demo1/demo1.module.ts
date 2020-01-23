import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[{
  path:"home",component:HomeComponent
}]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Demo1Module {
  constructor(){
    console.log("hello")
  }
 }
