import axios from "axios";

export const addContract=async (contract)=>{
    try {
        await axios.post("http://localhost:8081/contract",contract);
        return true
    } catch (e){
        return false;
    }
}
export const getAllContract=async ()=>{
    try {
        let res=await axios.get("http://localhost:8081/contract");
        return res.data;
    } catch (e){
        return undefined;
    }
}
export const deleteContract=async (id)=>{
    try {
        await axios.delete(`http://localhost:8081/contract/${id}`);
        return true
    } catch (e){
        return false;
    }
}