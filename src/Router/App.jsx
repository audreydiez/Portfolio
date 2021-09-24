import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.scss'

import Home from 'Containers/Home/Home'
import ErrorPage from 'Components/ErrorPage/ErrorPage'
import { SubRoutes } from './SubRoutes/SubRoutes'
import Header from '../Components/Header/Header'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '*',
        exact: false,
        component: ErrorPage
    }
]

function App() {
    return (
        <Router>
            <Header />
            <div className="router-container">
                <Switch>
                    {routes.map((route, i) => (
                        <SubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    )
}

export default App
