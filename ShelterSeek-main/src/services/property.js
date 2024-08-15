import axios from "axios"
import config from "./config"



export async function addProperty(property,id){
    

    const response = await axios.post(`${config.url}/api/properties/addProperty/${id}`,property,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

    return response
}

export async function getAllProps(){
    const response = await axios.get(`${config.url}/api/properties/allProperty`)

    return response.data
}

export async function getPropById(pid){
    const response = await axios.get(`${config.url}/api/properties/getPropertyById/${pid}`)

    return response.data
}