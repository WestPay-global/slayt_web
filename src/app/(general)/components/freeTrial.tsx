'use client'

import styles from './styles/freeTrial.module.scss'

interface FreeTrialProps {
    backgroundColor: string
}

const FreeTrial: React.FunctionComponent<FreeTrialProps> = ({ backgroundColor }) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={styles.freeTrial} onSubmit={onSubmit} style={{ backgroundColor }}>
            <input type="email" name="email" id="" placeholder='Enter your Email Address' />
            <button type="submit">Start Free Trial</button>
        </form>
    );
}

export default FreeTrial;