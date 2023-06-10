import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ContactsListComponent {
  @Input({required: true}) contacts: any;


}
