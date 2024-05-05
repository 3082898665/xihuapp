import React from 'react'
import style from './index.module.css'
import { fadeInUpBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    const words = [{
        title: '大会直播',
        info: '直播盛宴，不容错过',
        but: '加入直播'
    }, {
        title: '创新成果',
        info: '探索创新前沿，见证非凡成果',
        but: '查看成果'
    }, {
        title: '大会花絮',
        info: '大会幕后，精彩花絮等你揭秘',
        but: '观看内容'
    }, {
        title: '智能助手',
        info: '智能ai回答关于大会详情'
        , but: '进行体验'
    }
    ]
    const styles = StyleSheet.create({
        fadeInUpBig: {
            animationName: fadeInUpBig,
            animationDuration: '0.75s'
        }
    })
    const styles1 = StyleSheet.create({
        fadeInUpBig: {
            animationName: fadeInUpBig,
            animationDuration: '1s'
        }
    })
    const styles2 = StyleSheet.create({
        fadeInUpBig: {
            animationName: fadeInUpBig,
            animationDuration: '1.25s'
        }
    })
    const styles3 = StyleSheet.create({
        fadeInUpBig: {
            animationName: fadeInUpBig,
            animationDuration: '1.5s'
        }
    })
    const xlist = [styles, styles1, styles2, styles3]
    return (
        <div className={style.all}>
            {
                words.map((item, index) => {
                    return (
                        <div className={`${style.wsitem} ${css(xlist[index].fadeInUpBig)}`} key={item.title} style={{ marginLeft: index == 0 ? '8%' : '0' }}>
                            <div className={style.title}>
                                {item.title}
                            </div>
                            <h2 className={style.contentw}>

                                <span>{item.info}</span>
                            </h2>

                            <div className={style.wbut}>
                                <span>{item.but}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
