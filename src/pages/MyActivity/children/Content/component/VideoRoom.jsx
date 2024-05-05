import React, { useEffect, useRef, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';
import style from '../index.module.scss'
import { VideoPlayer } from './Videop'

const APP_ID = '7d72365eb983485397e3e3f9d460bdda';
const TOKEN =
    '00660e1524faef34b2da51fa651e535e732IACNG8ZFuEBK7sW2RShK1LkV74CVuE8zr7/IicQ77/W+6ZfJt0YAAAAAIgASMv4Q8RUcZgQAAQCB0hpmAgCB0hpmAwCB0hpmBACB0hpm';
const CHANNEL = 'jsu1122';

const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8',
});

export const VideoRoom = () => {
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);
    const [localVideoTrack, setLocalVideoTrack] = useState(null);
    const [pausedImage, setPausedImage] = useState(null); // State to store the captured image
    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
            setUsers((previousUsers) => [...previousUsers, user]);

        }

        if (mediaType === 'audio') {
            // user.audioTrack.play()
        }
    };

    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };

    useEffect(() => {
        client.on('user-published', handleUserJoined);
        client.on('user-left', handleUserLeft);

        client
            .join(APP_ID, CHANNEL, TOKEN, null)
            .then((uid) =>
                Promise.all([
                    AgoraRTC.createMicrophoneAndCameraTracks(),
                    uid,
                ])
            )
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setLocalTracks(tracks);
                setLocalVideoTrack(videoTrack)
                // videoTrack.play(ref.current)

                console.log()
                setUsers((previousUsers) => [
                    ...previousUsers,
                    // {
                    //     uid,
                    //     videoTrack,
                    //     audioTrack,
                    // },
                ]);
                client.publish(tracks);

            });

        return () => {
            for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            client.off('user-published', handleUserJoined);
            client.off('user-left', handleUserLeft);
            client.unpublish(localTracks).then(() => client.leave());
        };
    }, []);
    const ref = useRef()
    return (
        <div
            className={style.videoall}
        >

            {users.map((user) => (
                <div key={user.uid} className={style.wke}>

                    <VideoPlayer user={user} />

                </div>
            ))}
        </div>
    );
};