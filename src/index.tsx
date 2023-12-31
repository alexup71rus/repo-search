import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <BrowserRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  );

