import React, { useState } from 'react'
import style from './index.module.css'
import MyPet from './Pet'
import PetShop from './Petshop'
export default function index() {
    const [state, setstate] = useState(2)
    return (
        <div className={style.all}>
            <div className={style.title}>
                <div className={style.mypet} onClick={() => setstate(1)} style={{ color: state == 1 ? 'black' : '', borderBottom: state == 1 ? '1px solid black' : '' }}>
                    灵宝璟璨
                </div>
                <div className={style.petshop} onClick={() => setstate(2)} style={{ color: state == 2 ? 'black' : '', borderBottom: state == 2 ? '1px solid black' : '' }}>
                    灵宝御品坊
                </div>

            </div>
            <div className={style.content}>
                {
                    state == 1 ? <>
                        <MyPet />
                    </> : <>
                        <PetShop />
                    </>
                }

            </div>
        </div>
    )
}
