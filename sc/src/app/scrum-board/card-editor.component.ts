import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScrumCard } from '../model';
interface DialogData {
  card: ScrumCard;
}
@Component({
  selector: 'scrum-card-editor',
  templateUrl: 'card-editor.component.html',
  styleUrls: ['card-editor.component.scss'],
})
export class ScrumCardEditorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ScrumCardEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}
}
