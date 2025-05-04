import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export const selectCart = createFeatureSelector<CartItem[]>('cart');

export const selectTotalCount = createSelector(selectCart, (items) =>
  items.reduce((count, i) => count + i.quantity, 0)
);

export const selectTotalPrice = createSelector(selectCart, (items) =>
  items.reduce((sum, i) => sum + i.quantity * i.price, 0)
);
