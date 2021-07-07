import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import catReducer from "./catSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer:{
    counter:counterReducer,
    cat:catReducer
  },
  middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch