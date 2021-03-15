import React, { useEffect, useState } from 'react';
import Plants from "../../../components/plants";
import ScrollTopArrow from '../../../components/scroll';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as plantsAction from "../../../actions/plantsAction";
import "./index.scss";
import { FaArrowCircleUp } from 'react-icons/fa';

function Home(props) {
  const sunOptions = [
    "No",
    "Low",
    "High"
  ];
  const waterOptions = [
    "Regularly",
    "Daily",
    "Rarely",
  ];

  const [sun, setSun] = useState(null);
  const [water, setWater] = useState(null);
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const sunLocal = window.sessionStorage.getItem('sun', sun);
    const waterLocal = window.sessionStorage.getItem('water', water);
    const petLocal = window.sessionStorage.getItem('pet', pet);
  })
  useEffect(() => {
  //if(sun !== null && water !== null && pet !== null) {
    window.sessionStorage.setItem('sun', sun);
    window.sessionStorage.setItem('water', water);
    window.sessionStorage.setItem('pet', pet);
  //}
 },[sun, water, pet]);
  
  function handleSelectSun ({ target }) {
    setSun(target.value)
  }

  function handleSelectWater ({ target }) {
    setWater(target.value)
  }

  function handleSelectPet ({ target }) {
    setPet(target.value)
  }

  return(
    <div className="wrapper"> 
     <ScrollTopArrow/>
      <header>
        <div>
          <h2 style={{
            color: 'white', 
            fontFamily: 'Montserrat',
            zIndex: 1,
            marginLeft: '20%',
            paddingTop: '4%',
            paddingBottom: '15px'
            }}>Green Thumb</h2>
          <h1 style={{
            color: 'white', 
            fontFamily: 'Montserrat',
            zIndex: 1,
            marginLeft: '20%',
            }}>Find your <br/>
            next green  <br/>
            friend
          </h1>
          <img 
            src={require("../../../assets/images/icons/arrow-down.svg")}
            alt="Person Image"
            className="arrow"
            style={{marginLeft: '20%'}}
          />
          <img 
            src={require("../../../assets/images/hero/mobile/mobile-plantperson.png")}
            alt="Person Image"
            className="face"
            className="person-mobile"
          />
          </div>
        <div>
          <img 
            src={require("../../../assets/images/hero/desktop/plantperson.png")}
            alt="Person Image"
            className="face"
            className="person"
          />
        </div>
        <div>
          <img 
            src={require("../../../assets/images/hero/desktop/right-leaves.png")}
            alt="Left leaves Image"
            className='left'
            style={{ width: '21vw',
            height: '45vh',
            position: 'absolute',
            bottom: '55%',
            right: '0'
          }}
          />
        </div>
       </header>
        <main> 
          <div>
            <img 
              src={require("../../../assets/images/illustrations/sun.png")}
              alt="Sun Image"
              className="face"
              style={{width: "120px", padding: '10px'}}
            />
            <h3>
              <strong>1.</strong> Set the amount of <b>sunlight</b> <br/>
              Your plant will get.
            </h3>
            <div className="dropdown-container">
              <select required onChange={handleSelectSun}>
                <option>
                  Select..
                </option>
                {sunOptions.map((sun, index) => {
                  return (
                    <option value={sun.toLowerCase()} key={index}>
                      {sun}
                    </option>
                  )
                })}
              </select>
              <div class="select-icon">
                <svg focusable="false" viewBox="0 0 104 128" width="20" height="35" class="icon">
                  <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={require("../../../assets/images/illustrations/wateringcan.png")}
              alt="Water Image"
              className="face"
              style={{width: "157px", padding: '10px'}}
            />
            <h3>
              <b>2.</b> How often do you want to <b>water</b><br/>
              your plant?
            </h3>
            <div className="dropdown-container">
              <select required onChange={handleSelectWater}>
                <option>
                    Select..
                </option>
                {waterOptions.map((water, index) => {
                  return (
                    <option value={water.toLowerCase()} key={index}>
                      {water}
                    </option>
                  )
                })}
              </select>
              <div className="select-icon">
                <svg focusable="false" viewBox="0 0 104 128" width="20" height="35" class="icon">
                  <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                </svg>
              </div>
            </div>
          </div>
        <div>
          <img 
            src={require("../../../assets/images/illustrations/dog.png")}
            alt="Water Image"
            className="face"
            style={{width: "140px", padding: '10px'}}
          />
          <h3><b>3.</b> Do you have pets? Do  <br/>
          they <b>chew</b> plants </h3>
          <div className="dropdown-container">
            <select required onChange={handleSelectPet}>
              <option>
                  Select..
              </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select> 
            <div class="select-icon">
              <svg focusable="false" viewBox="0 0 104 128" width="20" height="35" class="icon">
                <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
              </svg>
            </div>
          </div>
        </div>  
      </main>
 
      <Plants sun={sun} water={water} pet={pet} />
    </div> 
  )
}
const mapStateToProps = state => {
  return{
    plants: state.plantsReducer.plants
  }
}
const mapDispatchToProps = dispatch => 
  bindActionCreators({plantsAction}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)

