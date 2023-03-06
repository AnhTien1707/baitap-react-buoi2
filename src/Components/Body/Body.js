import React, { Component } from 'react'
import './body.css'
export default class Body extends Component {

  state = {
    glassImg: './img/v1.png',
    glassName: "GUCCI G8850U",
    glassDes: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };

  glassChange = (glass) => {
    let newGlass;
    let newGlassName;
    let newGlassDes;
    switch (glass) {
      case "v1":
        newGlass = './img/v1.png';;
        newGlassName = "GUCCI G8850U";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v2":
        newGlass = './img/v2.png';;
        newGlassName = "GUCCI G8759H";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v3":
        newGlass = './img/v3.png';;
        newGlassName = "DIOR D6700HQ";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v4":
        newGlass = './img/v4.png';;
        newGlassName = "DIOR D6005U";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v5":
        newGlass = './img/v5.png';;
        newGlassName = "PRADA P8750";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v6":
        newGlass = './img/v6.png';;
        newGlassName = "PRADA P9700";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v7":
        newGlass = './img/v7.png';;
        newGlassName = "FENDI F8750";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v8":
        newGlass = './img/v8.png';;
        newGlassName = "FENDI F8500";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      case "v9":
        newGlass = './img/v9.png';;
        newGlassName = "FENDI F4300";
        newGlassDes = "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.";
        break;
      default:
      break;
    }
  if(!glass) return;
  this.setState  ({
    glassImg: newGlass,
    glassName: newGlassName,
    glassDes :newGlassDes,
  })
  }
  render() {
    return (
      <div className='Body'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='model'>
                <img alt='' className='img-model' src='./img/model.jpg'></img>
                <div className='glass-model'>
                  <img src={this.state.glassImg} alt=''></img>
                  <div className='content'>
                    <p className='name text-primary'>{this.state.glassName}</p>
                    <p className='describes'>
                      {this.state.glassDes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <img className='img-model' alt='' src='./img/model.jpg'></img>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='select-glass'>
                  <img src='./img/g1.jpg' onClick={() =>{
                    this.glassChange("v1")
                  }} alt=''></img>
                  <img src='./img/g2.jpg' onClick={() =>{
                    this.glassChange("v2")
                  }} alt=''></img>
                  <img src='./img/g3.jpg' onClick={() =>{
                    this.glassChange("v3")
                  }} alt=''></img>
                  <img src='./img/g4.jpg' onClick={() =>{
                    this.glassChange("v4")
                  }} alt=''></img>
                  <img src='./img/g5.jpg' onClick={()=>{
                    this.glassChange("v5")
                  }} alt=''></img>
                  <img src='./img/g6.jpg' onClick={()=>{
                    this.glassChange("v6")
                  }} alt=''></img>
                  <img src='./img/g7.jpg' onClick={()=>{
                    this.glassChange("v7")
                  }} alt=''></img>
                  <img src='./img/g8.jpg' onClick={()=>{
                    this.glassChange("v8")
                  }} alt=''></img>
                  <img src='./img/g9.jpg' onClick={()=>{
                    this.glassChange("v9")
                  }} alt=''></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
