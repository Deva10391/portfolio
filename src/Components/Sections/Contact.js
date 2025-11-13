import React, { useEffect, useState } from 'react'
import Download from '../Download'
import emailjs from 'emailjs-com';
import Icons from '../Icons';
import Links from '../Links';


import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
const collRef = collection(db, 'stats');

export default function Contact() {
    const [statisticsList, setStatisticsList] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [res, setRes] = useState(null);

    const handleChange = (e) => {
        setRes(null);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message_html: formData.message,
        };

        console.log(templateParams);

        emailjs
            .send('service_li3y01s', 'template_v3a8j0q', templateParams, 'LFj-cZVjIaRYlW8YW')
            .then(
                (response) => {
                    setRes('Done');
                    console.log('Email sent successfully:', response);
                },
                (error) => {
                    setRes('Error occurred');
                    console.error('Email sending failed:', error);
                }
            );

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    useEffect(() => {

        const loadStats = async () => {
            try {
                const data = await getDocs(collRef);
                const statistics = data.docs.map(d => d = ({ _id: d.id, ...d.data() }));
                console.log(statistics[0]);
                setStatisticsList(statistics[0]);
            }
            catch (err) {
                console.error('Error: ', err.message);
            }
        }
        loadStats();
    }, []);

    return (
        <section className="container contact" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            I have designed web applications using WebSockets & the MERN stack and I will be happy to collaborate with you in the future endeavours.
                        </p>
                        <div className="contact-info">
                            {Object.entries(statisticsList).map(([key, val]) => (
                                key !== '_id' && (<div key={key} className="contact-item">
                                    <Icons icon={key} />
                                    <span>{key}: </span>
                                    <div style={{ width: '100%' }}></div>
                                    <p style={{ textAlign: 'right' }}>{val}</p>
                                </div>)
                            ))}
                        </div>
                        {statisticsList.length > 0 && (<Links />)}
                    </div>
                    <div className="right-contact">
                        {res && <>{res}</>}
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-control i-c-2">
                                <input onChange={(e) => handleChange(e)} value={formData.name} type="text" name="name" required placeholder="YOUR NAME" />
                                <input onChange={(e) => handleChange(e)} value={formData.email} type="email" name="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input onChange={(e) => handleChange(e)} value={formData.subject} type="text" name="subject" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea onChange={(e) => handleChange(e)} value={formData.message} name="message" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="btn-con main-btn">
                                <button type='submit' className="btn-text" style={{
                                    border: 'none', backgroundColor: 'transparent', height: '45px', width: '100%',
                                    fontWeight: 'inherit',
                                    fontSize: 'inherit',
                                    fontFamily: 'inherit',
                                    color: '#FFFFFF'
                                }}>Submit</button>
                            </div>
                        </form>
                        <div style={{ height: '10px' }}></div>
                        <Download />
                    </div>
                </div>
            </div>
        </section >
    )
}
