import NavbarLink from './navbarLink/NavbarLink';
import NavbarLogo from './navbarLogo/NavbarLogo';
import NavbarSocialLink from './navbarSocialLink/NavbarSocialLink';

import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <header>
            <div className={styles.navbar}>
                <NavbarLink />
                <NavbarLogo />
                <NavbarSocialLink />
            </div>
        </header>
    );
};

export default Navbar;