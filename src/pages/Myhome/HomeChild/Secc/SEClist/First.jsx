import React, { useEffect, useState } from 'react'
import style from './fir.module.css'
import { fadeInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import City from '../../../../../assets/city.png'
import Host from '../../../../../assets/host.png'
const Mlist = React.memo(({ picture, title, content, but }) => {
    console.log(picture)
    const styles = StyleSheet.create({
        fadeInDown: {
            animationName: fadeInDown,
            animationDuration: '1s'
        }
    })
    const [showfont, setfont] = useState(false)
    useEffect(() => {
        const timer = setInterval(() => {
            setfont(true)
        }, 1250)
    }, [])
    return (

        <div className={style.mlist} >
            <div className={style.info}>
                <div className={style.xxinfo}>
                    {
                        showfont && (

                            <div className={style.detail}>
                                <div className={`${style.title} ${css(styles.fadeInDown)}`}>
                                    {title}
                                </div>
                                <div className={`${style.divid} ${css(styles.fadeInDown)}`}>

                                </div>
                                <div className={`${style.content} ${css(styles.fadeInDown)}`}>
                                    {content}
                                </div>
                                <div className={`${style.but} ${css(styles.fadeInDown)}`}>
                                    {but}
                                </div>
                            </div>

                        )
                    }


                </div>

                <div className={style.backinfo}>

                </div>
                <div className={style.backpic}>

                </div>
                <div className={style.xxpic}>
                    <img src={picture} className={style.realpic}></img>
                </div>
            </div>
        </ div>
    )
})
export default Mlist;
// export default function ({ picture, title, content, but }) {
//     console.log(picture)
//     const styles = StyleSheet.create({
//         fadeInDown: {
//             animationName: fadeInDown,
//             animationDuration: '1s'
//         }
//     })
//     const [showfont, setfont] = useState(false)
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setfont(true)
//         }, 2000)
//     }, [])
//     return (

//         <div className={style.mlist} >
//             <div className={style.info}>
//                 <div className={style.xxinfo}>
//                     {
//                         showfont && (

//                             <div className={style.detail}>
//                                 <div className={`${style.title} ${css(styles.fadeInDown)}`}>
//                                     {title}
//                                 </div>
//                                 <div className={`${style.divid} ${css(styles.fadeInDown)}`}>

//                                 </div>
//                                 <div className={`${style.content} ${css(styles.fadeInDown)}`}>
//                                     {content}
//                                 </div>
//                                 <div className={`${style.but} ${css(styles.fadeInDown)}`}>
//                                     {but}
//                                 </div>
//                             </div>

//                         )
//                     }


//                 </div>

//                 <div className={style.backinfo}>

//                 </div>
//                 <div className={style.backpic}>

//                 </div>
//                 <div className={style.xxpic}>
//                     <img src={picture} className={style.realpic}></img>
//                 </div>
//             </div>
//         </ div>
//     )
// }
