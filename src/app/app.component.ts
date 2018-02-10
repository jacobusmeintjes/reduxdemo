import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
/*
Import the root state in order to select parts of it.
*/
import * as fromRoot from './common/index';
/*
Import the layout actions to make dispatching from the component possible
*/
import * as layout from './common/layout/layout.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openenedModalName$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.openenedModalName$ = store.select(fromRoot.getLayoutOpenedModalName);
  }

  handleOpenModal(modalName: string) {
    this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal() {
    this.store.dispatch(new layout.CloseModalAction(''));
  }
}
