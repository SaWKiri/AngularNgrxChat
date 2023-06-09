import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chats, selectChatsAll } from 'src/app/core/state/app-chats';
import { AppState } from 'src/app/core/state/reducer';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsComponent {
  contactsList$: any;
  contacts: Chats[] | null = null;

  constructor(private store: Store<AppState>) {
    this.contactsList$ = this.store
      .select(selectChatsAll)
      .subscribe((state) => {
        debugger;
        this.contacts = state;
      });


  }

}
