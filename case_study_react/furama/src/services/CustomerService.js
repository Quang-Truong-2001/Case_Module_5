import axios from "axios";

export const getAllCustomer= async ()=>{
    try{
        let res=await axios.get("http://localhost:8081/customer");
        return res.data;
    } catch (e){
        return undefined;
    }
}
export const addCustomer=async (customer)=>{
    try {
        await axios.post("http://localhost:8081/customer",customer);
        return true
    } catch (e){
        return false;
    }
}