
import { routes } from "../utils/constants";
import { push } from "connected-react-router";

export const redirectToPlants = () => async(dispatch) => {
  try {
      dispatch(push(routes.plants))
  } catch(err) {
      console.log(err)
      alert("Ocorreu um erro inesperado. Tente novamente")
  }
}