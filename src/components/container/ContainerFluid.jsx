import PropTypes from 'prop-types';
import styles from './container.module.scss';

const ContainerFluid = ({ children, className }) => {
    return (
        <div className={`${styles.containerFluid} ${className}`}>
            {children}
        </div>
    );
};

ContainerFluid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};


export default ContainerFluid;