import PropTypes from 'prop-types';
import styles from './navbarLogo.module.scss';

const NavbarLogo = ({ className }) => {
    return (
        <>
            <a href='/' className={`${styles.logo} ${className}`}>dream agency</a>
        </>
    );
};

NavbarLogo.propTypes = {
    className: PropTypes.string,
}

export default NavbarLogo;