import styles from './styles/BlogView.module.css'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx';
import path from 'path'
import getConfig from 'next/config'

export default function BlogView({ blogItem, lan }) {
    const fixedBlogContent = blogItem.long[lan].replace("](img/", "](../img/")
    const backButton = {fi: "Takaisin", en: "Back"}
  return (
      <div className={styles.container} >
          <Link href='/blogi'><a>{backButton[lan]}</a></Link>
          <h1>{blogItem.title[lan]}</h1>
          <Markdown>{fixedBlogContent}</Markdown>
          <div className={styles.team}>
            <h2>Mukana tekemässä</h2>
            {blogItem.email.map((value,key) => (
                <p key={key}>{value.name}</p>
            ))}
          </div>
      </div>
  )
}
