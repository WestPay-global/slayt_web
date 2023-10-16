import Link from "next/link";
import styles from './styles/header.module.scss'
import logo from '@/general/assets/Logo.png'
import Image from "next/image";

interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo} />

            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='#features'>Features</Link></li>
                    <li><Link href='#about'>About Us</Link></li>
                </ul>
            </nav>
            <Link href='#contact' className={styles.contact}>Contact Us</Link>
        </header>
    );
}

export default Header;