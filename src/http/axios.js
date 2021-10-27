import axios from "axios";

const client_id = '515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com';
const client_secret = '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';
const grant_type = 'refresh_token';


axios.interceptors.response.use(function(res) {
    // console.log('response interceptor!!!!');
    return res;
}, async function(err) {
    console.log('err response' + err)
    const {
        config,
        response: {status}
    } = err;

    /*
    401 보내주는 건 google 밖에 없음!
    */
    if(status == 401) {
        console.log('401 토큰 에러');

        const originalRequest = config;
        var refresh_token = await getCookie('fit-refresh');

        const {data} = await axios.post(`https://www.googleapis.com/oauth2/v4/token?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=${grant_type}`);

        document.cookie = `fit-access=${data['access_token']}`;
        
        console.log(originalRequest);
        originalRequest.headers.Authorization = `Bearer ${data['access_token']}`;

        return axios(originalRequest);

    }
    return Promise.reject(err);
});
function getCookie(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}
export default axios;