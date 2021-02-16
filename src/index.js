import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import FirebaseContext from "./components/Context";
import Firebase from "./components/Firebase";

ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={ new Firebase() }>
          <App />
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
