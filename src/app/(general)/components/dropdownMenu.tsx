'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from "next/link";
import styles from './styles/header.module.scss';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import logo from '@/general/assets/Logo.png'

interface DropdownMenuComponentProps {
    routes: RoutesType[]
}

type RoutesType = {
    title: string
    link: string
}

const DropdownMenuComponent: React.FunctionComponent<DropdownMenuComponentProps> = ({ routes }) => {

    return (
        <div className={styles.dropdown}>
            <DropdownMenu.Root >
                <DropdownMenu.Trigger asChild>
                    <button className={styles.hamburger}>
                        <HamburgerMenuIcon className={styles.Icon} />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className={styles.menu}>
                    <DropdownMenu.Group className={styles.heading}>
                        <DropdownMenu.Item asChild >
                            <Image src={logo} alt="logo" className={styles.logo} />
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                            <Cross1Icon className={styles.Icon} />
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>

                    <DropdownMenu.Group className={styles.DropdownGroup}>
                        {routes.map((item, index) => (
                            <DropdownMenu.Item asChild key={index}>
                                <Link href={item.link}>{item.title}</Link>
                            </DropdownMenu.Item>
                        ))}
                        <DropdownMenu.Item asChild>
                            <Link href='#contact'>Contact Us</Link>
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
}

export default DropdownMenuComponent;