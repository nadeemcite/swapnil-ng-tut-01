export class ScrumBoard {
  title: string;
  created_on: Date;
  updated_on: Date;
  list: ScrumList[];
}
export class ScrumList {
  title: string;
  constructor(title: string) {
    this.title = title;
    this.cards = [];
    this.editMode = false;
    this.addMode = false;
  }
  cards: ScrumCard[];
  editMode: boolean;
  addMode: boolean;
}
export class ScrumCard {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}
