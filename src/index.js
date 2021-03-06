import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from "./reduxStore/index";
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import {ThemeContextProvider} from '../src/contexts/ThemeContext'

const queryClient=new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   
    <ReduxProvider store={store}>

      <PersistGate persistor={persistor}>

        
          <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <App />
            </ThemeContextProvider>
            <ReactQueryDevtools/>
          </QueryClientProvider>

       

      </PersistGate>

    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
