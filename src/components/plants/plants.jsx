import React, { useState, useEffect, Fragment } from 'react';
import { baseUrl } from "../../utils/constants";
import "./index.scss";
import Toxic from "../../assets/images/icons/toxic.svg";
import Pet from "../../assets/images/icons/pet.svg";
import Sun from "../../assets/images/icons/sun.svg";
import NoSun from "../../assets/images/icons/no-sun.svg";
import LowSun from "../../assets/images/icons/low-sun.svg";
import Drop1 from "../../assets/images/icons/1-drop.svg";
import Drop2 from "../../assets/images/icons/2-drops.svg";
import Drop3 from "../../assets/images/icons/3-drops.svg";

const descriptionPlant = [
  "The Euphorbia thrives on bright light and sun light, although direct sun when blazing hot is best avoided, when first introduced to direct sun. Watering: It's advisable to water this plant more often within the summer and much less, winter time.",
]

export default function Plants({ sun, water, pet }) {
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    if(sun !== null && water !== null && pet !== null )
    fetch(`${baseUrl}sun=${sun}&water=${water}&pets=${pet}`)
    .then(response => response.json())
    .then((json) => json.error ? setPlants(0) : setPlants(json))
  }, [sun, water, pet]);

  console.log([plants][0])
  if(plants === null) return null;

  return (   
    <Fragment>
      <div className="content">
        <span 
  
          className={plants!==0 ? "container-title": "container-title-no"}
        >
          <img 
            src={require("../../assets/images/illustrations/pick.png")}
            alt="Pick Image"
            style={{width: "200px", padding: '10px',textShadow: '0.5px 0.5px #FD9872'}}
          />
          <h1 style={{paddingBottom: '10px'}}>Our picks for you</h1>
        </span>

        <div className="container">
          <div className="subContainer1">
            {plants  && plants.map((plant, index) => { 
              {console.log("a", [plant.id])}
              return (
                <>
                  {plant.staff_favorite == true && (
                    <div className="card" key={plant.id}>
                      <img 
                        src={(plant.url)}
                        alt="Pick Image"
                      />
                      <span>
                        <h2>
                          {plant.name.split(' ')[0]} <br/>
                          {plant.name.split(' ')[1]}
                        </h2>
                        <div>
                          <p><b>${plant.price}</b></p>
                          <img src={plant.toxicity ? Toxic : Pet }
                            alt="Icon"
                            style={{width: "40px", padding: '7px', marginBottom: '10px'}}
                          />
                          <img src={plant.sun == 'high' ? Sun : plant.sun == 'low' ? LowSun : NoSun}
                            alt="Icon"
                            style={{width: "40px", padding: '7px' , marginBottom: '10px'}}
                          />
                          <img src={plant.water == 'daily' ? Drop1 : plant.water == 'regularly' ? Drop2 : Drop3 }
                            alt="Icon"
                            style={{width: "40px", padding: '7px', marginBottom: '10px'}}
                          />
                      </div>
                      </span>
                    </div>
                  
                  )}
                </>
              )
            })}
          </div>
          <div className="subContainer2">
            {plants  && plants.map((plant, index) => {
              return(
                <>
                  {plant.staff_favorite == false &&
                    <div className="card-small" key={plant.id}>
                      <img 
                        src={(plant.url)}
                        alt="Pick Image"
                        style={{width: "140px", height: '150px', padding: '10px', textShadow: '0.5px 0.5px #FD9872'}}
                      />
                      <span>
                        <div>
                          <h4>{plant.name}</h4>
                          <small>${plant.price}</small>
                        </div>
                        <div>
                          <img src={plant.toxicity ? Toxic : Pet }
                            alt="Icon"
                            style={{width: "30px", padding: '7px', marginBottom: '10px'}}
                          />
                          <img src={plant.sun == 'high' ? Sun : plant.sun == 'low' ? LowSun : NoSun}
                            alt="Icon"
                            style={{width: "30px", padding: '7px' , marginBottom: '10px'}}
                          />
                          <img src={plant.water == 'daily' ? Drop1 : plant.water == 'regularly' ? Drop2 : Drop3 }
                            alt="Icon"
                            style={{width: "30px", padding: '7px', marginBottom: '10px'}}
                          />
                        </div>
                      </span>
                    </div>
                  }
                </>
              )
            })}
            </div>
          </div>
          {plants == 0 &&
            <div className="no-results">
              <div>
                <h1 style={{color: '#707070'}}>No results yet...</h1>
                <p style={{color: '#707070'}}> Use the filters above to find <br/>
                  the plant that best fits your<br/>
                  environment:)
                </p>
              </div>
              <div> 
                <img src={require('../../assets/images/illustrations/no-results.png') }
                  alt="No results image"
                  //style={{width: "40px", padding: '7px', marginBottom: '10px'}}
                />
              </div>
            </div>
          }
       
      </div>
    </Fragment>
  )
}
