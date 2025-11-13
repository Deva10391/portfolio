import React, { useEffect, useState } from 'react'

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Download from '../Download';
const collRef = collection(db, 'skills');

export default function Skills() {
    const [skillDetails, setSkillDetails] = useState({});

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const data = await getDocs(collRef);
                const skills = data.docs.map(d => d = ({ _id: d.id, ...d.data() }));
                setSkillDetails(skills[0]);
            }
            catch (err) {
                console.error('Error: ', err.message);
            }
        }

        loadSkills();
    }, []);

    return (
        <section className="container about" id="about">
            {console.log(skillDetails)}
            <div className="main-title">
                <h2>My <span>skills</span>
                    <span className="bg-text">professional skillset</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h2>Information About me</h2>
                    <p>
                        {skillDetails && (<>{skillDetails.para}</>)}
                    </p>
                    <Download />
                </div>

                {Object.entries(skillDetails).map(([key, val]) => (
                    key === 'stats' && (
                        <div className="right-about">
                            {Object.entries(val).map(([statKey, statValue]) => (
                                <div key={statKey}>
                                    <div key={key} className="about-item">
                                        <div className="abt-text">
                                            <p className="large-text">{statValue}</p>
                                            <p className="small-text">{statKey}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
            <div className="about-stats">
                <h3 className="stat-title">Skills</h3>
                {Object.entries(skillDetails).map(([category, skills]) => (
                    <div className="progress-bars">
                        {category !== '_id' && category !== 'stats' && category !== 'para' && (
                            <>
                                <div key={category} className="progress-bar">
                                    <p className="prog-title" style={{ textDecoration: 'underline', marginTop: '80px' }}>{category}</p>
                                    <div className="progress-bars" style={{ width: '200%' }}>
                                        {Object.entries(skills).map(([skill, level]) => (
                                            <div key={skill} className="progress-bar">
                                                <p className="prog-title">{skill}</p>
                                                <div className="progress-con">
                                                    <div key={skill} className="progress">
                                                        <p className="prog-text" style={{ marginTop: '10px' }}>{`${level}%`}</p>
                                                        <span style={{ width: `${level}%` }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}

            </div>
        </section>
    )
}
