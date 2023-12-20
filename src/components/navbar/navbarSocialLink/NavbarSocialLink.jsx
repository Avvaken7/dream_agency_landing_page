import Facebook from '../../icons/Facebook';
import Instagram from '../../icons/Instagram';
import LinkedIn from '../../icons/LinkedIn';

import styles from './navbarSocialLink.module.scss';

const NavbarSocialLink = () => {
    return (
        <div className={styles.socialLinksWrap}>
            <Facebook />
            <LinkedIn />
            <Instagram />
        </div>
    );
};

export default NavbarSocialLink;