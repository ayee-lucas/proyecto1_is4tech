// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Project
import { WhiteSpaceDirective } from './directives/white-space.directive';

@NgModule({
  declarations: [WhiteSpaceDirective],
  imports: [CommonModule],
  exports: [WhiteSpaceDirective, FormsModule]
})
export class SharedModule {}
