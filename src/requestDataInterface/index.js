import axiosInstance from '@/axiosInstance'
import qs from 'qs'

/**
 * 产品详情模块--录入实名制信息以及评估报告相关接口
 * @author baiyongshi
 * **/

//产品信息查询
export const ProdInfoQuery = params => {
    return axiosInstance.post("/product/LERybProdInfoQuery").then(res => res.data)
}

//产品历史行情查询
export const ProdInfoHisQuery = params => {
    return axiosInstance.post("/product/LERybProdHisInfoQuery").then(res => res.data)
}

//上传身份证照片
export const uploadPhoto = params => {
    // 
    // let postData
    // if(params){
    //     postData = qs.stringify( params )
    // }
    return axiosInstance.post("/accountOpen/upload", params).then(res => res.data)
}

//借记卡信息查询
export const DebitCardQuery = params => {
    return axiosInstance.post("/accountOpen/LECardBinQuery",params).then(res => res.data)
}

//职业列表查询
export const OccupationListQuery = params => {
    return axiosInstance.post("/accountOpen/OccupationListQry",params).then(res => res.data)
}

//风评题目查询
export const RiskQuestionQuery = params => {
    return axiosInstance.post("/accountOpen/RiskQuestionQry",params).then(res => res.data)
}



