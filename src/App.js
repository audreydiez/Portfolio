import logo from './logo.svg'
import './App.css'

import variables from 'assets/styles/variables.module.scss'

function App() {
    console.log(variables)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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
