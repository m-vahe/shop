import {Modal} from 'antd';
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react"

const RenderModal = ({isModalVisible, setIsModalVisible}) => {
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
            width={1200}
            wrapClassName={"on__render__modal"}
            footer={null}
        >
            <div className={"render__modal__content"}>
                <p className={"render__modal__content__toptxt"}>Jetzt zum Newsletter anmelden und attraktive Benefits
                    genießen</p>
                <div className={"render__modal__content__img"}>
                    <img src="/anzeige-final.jpg" alt="/anzeige-final.jpg"/>
                </div>
                <div className={"render__modal__content__subscribe"}>
                    <form action="#">
                        <div className={"email__subscription__popup"}>
                            <input type="text" placeholder={"Email adresse"}/>
                            <button type="submit">Jetzt anmelden</button>
                        </div>
                        <div className={"privacy_popup container"}>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            <label htmlFor="privacy">
                                Hiermit bestätige ich, dass ich die Daten­schutz­erklärung gelesen habe *.
                            </label>
                        </div>
                    </form>
                </div>
                <div className={"render__modal__content__bottom"}>
                    <p>
                        Bitte senden Sie mir entsprechend Ihrer Datenschutzerklärung regelmäßig und jederzeit
                        widerruflich Informationen zu folgendem Produktsortiment per E-Mail zu: Beauty Produkte
                        Mit * gekennzeichnete Felder sind Pflichtfelder
                    </p>
                    <p>
                        WICHTIG: Im Anschluss erhalten Sie eine E-Mail (Bitte auch im SPAM Ordner nachsehen) mit einem
                        Link, um die Anmeldung zum Newsletter zu bestätigen.
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default RenderModal