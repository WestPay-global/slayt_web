import styles from "./page.module.scss";
import backImg from "../assets/privacy.png";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className={styles.privacy}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h1>Our Privacy Policy</h1>
          <p>Effective Date: 20/10/2023</p>
        </div>
        <Image src={backImg} alt="" className={styles.backImg} />
      </div>
      <div className={styles.content}>
        <div className={styles.blue}>
          <h1>Introduction</h1>
          <p>
            Welcome to SLAYT, a mobile application designed to simplify the task
            of assigning household tasks to children and inspire them to
            complete their responsibilities in a fun and engaging way. We are
            committed to respecting your privacy and safeguarding your personal
            information. This Privacy Policy outlines how we collect, use, and
            protect your data when you use the SLAYT application.
          </p>
        </div>
        <div className={styles.green}>
          <h1>Information We Collect</h1>
          <p>
            User Information: When you use SLAYT, we may collect the following
            types of information:
          </p>
          <ul>
            <li>
              Parent Information: We collect information provided by parents
              during the registration process, including names, email addresses,
              phone numbers, and account preferences.
            </li>
            <li>
              Child Information: Parents can create profiles for their children
              within the application, including their names and ages. We do not
              collect information from children without parental consent.
            </li>
            <li>
              Task and Reward Data: We collect information about tasks assigned
              by parents, tasks completed by children, and the rewards earned
              within the app.
            </li>
            <li>
              Device Information: We may collect device-specific information
              such as device type, operating system, unique device identifiers,
              and mobile network information.
            </li>
            <li>
              Log Data: Our servers automatically collect log information when
              you use SLAYT, including your IP address, access times, app
              features used, and any system activity.
            </li>
          </ul>
        </div>
        <div className={styles.blue}>
          <h1>How We Use Your Information</h1>
          <p>We use your information for the following purposes</p>
          <ul>
            <li>
              Task Management: To facilitate the assignment, tracking, and
              management of household tasks and rewards within the SLAYT
              application.
            </li>
            <li>
              User Authentication: To verify your identity and protect your
              account from unauthorized access.
            </li>
            <li>
              Communication: To send important notifications, updates, and
              information related to SLAYT, including announcements, reminders,
              and alerts.
            </li>
            <li>
              Customer Support: To provide assistance, address inquiries, and
              resolve issues related to your use of the application.
            </li>
            <li>
              Application Improvement: To analyze usage patterns, gather
              feedback, and make enhancements to the SLAYT app.
            </li>
          </ul>
        </div>
        <div className={styles.green}>
          <h1>Data Security</h1>
          <p>
            We prioritize the security of your data. We employ industry-standard
            security measures, including encryption and access controls, to
            protect your personal information and prevent unauthorized access,
            disclosure, alteration, or destruction of data.
          </p>
        </div>
        <div className={styles.blue}>
          <h1>Data Sharing</h1>
          <p>
            We do not share your personal information with third parties, except
            under the following circumstances:
          </p>
          <ul>
            <li>
              With Your Consent: We may share your information with third
              parties if you explicitly consent to such sharing.
            </li>
            <li>
              Legal Obligations: We may disclose information to comply with
              legal obligations, including responding to subpoenas, court
              orders, or other legal processes.
            </li>
            <li>
              Business Transitions: In the event of a merger, acquisition, or
              sale of all or a portion of our assets, your information may be
              transferred as part of the transaction. We will notify you of such
              transitions and any changes to the handling of your data.
            </li>
          </ul>
        </div>
        <div className={styles.green}>
          <h1>Your Choices and Rights</h1>
          <p>
            You have the following choices and rights with respect to your data:
          </p>
          <ul>
            <li>
              Access and Correction: You can access and correct your personal
              information by accessing your account settings within the app.
            </li>
            <li>
              Account Deletion: You can request the deletion of your account and
              the associated data by contacting our support team via email{" "}
              <Link href={"#"}>support@slayt.co</Link>
            </li>
          </ul>
        </div>
        <div className={styles.blue}>
          <h1>Children&apos;s Privacy</h1>
          <p>
            SLAYT is intended for use by parents and their children with
            parental consent. We do not knowingly collect personal information
            from children without parental authorization. Parents have control
            over the information provided for their children within the app.
          </p>
        </div>
        <div className={styles.green}>
          <h1>Updates to this Privacy Policy</h1>
          <p>
            We may update this Privacy Policy to reflect changes in our data
            practices or legal requirements. We will notify you of any material
            changes through the SLAYT app or via email.
          </p>
        </div>
        <div className={styles.blue}>
          <h1>Contact Us</h1>
          <p>
            If you have questions or concerns regarding this Privacy Policy or
            our data practices, please contact us at
            <Link href={"#"}>info@slayt.co</Link>
          </p>
        </div>
        <div className={styles.green}>
          <h1>Consent</h1>
          <p>
            By using SLAYT, you consent to the collection, use, and sharing of
            your data as described in this Privacy Policy.
          </p>
        </div>

        <button className={styles.button}>Proceed</button>
      </div>
    </main>
  );
}
