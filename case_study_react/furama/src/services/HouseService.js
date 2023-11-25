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
export const getHouseService=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8081/house/${id}`);
        return res.data;
    } catch (e){
        return undefined
    }
}
export const deleteHouseService=async (id)=> {
    try {
        let res = await axios.delete(`http://localhost:8081/house/${id}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}

export const updateHouseService=async (id, house)=>{
    try {
        await axios.patch(`http://localhost:8081/house/${id}`,house);
        return true;
    } catch (e){
        return false;
    }
}