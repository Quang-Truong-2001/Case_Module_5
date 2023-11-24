import axios from "axios";

export const addRoomService=async (room)=>{
    try {
        await axios.post("http://localhost:8081/room",room);
        return true
    } catch (e){
        return false;
    }
}
export const getAllRoomService=async ()=>{
    try {
        let res=await axios.get("http://localhost:8081/room");
        return res.data
    } catch (e){
        return undefined;
    }
}