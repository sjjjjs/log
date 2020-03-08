
export default {
    getHome: () => '/l',
    getLogUrl: () => '/l/l',
    getLogDetailUrl: (id) => `/l/d/${id}`,
    getAliaUrl: text => `/l/a/${text}`,
    getLogCreateUrl: (id = '') => `/l/ce/${id}`,
    getLogCommentCreateUrl: (id, cid = '') => `/l/lc/ce/${id}/${cid}`
}
