import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports:[TopoComponent],
  declarations: [TopoComponent]
})
export class PrincipalModule { }
