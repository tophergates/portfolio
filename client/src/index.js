// Global packages/modules
import React from 'react';
import { render } from 'react-dom';

// Local modules
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Render the application
render(<App />, document.getElementById('root'));

// Register the Service Worker
registerServiceWorker();
