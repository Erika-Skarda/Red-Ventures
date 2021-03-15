import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Plants from "../../../components/plants";
import * as plantsAction from "../../../actions/plantsAction";

function PlantsPage(props) {
 const { plants } = props
  
  return (  
    <div>
      <main>
        <ul>
          {plants && plants.map(plant => {
            return (
              <li>
                <strong>Planta: {plant.name}</strong>
                <img src={plant.url} />
              </li>
            )
          })}
        </ul>
      </main>
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


export default connect(mapStateToProps, mapDispatchToProps)(PlantsPage)

