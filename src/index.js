import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'; // Upewnij się, że importujesz BrowserRouter

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {' '}
      {/* Dodaj BrowserRouter jako główny punkt wejścia */}
      <App />
    </BrowserRouter>
  </Provider>
);

// import React from 'react';
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import store from './redux/store';
// import App from './components/App';

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <Router>
//       {' '}
//       {/* Owiń komponent App w Router */}
//       <App />
//     </Router>
//   </Provider>
// );

//kod z 7 zadania
// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
