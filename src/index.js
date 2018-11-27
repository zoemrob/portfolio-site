import { render } from 'inferno';
import {initDevTools} from 'inferno-devtools';
import { BrowserRouter } from 'inferno-router'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') initDevTools();
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
