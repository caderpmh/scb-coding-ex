import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from '../models/cart-item.model';

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
    const existing = state.find((i) => i.id === item.id);
    return existing
      ? state.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      : [...state, item];
  }),
  on(CartActions.updateItem, (state, { item }) =>
    state.map((i) => (i.id === item.id ? { ...i, ...item } : i))
  ),
  on(CartActions.removeItem, (state, { id }) =>
    state.filter((i) => i.id !== id)
  ),
  on(CartActions.loadCart, (_, { items }) => [...items])
);
