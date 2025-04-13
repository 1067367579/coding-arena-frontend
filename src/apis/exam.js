import service from "@/utils/request";

export function getExamListService(params) {
    return service({
        url: "/sys/exam/list",
        method: "get",
        params
    })
}
export function delExamService(examId) {
    return service({
        url: "/sys/exam/delete",
        method: "delete",
        params: {
            examId: examId
        }
    })
}
export function publishExamService(examId) {
    return service({
        url: "/sys/exam/publish",
        method: "put",
        params: {
            examId: examId
        }
    })
} 
export function cancelPublishExamService(examId) {
    return service({
        url: "/sys/exam/publish/cancel",
        method: "put",
        params: {
            examId: examId
        }
    })
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
export function delExamQuestionService(examId,questionId) {
    return service({
        url: "/sys/exam/question/delete",
        method: "delete",
        params: {
            examId: examId,
            questionId: questionId
        }
    })

}