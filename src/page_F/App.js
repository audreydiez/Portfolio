import logo from '../logo.svg'
import aa from '../assets/img/test 1.svg'
import bb from '../assets/img/test 2.svg'
import './App.css'

import variables from 'assets/styles/variables.module.scss'

import TestUser from '../Components_F/TestCC'
import TestFrancois from '../Components_F/TestFrancois'

function App() {
    console.log(variables)
    return (
        <div className="App">
            <header className="App-header">
                <img src={aa} className="test" alt="logo" />
                <img src={bb} className="test" alt="logo" />

                <TestUser />
                <TestFrancois />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <span style={{ color: variables.test }}> Front End Developer</span>
            </header>
        </div>
    )
}

export default App
