import React from 'react'
import ReactDOM from 'react-dom'

//#region Routing -----------
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'
//#endregion

//#region REDUX --------------
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer as reducer } from './reducers/rootReducer'
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk))
//#endregion


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


