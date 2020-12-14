import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrumCardEditorComponent } from './scrum-board/card-editor.component';
@NgModule({
  declarations: [AppComponent, ScrumBoardComponent, ScrumCardEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    DragulaModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
