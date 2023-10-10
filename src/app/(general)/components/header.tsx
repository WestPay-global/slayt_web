import Link from "next/link";
import styles from './styles/header.module.scss'

interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            <h1>Slayt</h1>

            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='#about'>About</Link></li>
                    <li><Link href='#features'>Features</Link></li>
                    <li><Link href='#contact'>Contact</Link></li>
                </ul>
            </nav>
            <Link href='/' className={styles.try}><span>Try for free</span></Link>
        </header>
    );
}

export default Header;