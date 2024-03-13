import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { createLogger } from 'redux-logger';
import { models, RootModel } from './index'

export const store = init({
    models,
    redux: {
        middlewares: [createLogger()]
    }
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>