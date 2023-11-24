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