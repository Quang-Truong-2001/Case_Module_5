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
export const getRoomService=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8081/room/${id}`);
        return res.data;
    } catch (e){
        return undefined
    }
}
export const deleteRoomService=async (id)=>{
    try {
        let res=await axios.delete(`http://localhost:8081/room/${id}`);
        return res.data;
    } catch (e){
        return undefined
    }
}
export const updateRoomService=async (id, room)=>{
    try {
        await axios.patch(`http://localhost:8081/room/${id}`,room);
        return true;
    } catch (e){
        return false;
    }
}