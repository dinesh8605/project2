
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { NoteProvider } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  
 <NoteProvider>
    <App />
 </NoteProvider>,
  
);
