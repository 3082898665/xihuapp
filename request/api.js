import service from "./index";
export const login = (data) => {
    console.log(data)
    return service.post('user/login', data)
}
export const test = (data) => {
    console.log(data)
    return service.post('activity/add1', data)
}
export const addpic = (data) => {
    console.log(data)
    return service.post('activity/add2', data)
}
export const getproduct = () => {

    return service.get('picture/getAchievement')
}
export const getguest = (data) => {
    console.log(data)
    return service.post('picture/getGuest', data)
}
export const getacttall = () => {
    return service.get('activity/get')
}
export const aianswer = (data) => {
    return service.post('shop/talk', data)
}
export const sendhot = (data) => {
    return service.post('message/addExpress', data)
}
export const sendvid = (data) => {
    return service.post('activity/addRating', data)
}

export const showuserpic = () => {
    return service.get('activity/getRating')
}
export const dz = (data) => {
    return service.post('activity/thumb', data)
}
export const getnews = () => {
    return service.get('picture/getNews')
}
export const getrank = () => {
    return service.get('activity/range')
}
export const deleteact = (id) => {
    return service.post('activity/deleteActivity', id)
}
export const getuser = () => {
    return service.get('user/getUser')
}
export const getfast = () => {
    return service.get('message/getExpress')
}
export const downppt = (id) => {
    return service.post('picture/downloadPPt', id)
}