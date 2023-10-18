import Link from "next/link";
import styles from './styles/header.module.scss'
import logo from '@/general/assets/Logo.png'
import Image from "next/image";
import DropdownMenuComponent from "./dropdownMenu";

interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {

    const routes = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Features',
            link: '#features'
        },
        {
            title: 'About Us',
            link: '#about'
        },
    ]

    return (
        <header className={styles.header}>
            <Image src={logo} alt="logo" className={styles.logo} />

            <nav>
                <ul>
                    {routes.map((item, index) => (
                        <li key={index}><Link href={item.link}>{item.title}</Link></li>
                    ))}
                </ul>
            </nav>
            <Link href='#contact' className={styles.contact}>Contact Us</Link>

            <DropdownMenuComponent routes={routes} />
        </header>
    );
}

export default Header;