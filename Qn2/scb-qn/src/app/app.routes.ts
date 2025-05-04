import { Routes } from '@angular/router';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartReducer } from './shopping-cart/store/cart.reducer';
import {
  persistCart,
  getInitialCartState,
} from './shopping-cart/store/cart.meta-reducer';

export const appRoutes: Routes = [
  {
    path: 'cart',
    loadComponent: () =>
      import('./shopping-cart/cart-page.component').then(
        (m) => m.CartPageComponent
      ),
  },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
];

export const appProviders = [
  provideStore(
    { cart: cartReducer },
    {
      metaReducers: [persistCart],
      initialState: { cart: getInitialCartState() },
    }
  ),
  provideEffects([]),
];
