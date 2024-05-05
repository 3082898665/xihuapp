import React, { useEffect, useRef, useState } from 'react';
import style from '../index.module.scss'
import { VideoPlayer } from './Videop'

const APP_ID = '91fee326fb1e41f4835b85cd68da2c4f';
const TOKEN =
    '007eJxTYNhTzZ8qZsdj7ifp+u9GvN2L9w9OMeZa+ticsci+bydZEq3AYGmYlppqbGSWlmSYamKYZmJhbJpkYZqcYmaRkmiUbJK25gF7WkMgI8M7RmdWRgYIBPFZGCoyM0oZGACmhR2K';
const CHANNEL = 'xihu';

const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8',
});

export const VideoRoom = () => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);

    function startRecording(stream) {
        const options = { mimeType: 'video/webm; codecs=vp8' };
        const recordedChunks = [];
        const mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.ondataavailable = function (event) {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = function () {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm',
            });
            const url = URL.createObjectURL(blob);
            // 下载录制的视频
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = url;
            a.download = 'live_recording.webm';
            a.click();
            window.URL.revokeObjectURL(url);
        };

        mediaRecorder.start();
        setIsRecording(true);
        mediaRecorderRef.current = mediaRecorder;
    }

    // 停止录制
    function stopRecording() {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    }


    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);
    const [localVideoTrack, setLocalVideoTrack] = useState(null);
    const [pausedImage, setPausedImage] = useState(null); // State to store the captured image
    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
            setUsers((previousUsers) => [...previousUsers, user]);
        }
    };
    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };
    useEffect(() => {
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
                const videoStream = videoTrack.getMediaStreamTrack()
                const audioStream = audioTrack.getMediaStreamTrack()
                const stream = new MediaStream([videoStream, audioStream])
                startRecording(stream)
                setLocalTracks(tracks);
                setLocalVideoTrack(videoTrack)
                console.log()
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack,
                    },
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
            client.unpublish(tracks).then(() => client.leave());
        };
    }, []);
    const ref = useRef()
    return (
        <div
            className={style.videoall}
        >
            {pausedImage && <img src={pausedImage} alt="Paused Stream" />}

            {users.map((user) => (
                <div key={user.uid} className={style.wke}>

                    <VideoPlayer user={user} />

                </div>
            ))}
            <button onClick={stopRecording}>停止录制</button>
        </div>
    );
};