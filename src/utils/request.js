import axios from "axios";

//不同的功能 通过axios请求的是不同接口的地址
//后端为微服务项目 网关 127.0.0.1:19090 该项目只负责管理端 注意此处要加上http协议
const service = axios.create({
    baseURL: "/dev-api",
    timeout: 5000,

})

//设置响应拦截器
service.interceptors.response.use(
    //只要前端后端正确发送与响应 就是成功
    (res) => { //res就是响应数据
        const code = res.data.code;
        const msg = res.data.msg;
        if(code != 1000) {
            ElMessage.error(msg);
            //类似于抛出异常
            return Promise.reject(new Error(msg));
        } else {
            return Promise.resolve(res.data);
        }
    },
    //失败回调
    (error) => {
        return Promise.reject(error);
    }
)

export default service;

//同源策略 浏览器处于安全考虑 只允许来自同一源的请求访问资源
//协议不同 端口不同 域名不同 都会判定不属于同一个源

//代理服务器 前端和后端的端口不可能一样 将后端的资源URL 设置为与前端同源 然后通过代理服务器 访问后端
//代理服务器相当于中间人