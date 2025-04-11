import service from "@/utils/request";

export function getQuestionListService(params) {
    return service({
        url: '/sys/question/list',
        method: 'get',
        params: params
    });
}

export function delQuestionService(questionId) {
    return service({
        url: '/sys/question/delete',
        method: 'delete',
        params: {questionId}
    })
}

export function addQuestionService(question) {
    return service({
        url: '/sys/question/add',
        method: 'post',
        data: question
    })
}

export function editQuestionService(question) {
    return service({
        url: '/sys/question/edit',
        method: 'put',
        data: question
    })
}

export function getQuestionDetailService(questionId) {
    return service({
        url: '/sys/question/detail',
        method: 'get',
        params: {questionId}
    })
}
