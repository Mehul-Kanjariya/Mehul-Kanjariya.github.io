import styles from './Projects.module.css';
import htmlorbitz from '../../images/htmlorbitz.png';
import asos from '../../images/asos.png';
import orbitz from '../../images/orbitz.png'

export function Projects() {
    return (
        <div className={styles.container} id="#projects">
            <h1 className={styles.heading}>PROJECTS</h1>

            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={asos} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>ASOS</h2>
                        <p className={styles.descriptionStyles}>ASOS is a JS application designed to provide customers with a personalized easy-to-utilize user experience for purchasing modern trending clothes.</p>
                        <p className={styles.digitech}>Tech Stack : HTML | JavaScript | CSS | Git & GitHub</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://meek-alfajores-0c8db8.netlify.app/index.html") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/Mehul-Kanjariya/windy-picture-8509") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i class="devicon-html5-plain-wordmark colored technology"></i></div>
                                <div><i class="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i class="devicon-javascript-plain colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={orbitz} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>ORBITZ</h2>
                        <p>A React-based application to cater to the needs of customers who are
                            traveling from one point to another and need a stay.</p>
                        <p className={styles.digitech}>Tech Stack : React.js | Chakra ui | Git & GitHub</p>                        
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://couchsurfing-mehulktik-gmailcom.vercel.app/#") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/Mehul-Kanjariya/nippy-smoke-6902") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" width="30" height="30"/></div>
                            <div>
                                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="react" width="30" height="30" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className={styles.projectBox} >
                    <div className={styles.projectImg}>
                        <img src={htmlorbitz} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>ORBITZ</h2>
                        <p>This website is a static clone of orbitz made with html, css and javascript Orbitz is a provider of hotel, flights, and cab booking services.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://stunning-souffle-eb525e.netlify.app/") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/Mehul-Kanjariya/deeply-oven-5153") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                                <div><i className="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-html5-plain-wordmark colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}