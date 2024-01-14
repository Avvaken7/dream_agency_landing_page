import PropTypes from 'prop-types';
import styles from './navbarLogo.module.scss';

const NavbarLogo = ({ className }) => {
    return (
        <>
            <span className={`${styles.logo} ${className}`}>dream agency</span>
        </>
    );
};

NavbarLogo.propTypes = {
    className: PropTypes.string,
}

export default NavbarLogo;