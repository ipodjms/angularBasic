import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyParentComponent, LazyChildComponent]
})
export class LazyModule { }
