import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CartItem } from './models/cart-item.model';
import * as CartSelectors from './store/cart.selectors';
import { CartSandbox } from './store/cart.sandbox';

@Component({
  standalone: true,
  selector: 'app-cart-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {
  items$: Observable<CartItem[]>;
  totalCount$: Observable<number>;
  totalPrice$: Observable<number>;

  newItem: Partial<CartItem> = {
    name: '',
    price: 0,
    quantity: 1,
  };

  constructor(private sandbox: CartSandbox, private store: Store) {
    this.items$ = this.store.select(CartSelectors.selectCart);
    this.totalCount$ = this.store.select(CartSelectors.selectTotalCount);
    this.totalPrice$ = this.store.select(CartSelectors.selectTotalPrice);
  }

  addToCart() {
    const item: CartItem = {
      id: crypto.randomUUID(),
      name: this.newItem.name!,
      price: this.newItem.price!,
      quantity: this.newItem.quantity!,
    };
    this.sandbox.addItem(item);
    this.newItem = { name: '', price: 0, quantity: 1 };
  }

  remove(id: string) {
    this.sandbox.removeItem(id);
  }
}
