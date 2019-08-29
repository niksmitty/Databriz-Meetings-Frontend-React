import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const apiBaseUrl = "http://localhost:8080/api";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    onClick={getWorkItems}
                    src={logo} className="App-logo" alt="logo"/>
                <p onClick={getWorkItems}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function getWorkItems() {
    let userEmail = "egin@databriz.ru";
    let projectId = "11834e88-af42-4f6d-9d12-33acaa466655";
    let teamId = "17655e69-cfda-491c-9568-5c8a6a647078";
    let iterationPath = "Sibur\\Final";

    axios.get(`${apiBaseUrl}/v1/azure/members/${userEmail}/workItems/list`, {
        params: {
            projectId: projectId,
            teamId: teamId,
            iteration: iterationPath
        }
    }).then(response => {
        console.log(JSON.stringify(response.data));
    }).catch(err => {
        console.log(err)
    });
}

export default App;
