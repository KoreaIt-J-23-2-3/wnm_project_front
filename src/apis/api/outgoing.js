import { async } from "q";
import instance from "../config/instance"

export const getOutgoing = async (productDtlId, option) => {
    const response = await instance.get(`/api/admin/outgoing/${productDtlId}`, option);
    return response;
}

export const addOutgoing = async (productDtlId, count, option) => {
    const response = await instance.post(`/api/admin/outgoing/${productDtlId}/${count}`,null , option)
    return response;
}