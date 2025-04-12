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

export function examAddService(data) {
    return service({
        url: "/sys/exam/add",
        method: "post",
        data
    })
} 

export function addExamQuestionService() {

}
export function  getExamDetailService() {

} 
export function editExamService() {

}
export function delExamQuestionService() {

}