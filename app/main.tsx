import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/home'

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
)