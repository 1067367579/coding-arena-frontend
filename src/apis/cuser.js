import service from "@/utils/request"
export function getUserListService(params) {
    return service({
        url: "/sys/cuser/list",
        method: "get",
        params
    });
}

export function updateStatusService(data) {
    return service({
        url: "/sys/cuser/status/update",
        method: "put",
        data
    })
}