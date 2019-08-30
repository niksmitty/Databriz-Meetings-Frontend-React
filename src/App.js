import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./services/store";

// import ProjectsPage from "./components/projects/ProjectsPage";
import WorkItemsPage from "./components/workItems/WorkItemsPage";

const reduxStore = configureStore();

function App() {
  return (
      <ReduxProvider store={reduxStore}>
          <div className="App">
              {/*<ProjectsPage />*/}
              <WorkItemsPage />
          </div>
      </ReduxProvider>
  );
}

export default App;
