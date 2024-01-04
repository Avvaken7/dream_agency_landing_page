import PropTypes from 'prop-types';
import styles from './container.module.scss';

const ContainerFluid = ({ children }) => {
    return (
        <div className={styles.containerFluid}>{children}</div>
    );
};

ContainerFluid.propTypes = {
    children: PropTypes.node
};


export default ContainerFluid;