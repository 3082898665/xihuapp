import React, { useState } from "react";
import { VideoRoom } from './component/VideoRoom';
import style from './index.module.scss'
import { changestate } from '../../../../../until/api'
function Index() {
    const [videoCall, setVideoCall] = useState(false);
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    function gozbb() {
        changestate(localStorage.getItem('liveid')).then(res => {
            console.log(res)
        })
        setVideoCall(true)
    }
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
                <div onClick={gozbb} className={style.start}>开始直播</div>
            )
            }
        </div>

    )
}

export default Index;