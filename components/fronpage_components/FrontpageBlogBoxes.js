import blogBoxes from './styles/FrontpageBlogBox.module.css'
import FrontpageBlogBox from './FrontpageBlogBox';
import { attributes as blogs } from '../../content/blogs.md';

export default function FrontpageBlogBoxes({ items = blogs.blogs, lan, maxLen = -1 }) {
  //const [years, setYears] = useState([])
  if(maxLen > 0){
    items = items.slice(0, maxLen)
  }
  
  return (
      <div className={blogBoxes.container}>
          {items.map((item, key) => (
            <>
              <FrontpageBlogBox item={item} lan={lan} key={key}/>
            </>
          ))}
      </div>
  )
}
