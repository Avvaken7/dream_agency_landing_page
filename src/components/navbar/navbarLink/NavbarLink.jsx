import { useState, useRef, useEffect } from 'react';

import styles from './navbarLink.module.scss';

const NavbarLink = () => {

    const [isActiveMenu, setActiveMenu] = useState(false);
    const ref = useRef('');

    useEffect(() => {
        const handleClick = () => {
            setActiveMenu(!isActiveMenu);
        };

        const handleWindowClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setActiveMenu(false);
            }
        };

        const element = ref.current;

        element.addEventListener('click', handleClick);
        window.addEventListener('click', handleWindowClick);

        if (isActiveMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }


        return () => {
            element.removeEventListener('click', handleClick);
            window.removeEventListener('click', handleWindowClick);
            document.body.style.overflow = 'auto';
        };
    }, [isActiveMenu]);

    const links = ['home', 'about us', 'services', 'contact us'];

    return (
        <>
            <div ref={ref} className={`${styles.menuBtn} ${isActiveMenu ? `${styles.activeMenu}` : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul className={`${styles.list} ${isActiveMenu ? `${styles.activeMenu}` : ""}`}>
                    {
                        links.map((item) => (
                            <li key={item} className={styles.listItem}>
                                <a href="#" className={styles.listItemLink} onClick={() => setActiveMenu(false)}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default NavbarLink;