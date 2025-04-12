import service from "@/utils/request";

export function getExamListService(params) {
    return service({
        url: "/sys/exam/list",
        method: "get",
        params
    })
}
export function delExamService() {

}
export function publishExamService() {

} 
export function cancelPublishExamService() {

}