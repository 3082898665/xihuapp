import service from "./index";
export const goab = (data) => {
    console.log(data)
    return service.get('/liveInfo/createLive?liveName=' + data.liveName + '&description=' + data.description + '&guests=' + data.guest + '&startTime=' + data.startTime + '&endTime=' + data.endtime)
}
export const test = () => {

    return service.get('liveInfo/test')
}
export const senvideo = (data) => {
    return service.post('liveInfo/saveVedio', data)
}
export const getlivelist = () => {
    return service.get('liveInfo/listLives')
}
export const changestate = (id) => {
    return service.put('liveInfo/startLive/' + id)
}