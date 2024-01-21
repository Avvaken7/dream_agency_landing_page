import NavbarLink from './navbarLink/NavbarLink';
import NavbarLogo from './navbarLogo/NavbarLogo';
import NavbarSocialLink from './navbarSocialLink/NavbarSocialLink';

import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavbarLink />
            <NavbarLogo />
            <NavbarSocialLink />
        </div >

    );
};

export default Navbar;