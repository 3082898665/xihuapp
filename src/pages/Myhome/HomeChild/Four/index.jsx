import React, { useState } from 'react'
import style from './index.module.css'
import {
    PictureFilled,
    VideoCameraFilled
} from '@ant-design/icons';
import Changepic from './child/changepic'
import Changevid from './child/changevid'
import { fadeInLeft, fadeInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    const styles = StyleSheet.create({
        fadeInLeft: {
            animationName: fadeInLeft,
            animationDuration: '0.5s'
        }
    })
    const styles1 = StyleSheet.create({
        fadeInRight: {
            animationName: fadeInRight,
            animationDuration: '0.5s'
        }
    })
    const [change, setchange] = useState('1')
    function changephoto() {
        setchange('1')
    }
    function changevid() {
        setchange('2')
    }
    return (
        <div className={style.all}
        >
            <div style={{ display: 'flex' }}>
                <div className={`${style.list} ${css(styles.fadeInLeft)}`}>
                    <div className={style.tit}>
                        <h1 className={style.hs}>精彩瞬间</h1>
                        <span className={style.ss}> wonderful Moment</span>
                    </div>
                </div>
                <div className={`${style.contentlist} ${css(styles1.fadeInRight)}`} style={{ color: change == '1' ? '#2db1ba' : 'rgb(153,153,153)' }}>
                    <div className={style.confont} onClick={changephoto}>
                        <span style={{ position: 'relative', left: '-10px' }}>
                            <PictureFilled />
                        </span>

                        <span>精彩图片</span>
                    </div>
                    <div className={style.confont} onClick={changevid} style={{ color: change == '2' ? '#2db1ba' : 'rgb(153,153,153)' }}>
                        <span style={{ position: 'relative', left: '-10px' }}>
                            <VideoCameraFilled />
                        </span>
                        <span>精彩视频</span>
                    </div>

                </div>
            </div>
            {
                change == 1 ? <>
                    <Changepic></Changepic>
                </> : <>
                    <Changevid></Changevid>
                </>
            }

        </div>
    )
}
