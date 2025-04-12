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

export function addExamQuestionService(data) {
    return service({
        url: "/sys/exam/question/add",
        method: "post",
        data
    })
}
export function  getExamDetailService(examId) {
    return service({
        url: "/sys/exam/detail",
        method: "get",
        params: {
            examId: examId
        }
    })
} 
export function editExamService(data) {
    return service({
        url: "/sys/exam/edit",
        method: "put",
        data
    })
}
export function delExamQuestionService() {

}