import styles from './icons.module.scss';

const Facebook = () => {
    return (
        <>
            <a href="/" className={`${styles.link} ${styles.facebook}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 11 21" fill="none" className={styles.icon}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.62817 20.8071V11.8071H10.3606L10.8069 7.80713H7.62817V5.85889C7.62817 4.82889 7.65449 3.80713 9.09378 3.80713H10.5516V0.947266C10.5516 0.904266 9.29937 0.807129 8.03256 0.807129C5.38688 0.807129 3.73029 2.46432 3.73029 5.50732V7.80713H0.806885V11.8071H3.73029V20.8071H7.62817Z" fill="#331B3B" />
                </svg>
            </a>
        </>
    );
};

export default Facebook;