import axios from "axios";

// const client_id = '515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com';
// const client_secret = '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';
// const grant_type = 'refresh_token';
// var refresh_token = getCookie('fit-refresh');

axios.interceptors.response.use(function(res) {
    console.log('response interceptor!!!!');
    return res;
}, function(err) {
    console.log('err response' + err)
    const {
        response: {status}
    } = err;

    /*
    401 보내주는 건 google 밖에 없음!
    */
    if(status == 401) {
        console.log(401);
        // await axios.post('https://www.googleapis.com/oauth2/v4/token')
        console.log(getCookie('fit-refresh'));
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