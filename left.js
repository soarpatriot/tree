import React from 'react';
import TitleBar from './TitleBar';
import Dept from './Dept';
class Left extends React.Component {
  render() {
    return (
      <div style={left}>
        <TitleBar />
        <Dept />
      </div>
    )
  }
}
const left = {
  padding: '50px 40px', 
  width: '320px',
  height: '100%',
  backgroundColor: '#607d8b',
  color: '#fff',
}

export default Left

