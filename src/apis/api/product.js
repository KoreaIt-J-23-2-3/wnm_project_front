import instance from "../config/instance"

export const getProductApi = async (productDtlId) => {
    const response = await instance.get(`/api/product/detail/${productDtlId}`);
    return response;
}

export const getProductMstApi = async(productMstId) => {
    const response = await instance.get(`/api/product/master/${productMstId}`)
    return response;
}


export const addProductApi = async (product, option) => {
    const response = await instance.post(`/api/products`, product, option);
    return response;
} 

export const getProductsApi = async (searchData) => {
    const response = await instance.get(`/api/products`, {params: searchData});
    return response;
}

export const updateProductApi = async (productId, productData) => {
    const response = await instance.put(`/api/admin/product/${productId}`, productData);
    return response;
}

export const removeProductApi = async (productMstId) => {
    const response = await instance.delete(`/api/admin/product/${productMstId}`);
    return response;
}