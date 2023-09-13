// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Project
import { WhiteSpaceDirective } from './directives/white-space.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  declarations: [WhiteSpaceDirective, HighlightDirective, TrimPipe],
  imports: [CommonModule],
  exports: [WhiteSpaceDirective, FormsModule, HighlightDirective, TrimPipe]
})
export class SharedModule {}
