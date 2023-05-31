import React, {useState} from 'react';
import axios from 'axios';
import {API_URL} from "../constants/api";
import {useTranslation} from "react-i18next";
import clothing from "../assets/img/gallery5_1_-removebg-preview.png"

const MessageForm = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const {t} = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", email)
        formData.append('message', message);
        formData.append('image', image);

        try {
            await axios.post(`${API_URL}/sendEmail`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Message sent successfully');
            window.alert('Message sent successfully'); // Display the alert window

        } catch (error) {
            console.error('Error sending message:', error);
            window.alert('Error sending message'); // Display the alert window
        }
        setEmail("")
        setMessage("")
        setImage("")
    };

    return (
        <section className="sendEmail">
            <div className="container">
                <div className="row">
                    <div className="sendEmail__content">
                        <form onSubmit={handleSubmit} className="sendEmail__form">
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                   placeholder={t("sendEmail.placeholder1")} className="sendEmail__input"/>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t("sendEmail.placeholder2")}
                                className="sendEmail__textarea"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                id="myFileInput"
                            />
                            <label htmlFor="myFileInput" id="fileInputLabel">{t("sendEmail.btn1")}</label>
                            <button type="submit" className="sendEmail__submit">{t("sendEmail.btn2")}</button>
                        </form>
                    </div>
                    <div className="sendEmail__content2">
                        <div className="sendEmail__content_item1">
                            <img src={clothing} alt="clothing"
                                 style={{width: "400px", height: "525px", objectFit: "cover"}}/>

                        </div>
                        <div className="sendEmail__content_item1">
                            <h3 className="title">{t("sendEmail.title")}
                            </h3>
                            <p className="description">{t("sendEmail.description")}</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageForm;
