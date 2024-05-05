import React, { useRef, useState } from 'react'
import { Button, DatePicker, TimePicker, Modal } from 'antd';
import { ExclamationCircleOutlined, FileExcelOutlined } from '@ant-design/icons';
import style from './file.module.css'
export default function selectfile({ setfiles }) {
    const [open, setOpen] = useState(false);
    const [yzid, setyzid] = useState();
    const inputRef = useRef();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);
    const showModal = () => {
        setOpen(true);
    };

    const accModal = () => {
        setOpen(false);

    };
    const hideModal = () => {
        setOpen(false);
    };
    const changeHandler = (event) => {
        // 获取文件输入框的值
        console.log(event.target.files[0])
        setfiles((oldData) => [...oldData, event.target.files[0]])
        setSelectedFile((oldData) => [...oldData, event.target.files[0]]);
        setIsFilePicked(true);
    };
    const chooseFile = () => {
        // 触发文件选择窗口
        inputRef.current.click();
    };
    function dellist(data) {
        console.log(data);
        setfiles((oldData) => oldData.filter((item, index) => item.name !== data.name))
        setSelectedFile((oldData) => oldData.filter((item, index) => item.name !== data.name));
    }
    const clearInput = () => {
        // 清空文件输入框的值
        inputRef.current.value = null;
    };
    return (
        <div style={{ width: '100%' }}>
            <Button onClick={showModal} style={{ zIndex: '1000' }}>
                文件上传
            </Button>
            <Modal
                title="添加验证集"
                open={open}
                onOk={accModal}
                onCancel={hideModal}
                okText="确认"
                cancelText="取消"
            >
                <div className={style.maintain}>
                    <div className={style.showcon} >
                        文件

                        <div>
                            <input
                                type="file"
                                ref={inputRef}
                                onChange={changeHandler}
                                onClick={clearInput}
                                accept="/image"
                                style={{ display: "none" }}
                            />
                            <button onClick={chooseFile} className={style.upload}>选择文件</button>
                            {isFilePicked ? (
                                <div>
                                    {selectedFile.map((item, index) => {
                                        return <div key={item.name} style={{ marginTop: '10px' }}>  <FileExcelOutlined /> {item.name}    <span className={style.del} onClick={() => dellist(item)}>删除</span></div>
                                    })}

                                </div>
                            ) : (
                                <p>没有选择任何文件</p>
                            )}
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}
