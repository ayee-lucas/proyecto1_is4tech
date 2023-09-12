// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Project
import { WhiteSpaceDirective } from './directives/white-space.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [WhiteSpaceDirective, HighlightDirective],
  imports: [CommonModule],
  exports: [WhiteSpaceDirective, FormsModule, HighlightDirective]
})
export class SharedModule {}
