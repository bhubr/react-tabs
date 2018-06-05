import React, { Component } from 'react';

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }
  setIndex (index) {
    this.setState({
      tabIndex: index
    })
  }
  render() {
    const liStyle = { display: 'inline', listStyleType: 'none', padding: '10px' }
    const { tabs } = this.props
    const { tabIndex } = this.state
    const { Component } = tabs[tabIndex]
    return (
      <div>
        <nav>
          <ul>
            { tabs.map((tab, k) => <li onClick={ () => this.setIndex(k) } style={liStyle} key={k}>{tab.label}</li>) }
          </ul>
        </nav>

        <Component />
 
      </div>
    );
  }
}

export default Tabs;
