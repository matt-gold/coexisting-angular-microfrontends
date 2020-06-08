import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Lazy1Component } from './lazy1.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '',
    component: Lazy1Component
  }])],
  declarations: [Lazy1Component]
})
export class LazyModule {}
