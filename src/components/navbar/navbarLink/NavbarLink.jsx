import styles from './navbarLink.module.scss';

const NavbarLink = () => {

    const links = ['home', 'about us', 'services', 'contact us'];

    return (
        <>
            <nav>
                <ul className={styles.list}>
                    {
                        links.map((item) => (
                            <li key={item} className={styles.listItem}>
                                <a href="#" className={styles.listItemLink}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default NavbarLink;