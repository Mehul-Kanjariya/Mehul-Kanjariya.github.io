import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={styles.container} id="#skills">
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.iconsDiv}>
                <div>
                    <i className="devicon-html5-plain-wordmark colored technology"></i><br />
                    <div>HTML5</div>
                </div>
                <div>
                    <i className="devicon-css3-plain-wordmark colored technology"></i><br />
                    <div>CSS3</div>
                </div>
                <div>
                    <i className="devicon-javascript-plain colored technology"></i><br />
                    <div>JAVASCRIPT</div>
                </div>
                <div>
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="React" width="72" height="71" />
                    <div>React js</div>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="Redux" width="72" height="71" />
                    <div>Redux js</div>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" alt="Chakra" width="72" height="71" />
                    <div>Chakra ui</div>
                </div>
                <div>
                    <i className="devicon-github-original technology"></i><br />
                    <div>GITHUB</div>
                </div>
                <div>
                    <i className="devicon-git-plain-wordmark colored technology"></i><br />
                    <div>GIT</div>
                </div>
            </div>
        </div>
    );
}