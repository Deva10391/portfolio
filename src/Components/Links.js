import React from 'react'

export default function Links() {

    const links = {
        "fab fa-github": "https://www.github.com/Deva10391",
        "fab fa-instagram": "https://www.instagram.com/Deva40211",
        "fab fa-whatsapp": "https://wa.me/9489604161",
    }

    return (
        <div className="contact-icons">
            {Object.entries(links).map(([key, val]) => (
                <div key={key} className="contact-icon">
                    <a href={val} target="_blank">
                        <i className={key}></i>
                    </a>
                </div>
            ))}
        </div>
    )
}
