import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { App } from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const store = setupStore();

// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     console.log('LCP candidate:', entry.startTime, entry);
//   }
// }).observe({ type: 'largest-contentful-paint', buffered: true });

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
