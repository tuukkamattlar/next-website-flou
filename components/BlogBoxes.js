import blogBoxes from './styles/BlogBox.module.css'
import BlogBox from './BlogBox';
import { attributes as blogs } from '../content/blogs.md';

export default function BlogBoxes({ items = blogs.blogs, lan, maxLen = -1 }) {
  //const [years, setYears] = useState([])
  if(maxLen > 0){
    items = items.slice(0, maxLen)
  }
  
  return (
      <div className={blogBoxes.container}>
          {items.map((item, key) => (
            <BlogBox item={item} lan={lan} key={key}/>
          ))}
      </div>
  )
}
