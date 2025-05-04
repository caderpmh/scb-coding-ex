import { createAction, props } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);
export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ id: string }>()
);
export const updateItem = createAction(
  '[Cart] Update Item',
  props<{ item: CartItem }>()
);
export const loadCart = createAction(
  '[Cart] Load From Storage',
  props<{ items: CartItem[] }>()
);
