import Footer from './components/footer'
import Header from './components/header'
import styles from './layout.module.scss'

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.generalLayout}>
            <Header />
            <div className={styles.generalChildren}>
                {children}
            </div>
            <Footer />
        </div>
    )
}