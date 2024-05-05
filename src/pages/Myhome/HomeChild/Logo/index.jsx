import React from 'react'
import style from './index.module.css'
import A from '../../../../assets/logo/1.png'
import B from '../../../../assets/logo/2.png'
import C from '../../../../assets/logo/3.png'
import D from '../../../../assets/logo/4.png'
import E from '../../../../assets/logo/5.png'
import F from '../../../../assets/logo/6.png'
import G from '../../../../assets/logo/7.png'
import H from '../../../../assets/logo/8.png'
import I from '../../../../assets/logo/9.png'
import J from '../../../../assets/logo/10.png'
import K from '../../../../assets/logo/11.png'
import L from '../../../../assets/logo/12.png'
import M from '../../../../assets/logo/13.png'
import N from '../../../../assets/logo/14.png'
import O from '../../../../assets/logo/15.png'
import P from '../../../../assets/logo/16.png'
import Q from '../../../../assets/logo/f.png'
import Y from '../../../../assets/logo/b.png'
import R from '../../../../assets/logo/c.png'
import Z from '../../../../assets/logo/d.png'
import W from '../../../../assets/logo/d.png'
import S from '../../../../assets/logo/logo.png'
import N1 from '../../../../assets/logo/n1.webp'
import N2 from '../../../../assets/logo/n2.webp'
import N3 from '../../../../assets/logo/n3.webp'
import N4 from '../../../../assets/logo/n4.webp'
import N5 from '../../../../assets/logo/n5.webp'
import N6 from '../../../../assets/logo/n6.webp'
import N7 from '../../../../assets/logo/n7.webp'
import Sec from '../Secc/index'
export default function index() {
    const list1 = [A, B, C, D, E, F, G, H, I, J]
    const list2 = [K, L, M, N, Z, P, Q, W, R, S]
    const LIST3 = [N1, N2, N3, N4, N5, N6, N7]
    return (
        <div className={style.all}>
            <div className={style.name}>
                <Sec name='展商风采' engname='EXHBITOR STYLE' />
            </div>
            <div class={style.allscroll} style={{ '--t': '30s' }}>
                <div>
                    {
                        list1.map((item, index) => {
                            return (
                                <span key={index}> <img src={item} key={index} className={style.pic} /></span>
                            )
                        })
                    }

                </div>

                <div>
                    {
                        list1.map((item, index) => {
                            return (
                                <span key={index}> <img key={index} src={item} className={style.pic} /></span>
                            )
                        })
                    }
                </div>
            </div>

            <div class={style.allscroll} style={{ '--t': '40s' }}>
                <div>
                    {
                        list2.map((item, index) => {
                            return (
                                <span key={index}> <img key={index} src={item} className={style.pic} /></span>
                            )
                        })
                    }
                </div>

                <div>
                    {
                        list2.map((item, index) => {
                            return (
                                <span key={index}> <img key={index} src={item} className={style.pic} /></span>
                            )
                        })
                    }
                </div>
            </div>

            <div class={style.allscroll} style={{ '--t': '45s' }}>
                <div>
                    {
                        LIST3.map((item, index) => {
                            return (
                                <span key={index}> <img key={index} src={item} className={style.pic} /></span>
                            )
                        })
                    }
                </div>

                <div>
                    {
                        LIST3.map((item, index) => {
                            return (
                                <span key={index}> <img key={index} src={item} className={style.pic} /></span>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
