import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';
import * as CartActions from './cart.actions';

@Injectable({ providedIn: 'root' })
export class CartSandbox {
  constructor(private store: Store) {}

  addItem(item: CartItem) {
    this.store.dispatch(CartActions.addItem({ item }));
  }

  removeItem(id: string) {
    this.store.dispatch(CartActions.removeItem({ id }));
  }

  updateItem(item: CartItem) {
    this.store.dispatch(CartActions.updateItem({ item }));
  }

  loadCart(items: CartItem[]) {
    this.store.dispatch(CartActions.loadCart({ items }));
  }
}
