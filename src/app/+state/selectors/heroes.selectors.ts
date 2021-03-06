import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from '../reducers/heroes.reducer';
import { HeroesState } from '../reducers';

export const getNamesState = createFeatureSelector<HeroesState>(fromHeroes.HEROES_FEATURE_NAME);
export const selectHeroesState = createSelector(getNamesState, state => state.FEATURE);

export const isHeroesLoading = createSelector(selectHeroesState, fromHeroes.isLoading);
export const isHeroesLoaded = createSelector(selectHeroesState, fromHeroes.isLoaded);
export const selectHeroes = createSelector(selectHeroesState, fromHeroes.getHeroes);
