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
export const findCustomerById=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8081/customer/${id}`);
        return res.data;
    } catch (e){
        return undefined;
    }
}
export const updateCustomer=async (id, customer)=>{
    try{
        await axios.patch(`http://localhost:8081/customer/${id}`,customer)
        return true;
    } catch (e){
        return false;
    }
}

export const getAllTypeCustomer=async ()=>{
    try {
        let res=await axios.get("http://localhost:8081/typeCustomer");
        return res.data;
    } catch (e){
        return undefined;
    }
}