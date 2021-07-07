import {put,call,takeLatest,takeEvery} from 'redux-saga/effects'
import { AxiosResponse } from 'axios';
import { SET_CAT,SET_LOADING,SET_LOADED,SUBSCRIBE_CAT } from '../app/catSlice'

import {getCat} from '../api/api'
  
function* getCatSaga(){
      yield put(SET_LOADING());
        const cat:AxiosResponse= yield call(getCat)
      yield put(SET_CAT(cat))
      yield put(SET_LOADED())
  }

  export default function* catSaga(){
            yield takeEvery(SUBSCRIBE_CAT,getCatSaga)
  }