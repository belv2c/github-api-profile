import React, { Component } from 'react';
import './App.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
        <Content>
          <Button>Button</Button>
        </Content>
    </>
  );
}

export default App;
