import { createStore } from "redux";

import rootreducer from './Reducers/index';

export default function configurestore(initialstate) {
    return  createStore(rootreducer, initialstate);
}