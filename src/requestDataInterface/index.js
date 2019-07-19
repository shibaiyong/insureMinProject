import axiosInstance from '@/axiosInstance'
import qs from 'qs'


export const uploadPhoto = params => {
    // /accountOpen/upload
    let postData = qs.stringify( params )
    return axiosInstance.post("/product/LERybProdInfoQuery", postData).then(res => res.data)
}



export const ProdInfoQuery = params => {
    
    return axiosInstance.post("/product/LERybProdInfoQuery").then(res => res.data)
}

export const ProdInfoHisQuery = params => {
    
    return axiosInstance.post("/product/LERybProdHisInfoQuery").then(res => res.data)
}



