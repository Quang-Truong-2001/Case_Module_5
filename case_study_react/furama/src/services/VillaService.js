import axios from "axios";

export const addServiceVilla=async (villa)=>{
    try{
        await axios.post("http://localhost:8081/villa",villa);
        return true;
    } catch (e){
        return false;
    }
}
export const getAllVilla=async ()=>{
    try {
        let res=await axios.get("http://localhost:8081/villa");
        return res.data
    } catch (e){
        return undefined;
    }
}
export const getVillaService=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8081/villa/${id}`);
        return res.data;
    } catch (e){
        return undefined
    }
}
export const deleteVillaService=async (id)=>{
    try {
        let res=await axios.delete(`http://localhost:8081/villa/${id}`);
        return res.data;
    } catch (e){
        return undefined
    }
}

export const updateVillaService=async (id, villa)=>{
    try {
        await axios.patch(`http://localhost:8081/villa/${id}`,villa);
        return true;
    } catch (e){
        return false;
    }
}