import { Component, computed, input, Input, Output ,EventEmitter, output} from '@angular/core';
import { User } from '../core/models/User';
import { CardComponent } from "../shared/component/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //using decorators to define the properties of the class
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;
  // @Output() select = new EventEmitter();

  //using signals to define the properties of the class
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  //using single object to define the properties of the class
  user = input.required<User>();
  isSelected = input.required<boolean>();
  select = output<string>();
  imagePath = computed(() => `./assets/users/${this.user().avatar}`);
  onSelectUser(){
    this.select.emit(this.user().id);
  }
}
