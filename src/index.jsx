import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import * as rootReducers from './Core/RootReducers.js';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import rootSaga from './Core/RootSaga.js';
import { SnackbarProvider } from 'notistack';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { ...rootReducers },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

function* allSagas() {
  yield all(rootSaga);
}

sagaMiddleware.run(allSagas);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store} >
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
);
