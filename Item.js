import React from 'react';
class Item extends React.Component {
  render() {
    let {name, count, children} = this.props;
    return( 
      <div>
        <div style={row}>  
          <div style={nameStyle}>
            <input type="checkbox" style={checkStyle}/>
            {name}
          </div> 
          <div style={countStyle}>
            {count}
          </div> 
        </div> 
        {children && children.map((dep,i) => 
                  <div style={secondLevel}>
                     <Item key={i} name={dep.name} count={dep.count} / > 
                  </div>
        )}


      </div> 
    )
  }
}
const row = {
  padding: '5px 0',
  postion: 'relative',
  display: 'block',
  clear: 'both',
}
const secondLevel = {
  marginLeft: '30px',
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

