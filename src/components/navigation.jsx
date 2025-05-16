import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'
import styles from './navigation.module.css'

export default function Navigation() {
    
const changedStyles = ({ isActive }) => {
    return clsx(styles.defaultStyles, isActive && styles.navigationStyles )
}

    return (
        <div>
            <nav className={styles.navWrapper}>
                <NavLink className={changedStyles}
                    to='/'>Home page</NavLink>
                <NavLink className={changedStyles}
                    to='/moviesPage'>Movies page</NavLink>
        </nav>
        </div>
    )
};
