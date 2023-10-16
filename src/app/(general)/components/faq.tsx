'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { FaqsType } from '@/general/(home)/page';
import styles from './styles/faqs.module.scss'

interface FAQsProps {
    faqs: FaqsType[]
}

const FAQs: React.FunctionComponent<FAQsProps> = ({ faqs }) => {
    return (
        <section className={styles.faqs} id='faqs'>
            <h2>FAQs</h2>
            <Accordion.Root className={styles.AccordionRoot} type="single" collapsible>
                {faqs.map((item, index) => (
                    <Accordion.Item value={`${index}`} key={index} className={styles.AccordionItem}>
                        <Accordion.Header className={styles.AccordionHeader}>
                            <Accordion.Trigger className={styles.AccordionTrigger}>
                                {item.question}
                                <ChevronDownIcon className={styles.AccordionChevron} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className={styles.AccordionContent}>
                            <p>{item.answer}</p>
                            {item.isList &&
                                <ul>
                                    {item.items?.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            }
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    );
}

export default FAQs;