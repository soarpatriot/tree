import React from 'react';
class Item extends React.Component {
  render() {
    let {name, count} = this.props;
    return( 
      <div style={row}>  
        <div style={nameStyle}>
          <input type="checkbox" style={checkStyle}/>
        
          {name}
        </div> 
        <div style={countStyle}>
          {count}
        </div> 
      </div> 
    )
  }
}
const row = {
  padding: '5px 0',
  display: 'block',
  clear: 'both'
}
const checkStyle = {
  marginRight: '10px'
}
const nameStyle = {
  
  color: '#e3e3e3',
  float: 'left',
  width: '50%',
}
const countStyle = {
  cursor: 'pointer',
  fontSize: '14px',
  float: 'right',
  textAlign: 'right',
  width: '50%',
}

export default Item

