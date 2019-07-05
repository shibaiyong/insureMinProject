import axiosInstance from '@/axiosInstance'

export const planCheckName = params => {
    return axiosInstance.get('http://ons.me/tools/dropload/json.php?page='+params.page+'&size='+params.size, { params: {} }).then(res => res.data)
}

export const planSave = params => {
    return axios.post("/plan/save", params).then(res => res.data)
}


