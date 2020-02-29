
export default {
    getAliaUrl: text => `/alia/${text}`,
    getLogDetailUrl: (id) => `/log.detail/${id}`,
    getLogUrl: () => `/log`,
    getLogCommentCreateUrl: (id, cid = '') => `/log.comment.createOrEdit/${id}/${cid}`,
    getLogCreateUrl: (id = '') => `/log.createOrEdit/${id}`,
}
