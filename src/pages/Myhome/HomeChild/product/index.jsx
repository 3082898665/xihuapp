import React from 'react'
import style from './index.module.css'
import './but.css'
import Test from '../../../../assets/sells/book.png'
import { fadeInDown, flipInX, zoomInLeft, zoomInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    const conlist = ['网络安全', '框架之全', '疯狂java', '小红帽', '软件测试和维护'];
    const styles = StyleSheet.create({
        fadeInDown: {
            animationName: fadeInDown,
            animationDuration: '1s'
        }
    })
    const styles1 = StyleSheet.create({
        flipInX: {
            animationName: flipInX,
            animationDuration: '1s'
        }
    })
    const styles2 = StyleSheet.create({
        zoomInLeft: {
            animationName: zoomInLeft,
            animationDuration: '1.25s'
        }
    })
    const styles3 = StyleSheet.create({
        zoomInRight: {
            animationName: zoomInRight,
            animationDuration: '1.25s'
        }
    })
    return (
        <div
            className={style.all}
        >
            <div className={`${style.maintitle} ${css(styles.fadeInDown)}`}>
                <div className={style.cfont}>创新产品</div>
                <div className={style.efont}>
                    INNOVATIVE PRODUCTS
                </div>
            </div>
            <div className={style.divid}></div>
            <div class={`${style.container} ${css(styles1.flipInX)}`}>
                <nav>
                    <ul>
                        {
                            conlist.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className={style.con}>
                <div className={`${style.condetail} ${css(styles2.zoomInLeft)}`}>
                    <div className={style.title}>
                        教育技术产业融合创新发展论坛
                    </div>
                    <div className={style.ledivid}></div>
                    <div className={style.cont}>
                        多员协同,构建满足产业发展网安人才培养生态 </div>

                    <div className={style.but}>
                        <button class="btn-12"><span>了解详情</span></button>

                    </div>
                </div>
                <div className={`${style.conpic} ${css(styles3.zoomInRight)}`}>
                    <img className={style.detailpic} src={Test}></img>
                </div>
            </div>
        </div>
    )
}
