import React, { Component } from 'react';
import Tabs from './Tabs'

const TagButtons = () => <h1>TagButtons</h1>
const SeeAgainButtons = () => <h1>SeeAgainButtons</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Tabs tabs={
            [
              {
                label: 'Tag',
                Component: TagButtons
              },
              {
                label: 'Revoir',
                Component: SeeAgainButtons
              }
            ]
          } />
      </div>
    );
  }
}

export default App;
