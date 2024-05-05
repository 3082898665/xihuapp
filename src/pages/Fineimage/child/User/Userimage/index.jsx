import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import M1 from '../../../assets/main1.jpg'
import M2 from '../../../assets/main2.jpg'
import M3 from '../../../assets/main3.jpg'
import R1 from '../../../assets/r1.png'
import R2 from '../../../assets/r2.jpg'
import R3 from '../../../assets/r3.png'
import Masonry from 'react-masonry-css'
import Good from '../good.png'
import G2 from '../g2.png'
import { showuserpic, dz } from '../../../../../../request/api'
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};
export default function index({ loading }) {
    const [picl, setpicl] = useState([])
    const [isshow, setshow] = useState(false)
    useEffect(() => {
        showuserpic().then(res => {
            console.log(res.data)
            let nn = res.data.data
            for (let i = 0; i < res.data.data.length; i++) {
                nn[i].good = 0
            }
            console.log(nn)
            setpicl(nn)
        })
    }, [loading, isshow])
    function goodss(id, index) {
        dz({ activityId: id }).then(res => {
            console.log(res)
            setshow(!isshow)
        })

    }
    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={style.mymasonrygrid}
                columnClassName={style.mymasonrygridcolumn}>
                {picl.map((item, index) => (
                    <div key={index} className={style.picbox}>
                        <img src={item.picture} className={style.conpic} title='下载' />
                        <div className={style.info}>
                            {/* <img src={Video} className={style.icf} /> */}
                            <div className={style.down} style={{ left: '-2px' }}>{item.name}</div>
                            <img src={item.status == 0 ? Good : G2} alt="" className={style.goods} title='点赞' onClick={() => goodss(item.id, index)} />
                            <div className={style.down}>{item.num}</div>

                            <div style={{ width: '18%' }}></div>
                            <div style={{ color: 'rgb(193,193,193)', fontSize: '14px' }}>2024/4/2</div>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    )
}
