import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appProviders, appRoutes } from './app.routes';
import { cartReducer } from './shopping-cart/store/cart.reducer';
import {
  getInitialCartState,
  persistCart,
} from './shopping-cart/store/cart.meta-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),

    provideStore(
      { cart: cartReducer },
      {
        metaReducers: [persistCart],
        initialState: {
          cart: getInitialCartState(),
        },
      }
    ),

    // NgRx Effects
    provideEffects([]),

    // Devtools
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
