import React from 'react';

class Nav extends React.Component{
 
  render(){
    return (
      <div id="nav">
        Filter: <input onChange={this.props.handleFilter} type="text" value={this.props.userInput} name='filter'/>
      </div>
  )}
}

export default Nav;
