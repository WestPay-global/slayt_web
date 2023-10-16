import Image, { StaticImageData } from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import FreeTrial from '@/general/components/freeTrial'
import img1 from '@/general/assets/Rectangle491.png'
import img2 from '@/general/assets/Frame1000002795.png'
import img3 from '@/general/assets/IphoneMockup.png'
import AppLinks from '@/general/components/appLinks'
import img4 from '@/general/assets/Rectangle497.png'
import img5 from '@/general/assets/Rectangle495.png'
import img6 from '@/general/assets/Rectangle497(1).png'
import img7 from '@/general/assets/OBJECTS.png'
import img8 from '@/general/assets/10840252_44657151.png'
import img9 from '@/general/assets/4725499_450601.png'
import img10 from '@/general/assets/family_svgrepo.com.png'
import img11 from '@/general/assets/privacy-tips_svgrepo.com.png'
import img12 from '@/general/assets/growth-report-graph_svgrepo.com.png'
import img13 from '@/general/assets/reward_svgrepo.com.png'
import FAQs from '@/general/components/faq'
import SlideShow from '@/general/components/slideshow'

type DetailsType = {
  picture: StaticImageData
  title: string
  body: string
}

export type FaqsType = {
  question: string
  answer: string
  isList: boolean
  items?: string[]
}

