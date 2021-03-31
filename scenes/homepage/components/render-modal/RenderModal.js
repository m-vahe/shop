import {Modal} from 'antd';
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useState,useEffect} from "react"

const RenderModal = ({isModalVisible,setIsModalVisible}) => {
    const router = useRouter();

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <Modal
            title="Aktuelle News aus der Welt des Luxus und der exklusiven Nischenmarken!"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={950}
            footer={
                [
                    <button className={"checkout-modal-btn"} key={"login"} onClick={()=>router.push("/login")}>Log in</button>
                ]
            }
        >
            <p className={"login-popup-text"}>Please login to continue</p>
        </Modal>
    )
}

export default RenderModal