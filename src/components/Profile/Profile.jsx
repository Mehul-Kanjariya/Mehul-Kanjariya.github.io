import styles from './Profile.module.css';
import profilePic from '../../images/profilePic.jpg';

export const Profile = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1Jl0rrOTxr3cPVZteR_TIWVdVXadnv8HS/view?usp=share_link");
    }

    return (
        <div className={styles.container} id="#about">
            <div className={styles.aboutContainer}>
                <div className={styles.flex}>
                    <div className={styles.leftSection}>
                        <h1>Hi, I'm <span>Kanjariya Mehul Kumar</span></h1>
                        <h3>Full Stack Web Developer</h3>
                        {/* A passionate programmer with a curious mind who loves solving problems. I have an experience of building Web applications with JavaScript / Reactjs / HTML / CSS etc. I'm currently actively looking for new opportunities */}
                        <p>Self-motivated and hardworking Full Stack Developer seeking an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the organization's growth.</p>
                        <div className={styles.contactIcons}>
                            <a href="https://www.linkedin.com/in/mehul-kr-365573137/" rel="noreferrer" target="_blank"><div><i className="fab fa-linkedin-in"></i></div></a>
                            <a href="https://github.com/Mehul-Kanjariya" rel="noreferrer" target="_blank"><div><i className="fab fa-github"></i></div></a>
                            <a href="mailto: mehulktik@gmail.com"><div><i className="fas fa-envelope"></i></div></a>
                        </div>
                        <div className={styles.contactNum}>
                            <div>
                                <span><i class="fas fa-map-marker-alt"></i></span>
                                <p>New Delhi, India</p>
                            </div>
                            <div>
                                <span><i className="fas fa-mobile-alt"></i></span>
                                <p>+91 7982327724</p>
                            </div>
                        </div>
                        <button className={styles.resumeButton} onClick={handleResumeClick}>Resume</button>
                    </div>
                    <div className={styles.rightSection}>
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}