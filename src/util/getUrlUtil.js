
export default {
    getLogUrl: () => `/l`,
    getLogDetailUrl: (id) => `/l/${id}`,
    getAliaUrl: text => `/l/a/${text}`,
    getLogCreateUrl: (id = '') => `/l/ce/${id}`,
    getLogCommentCreateUrl: (id, cid = '') => `/l/lc/ce/${id}/${cid}`
}
