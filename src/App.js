import React from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>
      <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
    </>
  );
}

export default App;
