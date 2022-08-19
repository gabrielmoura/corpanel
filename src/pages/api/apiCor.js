import Api from "../../services/apiCor";


export default async function handler(req, res) {
    const api = new Api('planejamento', 'planejamentocor');
    //await api.autorization();
    api.token="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwbGFuZWphbWVudG8iLCJleHAiOjE2NjE3ODUzODB9.MX2Gj_HAIRwqOHSykVmm01pQjAYsEas_Ah8f4K4V9K_Mnipmk4BDDNhX5iVQ-gjOuyzumTD2Yj9Mg_VJEGXGDg";

    const data= await api.getData();
    return res.status(200).json(data.data);
}