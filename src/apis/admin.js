import service from "@/utils/request";

export default async function loginService(userAccount,password) {
    return service({
        url: "/sys/user/login",
        method: "post",
        data: {
            userAccount: userAccount,
            password: password
        }
    })    
}