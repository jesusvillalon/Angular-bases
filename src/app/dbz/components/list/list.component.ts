import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10,
  }]

  // onDelete = index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?: string) {
    if (!id) return;
   this.onDelete.emit(id)

  }
}
