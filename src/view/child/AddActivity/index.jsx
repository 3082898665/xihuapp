import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Steps, Button } from 'antd';
const description = 'This is a description.';
import { subscribe, publish } from 'pubsub-js'
export default function index() {
    const [progress, setPro] = useState(['process', 'wait', 'wait'])
    let howsize
    const navigate = useNavigate()
    const onChange = async (value) => {
        setCurrent(value);
        if (value == 0) {
            setPro(['process', 'wait', 'wait'])
            navigate('/administer/addactivity/first')
        } else if (value == 1) {
            setPro(['finish', 'process', 'wait'])
            navigate('/administer/addactivity/second')
        } else if (value == 2) {
            setPro(['finish', 'finish', 'process'])
            navigate('/administer/addactivity/third')
        }
        setCurrent(value);
    }
    const description = 'This is a description.';
    const [current, setCurrent] = useState(0)
    function next() {

        if (current == 0) {
            publish('firstgo', { data: '' })
            setCurrent(1)
            setPro(['finish', 'process', 'wait'])
            navigate('/administer/addactivity/second')

        }
        else if (current == 1) {

            setCurrent(2)
            setPro(['finish', 'finish', 'process'])
            publish('three', {})

            navigate('/administer/addactivity/third')

        }
        else if (current == 2) {


            setPro(['finish', 'finish', 'finish'])
            publish('sendajax', {})

            // navigate('/administer/addactivity/first')

        }
    }
    function pre() {
        if (current == 1) {
            setCurrent(0)
            setPro(['process', 'wait', 'wait'])
            navigate('/administer/addactivity/first')

        } else if (current == 2) {
            setCurrent(1)
            setPro(['finish', 'process', 'wait'])
            navigate('/administer/addactivity/second')

        }


    }
    const [detail, setdetail] = useState()
    useEffect(() => {
        subscribe('isgo', (_, data) => {
            console.log(data)
            howsize = data.data
            publish('howsize', { size: data })
        })
        subscribe('detail', (_, data) => {
            console.log(data)
            let newdata = data.data
            newdata.size = howsize
            console.log(newdata)
            publish('getinfo', { data: newdata })
        })
    }, [])

    return (
        <div className={style.all}>
            <div className={style.step}>
                <Steps
                    type="navigation"
                    size='small'
                    current={current}
                    onChange={onChange}
                    items={[
                        {
                            title: '步骤 1',
                            description: '选择获得类型',
                            status: progress[0]
                        },
                        {
                            title: '步骤 2',
                            description: '填写获得详细详细',
                            status: progress[1]
                        },
                        {
                            title: '步骤 3',
                            description: "活动发布",
                            status: progress[2]
                        },
                    ]}
                />
            </div>
            <div className={style.diver}></div>
            <div className={style.stepchild}>
                <Outlet />
            </div>
            <div className={style.butfix}>
                <div className={style.stepbut}>
                    <Button type="primary" onClick={pre}>上一步</Button>
                    <Button type="" style={{ marginLeft: '20px' }} onClick={next}>
                        {current == 2 ? '发布' : '下一步'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
