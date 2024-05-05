import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appid = '74bb4f29230d4a7c9546aace91226d49'
const token = '007eJxTYLgd/fe18Gcvn1cz76yJOvLk89eMa84FGxdcM5GYdjZ0leR2BQZzk6QkkzQjSyNjgxSTRPNkS1MTs8TE5FRLQyMjsxQTy8qqt6kNgYwMGt7lrIwMEAjiczNEZGaU5pTmZWUm5jEwAACFcyWP'
export const config = { mode: 'rtc', codec: 'vp8', appid: appid, token: token }
export const useClient = createClient(config)