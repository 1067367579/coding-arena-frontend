import service from "@/utils/request";

export function getQuestionListService(params) {
    return service({
        url: '/sys/question/list',
        method: 'get',
        params: params
    });
}

export function delQuestionService() {

}

export function addQuestionService() {

}

export function editQuestionService() {

}

export function getQuestionDetailService() {}
