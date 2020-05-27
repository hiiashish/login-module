import { createStore, applyMiddleware ,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
  }
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
let store = createStore(persistedReducer, enhancer);

let persistor = persistStore(store)

  return {
    ...store, persistor,
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore;