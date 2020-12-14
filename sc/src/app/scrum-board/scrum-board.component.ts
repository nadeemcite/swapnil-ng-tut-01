import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { ScrumBoard, ScrumList, ScrumCard } from '../model';
import { ScrumCardEditorComponent } from './card-editor.component';

@Component({
  selector: 'scrum-board',
  templateUrl: 'scrum-board.component.html',
  styleUrls: ['scrum-board.component.scss'],
})
export class ScrumBoardComponent implements OnInit {
  subs = new Subscription();
  constructor(
    private dialog: MatDialog,
    private dragulaService: DragulaService
  ) {
    this.dragulaService.createGroup('COLUMNS', {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === 'task-list-title',
    });
  }
  board: ScrumBoard;
  ngOnInit() {
    this.board = new ScrumBoard();
    this.board.title = 'My Scrum Board';
    this.board.list = [new ScrumList('Group A'), new ScrumList('Group B')];

    this.subs.add(
      this.dragulaService
        .dropModel('COLUMNS')
        .subscribe(({ sourceModel, targetModel, item }) => {
          this.logChanges();
        })
    );
    this.subs.add(
      this.dragulaService
        .dropModel('ITEMS')
        .subscribe(({ sourceModel, targetModel, item }) => {
          this.logChanges();
        })
    );
    this.myFunc = () => {};
    document.addEventListener('click', this.myFunc, true);
  }
  private myFunc: (event: Event) => void;

  addCard(list: ScrumList) {
    list.addMode = true;
  }
  addCardAct(title: string, list: ScrumList) {
    if (title) {
      list.cards.push(new ScrumCard(title));
      this.logChanges();
    }
    list.addMode = false;
  }
  addList() {
    this.board.list.push(new ScrumList('New List' + this.board.list.length));
    this.logChanges();
  }
  logChanges() {
    console.log(this.board);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    document.removeEventListener('click', this.myFunc, true);
  }
  editListTitle(list: ScrumList, action = true) {
    list.editMode = action;
    if (!action) {
      this.logChanges();
    }
  }
  editCard(card: ScrumCard) {
    this.dialog.open(ScrumCardEditorComponent, {
      data: {
        card: card,
      },
    });
  }
}
