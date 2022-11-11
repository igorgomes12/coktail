import axios from "axios"
import { responseDrink } from "./types"

const baseUrlDrink = 'https://thecocktaildb.com/api/json/v1/1/'

  
export const serviceDrink = async (name:string): Promise <responseDrink> => {
    const result= await axios.get<responseDrink>(`${baseUrlDrink}search.php?s=${name}`)
    .then((response)=>{
      console.log(response.data.drinks[0].strDrink)
      return response.data
    })
    .catch((error)=>{
      return error
    })
    return result
  }