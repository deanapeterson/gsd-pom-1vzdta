import { Component, Output, Input, OnInit} from '@angular/core';


const template = `
<textarea [(ngModel)]="note" (change)="updateStore()"></textarea>
`;
const styles = [`
  textarea {
    width:95%;
    min-height:100px;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 150%;
  }
`];
@Component({
  selector: 'app-notes',
  template,
  styles
})
export class NotesComponent implements OnInit {
  @Input() note = '';
  @Input() uid: string; 
  
  private store: Storage;
  private storageToken;

  constructor() {
    this.store = window.localStorage;

  }
  ngOnInit() {
    if(!this.uid) {
      throw new Error('NotesComponent-> [uid] required');
    }

    this.storageToken = `gsd-pom_${this.uid}`;

    this.note = this.store.getItem(this.storageToken);
  }
  public updateStore() {
    this.store.setItem(this.storageToken, this.note);
  }
}