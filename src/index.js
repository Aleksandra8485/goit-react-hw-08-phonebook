import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
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
