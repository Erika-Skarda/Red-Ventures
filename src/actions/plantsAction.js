import axios from "axios";
import { baseUrl } from "../utils/constants";
import { setLoading } from "./index"

export const setSelectedContract = (id) =>({
  type: "SET_SELECTED_PLANT",
  payload: {
      id
  }
});

export const setPlantsType = (plants) => ({
    type: "SET_PLANTS_TYPE",
    payload: {
      plants
    }
})

export const getPlantsByInfo = (sun, water, pet) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await axios.get(`${baseUrl}/sun=${sun}&water=${water}&pets=${pet}`)
    dispatch(setLoading(false))
    console.log(response.data)
    dispatch(setPlantsType(response.data))   
  }
  catch (err) {
    dispatch(setLoading(false))
    console.error(err?.response?.data?.message)
  }
}

