import styles from './Footer.module.css';

export function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.container} id="#contact">
            <div className={styles.gotoTopBtn} onClick={handleScrollTop}><i className="fas fa-angle-up"></i></div>
            <div className={styles.flex}>
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
                    <span><i className="fas fa-envelope"></i></span>
                    <p>mehulktik@gmail.com</p>
                </div>
                <div>
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <p>+91 7982327724</p>
                </div>
            </div>
        </div>
    );
}