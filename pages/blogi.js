import { attributes } from '../content/blogs.md';
import GeneralHeader from '@components/GeneralHeader';
import BlogBox from '@components/BlogBox';
import styles from '@components/styles/BlogBox.module.css';

export default function Blogi({ lan }) {
  let { title, description, headerIMG, blogs } = attributes;
  return (
    <div className="powder">
      <GeneralHeader title={attributes.title} img={attributes.headerIMG} lan={lan} />
      <div className={styles.container}>
        <BlogBox lan={lan} />
      </div>
    </div>
  );
}
