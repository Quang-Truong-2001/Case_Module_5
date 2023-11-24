import axios from "axios";

export const addHouseService=async (house)=>{
    try {
        await axios.post("http://localhost:8081/house",house);
        return true
    } catch (e){
        return false;
    }
}
export const getAllHouseService=async ()=>{
    try {
        let res=await axios.get("http://localhost:8081/house");
        return res.data;
    } catch (e){
        return undefined
    }
}