import React from 'react'

export default function Icons({ icon }) {
    const icons = {
        "address": "fas fa-map-marker-alt",
        "email": "fas fa-envelope",
        "phone": "fas fa-phone",
        "education": "fas fa-user-graduate",
    };
    return (
        Object.entries(icons).map(([key, val]) => (
            key === icon && (<div key={key} className="icon">
                <i className={val}></i>
            </div>)
        ))
    )
}