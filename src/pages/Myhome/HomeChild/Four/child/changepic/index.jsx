import React from 'react'
import style from './index.module.css'
import Fir from '../../../../../../assets/wonderpic/fir.jpg'
import Sec from '../../../../../../assets/wonderpic/sec.jpg'
import Thr from '../../../../../../assets/wonderpic/thr.jpg'
import Four from '../../../../../../assets/wonderpic/four.jpg'
import Five from '../../../../../../assets/wonderpic/five.webp'
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    const piclist = [Fir, Sec, Thr, Four, Five];

    const styles = StyleSheet.create({
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '1.5s'
        }
    })
    return (
        <div className={`${style.all} ${css(styles.fadeIn)}`}>
            <div className={style.item1}>
                <img src={piclist[0]} className={style.mainpic}></img>
                <div className={style.back}></div>
                <div className={style.fonts}>
                    数字安全@数字中国主论坛.精彩瞬间
                </div>
            </div>
            <div className={style.item2}>
                <img src={piclist[1]} className={style.otherpic}></img>
                <div className={style.backo}></div>
                <div className={style.fontso}>
                    数字安全@数字中国主论坛.精彩瞬间
                </div>
            </div>
            <div className={style.item3}>
                <img src={piclist[2]} className={style.otherpic}></img>
                <div className={style.backo}></div>
                <div className={style.fontso}>
                    数字安全@数字中国主论坛.精彩瞬间
                </div>
            </div>
            <div className={style.item4}>
                <img src={piclist[3]} className={style.otherpic}></img>
                <div className={style.backo}></div>
                <div className={style.fontso}>
                    数字安全@数字中国主论坛.精彩瞬间
                </div>
            </div>
            <div className={style.item5}>
                <img src={piclist[4]} className={style.otherpic}></img>
                <div className={style.backo}></div>
                <div className={style.fontso}>
                    数字安全@数字中国主论坛.精彩瞬间
                </div>
            </div>
        </div>
    )
}
