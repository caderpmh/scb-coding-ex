import { ActionReducer } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export function persistCart(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    localStorage.setItem('cart', JSON.stringify(nextState.cart));
    return nextState;
  };
}

export function getInitialCartState(): CartItem[] {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}
