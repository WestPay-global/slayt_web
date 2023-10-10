import Image from 'next/image'
import styles from './page.module.scss'
import hero from '@/general/assets/hero.png'
import family from '@/general/assets/aNigerianFam.png'
import one from '@/general/assets/1.png'
import two from '@/general/assets/2.png'
import three from '@/general/assets/3.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landing}>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h2>Empowering Families, One Task at a Time!</h2>
            <p>The Best App To Improve Your Children&apos;s Productivity. The app that brings families closer through tasks and rewards.</p>
            <div className={styles.links}>
              <Link href="/" tabIndex={0}>
                <Image className={styles.apple} src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="apple" width={150} height={70} />
              </Link>
              <Link href="/" tabIndex={0}>
                <Image className={styles.google} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="google" width={150} height={70} />
              </Link>
            </div>
          </div>
          <Image src={hero} alt='hero' className={styles.heroImg} width={390} height={909} />
        </div>
      </div>
      <div className={styles.discover}>
        <Image src={family} alt='family' width={500} height={500} />
        <p>
          Introducing SLAYT, a cutting-edge mobile application that simplifies the task of assigning household chores to children,
          all while inspiring them to complete their responsibilities. This user-friendly app not only enables parents to instill
          a sense of responsibility in their kids but also allows them to reward their efforts. It transforms the chore routine
          into a fun and engaging experience for the entire family
        </p>
      </div>
      <div className={styles.about} id='about'>
        <h2>About SLAYT</h2>
        <p>
          Discover SLAYT, an intuitive and engaging mobile app meticulously crafted to enhance the parent-child relationship while imparting
          valuable life lessons such as responsibility, time management, and the importance of diligence. SLAYT simplifies the process of task
          delegation, allowing parents to seamlessly assign duties to their children and provide incentives as a means of encouragement. This
          innovative app transforms mundane household chores into an enjoyable and collaborative family experience
        </p>
      </div>
      <div className={styles.features} id='features'>
        <h2>Key Features</h2>
        <div className={styles.feature}>
          <div className={styles.text}>
            <h3>Task Assignment</h3>
            <p>
              Parents can easily create and assign tasks to their children through the app. Tasks can be customized with descriptions,
              deadlines, and priority levels.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={one} alt='one' width={300} height={300} />
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.text}>
            <h3>Reward System</h3>
            <p>
              SLAYT offers a built-in reward system to motivate children. Parents can set rewards such as extra playtime, special treats,
              or even monetary incentives for completing tasks successfully.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={two} alt='two' width={300} height={300} />
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.text}>
            <h3>Task Progress Tracking</h3>
            <p>
              Parents can monitor the progress of their children&apos;s tasks in real-time. They can see when a task is started, when it&apos;s
              completed, and receive notifications for any updates.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={three} alt='three' width={300} height={300} />
          </div>
        </div>
      </div>
    </main>
  )
}
