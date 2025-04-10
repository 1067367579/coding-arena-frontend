import service from "@/utils/request";

export async function loginService(userAccount,password) {
    return service({
        url: "/sys/user/login",
        method: "post",
        data: {
            userAccount: userAccount,
            password: password
        }
    })    
}

export async function getAdminInfoService() {
    return service({
        url: "/sys/user/info",
        method: "get"
    })    
}

export async function adminLogout() {
    return service({
        url: "/sys/user/logout",
        method: "delete"
    })
}