import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
const collRef = collection(db, 'projects');

export default function Projects() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await getDocs(collRef);
                const projects = data.docs.map(d => d = ({ _id: d.id, ...d.data() }));
                setProjectList(projects);
            }
            catch (err) {
                console.error('Error: ', err.message);
            }
        }
        loadProjects();
    }, []);

    return (
        <section className="container" id="portfolio">
            <div className="main-title">
                <h2>My <span>Projects</span><span className="bg-text">My Work</span></h2>
            </div>
            {projectList.length > 0 ? (<>
                <p className="port-text">
                    Here is some of my work that I've done in AI & web development
                </p>
                <div className="portfolios">
                    {projectList.map((project) => (<div key={project._id} className="portfolio-item">
                        <div className="image">
                            <img src={project.imageURL} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>{project.title}</h3>
                            <div className="icons">
                                {project.gitHubLink && <a href={project.gitHubLink} target='_blank' rel="noreferrer" className="icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>}
                                {project.hostedLink && <a href={project.hostedLink} target='_blank' rel="noreferrer" className="icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>}
                            </div>
                        </div>
                    </div>))}
                </div>
            </>) : (<>
                <div>Working on it</div>
            </>)
            }
        </section >
    )
}
