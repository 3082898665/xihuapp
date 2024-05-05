import React, { useState } from "react";
import { VideoRoom } from './component/VideoRoom';
import style from './index.module.scss'
import Back from '../../../../assets/back.jpg'
function Index() {
    const [videoCall, setVideoCall] = useState(false);
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };

    return (
        <div className={style.all} >
            <div className={style.backpic}>

            </div>
            {videoCall ? (
                <div
                    className={style.content}
                >

                    <VideoRoom />
                </div>
            ) : (
                <h3 onClick={() => setVideoCall(true)}>开始直播</h3>
            )
            }
        </div>

    )
}

export default Index;