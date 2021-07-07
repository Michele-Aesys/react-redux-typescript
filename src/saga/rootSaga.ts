import { spawn } from "@redux-saga/core/effects";
import catSaga from "./catSaga";

export default function* rootSaga(){
    yield spawn(catSaga)
}