export default function Home() {

  const imgArr = [img5, img6, img4]

  const learn: DetailsType[] = [
    {
      picture: img7,
      title: 'Task Management',
      body: 'Effortlessly create and allocate tasks to your children using our app. Customize tasks with detailed descriptions, set deadlines, and assign priority levels.'
    },
    {
      picture: img8,
      title: 'Real-time Task Monitoring',
      body: "Stay in the loop with your children's task progress in real-time. Keep track of task initiation, completion, and receive timely notifications for any updates"
    },
    {
      picture: img9,
      title: 'Reward Mechanism',
      body: 'FamilyTask+ includes an integrated reward system to inspire and incenpotivize your children. Set up rewards like additional playtime, special treats, or even financial incentives for successful task completion.'
    },
  ]

  const why: DetailsType[] = [
    {
      picture: img10,
      title: 'Family Bonding',
      body: 'Make chore time a fun, family activity. SLAYT transforms routine tasks into engaging adventures, promoting togetherness and teamwork among family members.'
    },
    {
      picture: img11,
      title: 'Data Protection',
      body: 'SLAYT places a strong emphasis on data privacy with strict encryption, minimal data collection, user control, no third-party sharing, and regular security audits to ensure the safety and confidentiality of user information.'
    },
    {
      picture: img12,
      title: 'Responsibility Building',
      body: ' SLAYT inspires kids to take on responsibilities willingly. With its gamified approach and reward system, children are motivated to complete tasks and learn valuable life skills.'
    },
    {
      picture: img13,
      title: 'Rewarding Achievements',
      body: "With SLAYT, you can easily reward your children's efforts. Recognize and celebrate their achievements, reinforcing positive behavior and fostering a sense of accomplishment."
    },
  ]

  const faqs: FaqsType[] = [
    {
      question: 'What is SLAYT?',
      answer: 'SLAYT is a cutting-edge mobile application that simplifies the task of assigning household task to children, all while inspiring them to complete their responsibilities. This user-friendly app not only enables parents to instill a sense of responsibility in their kids but also allows them to reward their efforts. It transforms the chore routine into a fun and engaging experience for the entire family.',
      isList: false
    },
    {
      question: 'How do I get started with SLAYT?',
      answer: "To get started with SLAYT, follow these steps:",
      items: [
        'Download the SLAYT app from  the App Store (for iOS) or Google Play Store (for Android).',
        'Create a parent account by following the on-screen instructions.',
        'Set up profiles for your children, adding their names and ages.',
        'Start assigning task and rewards to your kids to get the family engaged in the chore routine.'
      ],
      isList: true
    },
    {
      question: 'How do I add my children to the app?',
      answer: "To add your children to SLAYT, go to your parent account settings, then select ward management and follow the prompts to create profiles for your kids. You'll need to provide their names and ages.",
      isList: false
    },
    {
      question: 'How can I assign task to my kids using SLAYT?',
      answer: 'Assigning task is easy:',
      items: [
        'Select the child you want to assign a task to.',
        'Choose from a list of available tasks or create custom tasks.',
        'Set due dates and rewards for each chore.',
        'Confirm the chore assignment. '
      ],
      isList: true
    },
    {
      question: 'What rewards and incentives can I offer through SLAYT?',
      answer: 'You can offer rewards like extra playtime, small treats, or other incentives to motivate your kids. Specify the rewards when assigning task, and kids can earn them by completing tasks.',
      isList: false
    },
    {
      question: 'Is SLAYT a free app, or are there in-app purchases?',
      answer: "SLAYT is available as a free app with optional in-app purchases for premium features or additional rewards. You can choose to use the free version or upgrade as needed. \nPremium feature will enable you create unlimited number kids, tasks and other cool features.",
      isList: false
    },
  ]

  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h1>Transform Chores into Adventures</h1>
          <p>Discover SLAYT: The App That Makes Household Responsibilities Fun and Rewarding for the Whole Family</p>
          <FreeTrial backgroundColor='#FFF' />
        </div>
        <div className={styles.fade}></div>
      </div>
      <div className={styles.help} id='about'>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2>Help Children Grow Responsibly</h2>
            <p>
              Fostering Responsible Growth: Empowering Tomorrow&apos;s Leaders Today. Our mission is to guide children in
              developing a strong sense of responsibility, setting the foundation for future success. SLAYT is not just an app;
              it&apos;s a tool for nurturing young minds and encouraging them to grow into responsible, capable individuals.
            </p>
            <Link href='#'>Get Started</Link>
            <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.9357 83.2928C19.9535 81.6883 0.869007 52.1328 13.5357 31.0006C19.4468 20.6561 31.6701 14.5339 43.5135 15.1672C55.9057 16.9195 65.1734 28.0661 66.3134 40.1839C67.1157 52.0061 58.9035 65.4961 46.2157 65.855C39.249 65.9395 31.7123 60.9361 28.5457 54.9406C23.7746 46.9184 26.2868 35.455 35.259 32.0772C41.9301 29.5017 50.8812 33.9984 52.6546 41.1128C54.639 48.4384 44.8857 54.1384 39.2279 50.0639C32.9368 43.245 43.2812 37.8195 49.1079 42.4006C48.0101 35.7506 38.1512 31.9083 33.3801 37.3339C22.0435 48.7128 40.0935 69.6128 53.5623 60.0072C62.0068 54.1383 64.9623 41.4717 60.5712 32.7106C56.4334 23.6961 47.8623 17.0672 37.9612 18.7772C23.6901 20.6772 11.9101 33.1328 13.2612 48.0583C14.8868 66.2139 33.9923 84.7495 52.9923 78.8595C62.2601 76.2839 69.459 69.7183 74.2934 62.1395C81.9568 47.1717 84.2157 29.7972 79.149 13.7528C78.8323 12.8028 79.529 11.895 80.4368 11.6628C81.3657 11.4517 82.4212 11.895 82.7379 12.845C87.7412 28.6784 85.9045 45.0606 79.3601 60.1339C74.019 72.9272 57.869 84.4328 43.9779 83.2928H43.9357ZM46.1946 47.4039C46.7223 47.1084 47.039 46.9395 47.6935 46.3484C47.5457 46.095 47.4823 45.8206 47.5034 45.5461C45.9201 43.7517 42.289 43.1606 41.0434 45.5039C40.8746 46.2639 41.1912 46.9395 41.8034 47.615C42.9434 48.4595 45.3501 47.6572 46.1946 47.4039Z" fill="#00A3FF" />
            </svg>

          </div>
          <div className={styles.right}>
            <div>
              <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1286 11.6815L8.22266 20.6135C21.8911 25.6026 28.6727 28.6245 37.5884 36.1589C29.6274 27.0849 25.4405 21.8803 20.1286 11.6815Z" stroke="#00A3FF" strokeWidth="1.50772" />
                <path d="M5.56504 33.1608L1.8252 45.4653C15.6083 41.4357 22.7871 39.7985 34.4422 40.0051C22.5744 38.2665 16.0637 37.0658 5.56504 33.1608Z" stroke="#00A3FF" strokeWidth="1.50772" />
                <path d="M43.6853 3.88823L30.9722 2.17285C37.1622 15.1628 39.932 22.003 41.6096 33.5705C41.4054 21.5452 41.5365 14.9082 43.6853 3.88823Z" stroke="#00A3FF" strokeWidth="1.50772" />
              </svg>
              <Image src={img1} alt='img1' className={styles.img1} />
              <Image src={img2} alt='img2' className={styles.img2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.try}>
        <div className={styles.container}>
          <Image src={img3} alt='iphoneMockUp' />
          <div>
            <h2>TRY SLAYT NOW <span>GET THE APP!</span></h2>
            <section className={styles.trialSection}>
              <FreeTrial backgroundColor='#E5F6FF' />
            </section>
            <AppLinks iconFill="#212121" padding='1rem' fontSize='1rem' />
          </div>
        </div>
      </div>
      <div className={styles.excite}>
        <div className={styles.container}>
          <h2><span>EXCITE YOUR KIDS</span> BY GETTING THEM ON SLAYT</h2>
          <p>Turn Chores into Adventures: Ignite Excitement with SLAYT&apos;s Interactive Approach!</p>
          <SlideShow images={imgArr} />
        </div>
      </div>
      <div className={styles.learn} id='features'>
        <div className={styles.container}>
          <h2>LEARN MORE ABOUT <span>SLAYT</span></h2>
          <div className={styles.items}>
            {learn.map((item, index) => (
              <div key={index}>
                <Image src={item.picture} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.why}>
        <div className={styles.container}>
          <h2>WHY USE SLAYT?</h2>
          <div className={styles.items}>
            {why.map((item, index) => (
              <div className={styles.item} key={index}>
                <Image src={item.picture} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.start}>
        <div className={styles.container}>
          <h2>START YOUR FREE TRIAL <span>TODAY</span></h2>
          <section className={styles.trialSection}>
            <FreeTrial backgroundColor='#E5F6FF' />
          </section>
          <AppLinks iconFill="#212121" padding='1rem' fontSize='1rem' />
        </div>
      </div>
      <FAQs faqs={faqs} />
    </main>
  )
}
