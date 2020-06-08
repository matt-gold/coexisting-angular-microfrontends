import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Lazy2Component } from './lazy2.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '',
    component: Lazy2Component
  }])],
  declarations: [Lazy2Component]
})
export class LazyModule {}
