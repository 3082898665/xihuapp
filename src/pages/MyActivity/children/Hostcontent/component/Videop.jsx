import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user }) => {
    const ref = useRef();

    useEffect(() => {

        user.videoTrack.play(ref.current);
    }, []);
    function pause() {

        if (user.videoTrack) {
            user.videoTrack.setEnabled(false);
            // 捕获当前帧并显示为静态图片
            const videoElement = ref.current;
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            // 将canvas转换为图片URL并设置为视频元素的背景
            const frameUrl = canvas.toDataURL();
            videoElement.style.backgroundImage = `url('${frameUrl}')`;
        }
    }
    return (
        <div>
            Uid: {user.uid}
            <div
                ref={ref}
                style={{ width: '100%', height: '60vh' }}
            ></div>
            <button onClick={pause}> pause</button>
        </div>
    );
};