export const createFetchData = level => () => {
    if(level) {
        return {
            status: 'ok',
            level
        }
    }
    return {
        status: 'fail'
    }
}