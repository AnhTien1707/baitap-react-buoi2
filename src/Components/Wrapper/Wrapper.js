import React, { Component } from 'react';
import './wrapper.css';
import Header from '../Header/Header';
import Body from '../Body/Body'
export default class wrapper extends Component {
  render() {
    return (
      <div className='wrapper' style={{
        background : "url(./img/bgGlass.jpg)",
        paddingBottom : "70px"
      }}>
       <Header/>
       <Body/>
      </div>
    )
  }
}
