import teamstyles from './styles/Tiimi.module.css'
import Link from 'next/link'
import FullWidthTextModule from './general_components/FullWidthTextModule'

export default function TeamList({ items, lan }) {
  
  function filter(unfilteredList) {
    const filteredList = []
    for(let i = 0; i < unfilteredList.length; i++) {
      const visible = ( unfilteredList[i].visibility === 'visible')
      if(visible){
        filteredList.push(unfilteredList[i])
      }
    }
    return filteredList
  }

  const filteredItems = filter(items)
  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  
  const introText = {
    fi: "Klikkaa kopioidaksesi sähköpostiosoite",
    en: "Click email to copy email address"
  }


  return (
      <div className={teamstyles.container} >
        <FullWidthTextModule
          lan={lan}
          text={introText}

        />
          {
          // map begins
          filteredItems.map((item, k) => (
            <div className={teamstyles.personBox} key={k}>
              <div className={teamstyles.imgWrapper}>
                <div
                  className={teamstyles.bgimg} 
                  style={{
                      backgroundImage: "url("+item.profileIMG+")",
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: "cover",
                  }}
                >
                </div>
              </div>
              <div className={teamstyles.description}>
                <h3>{item.name}</h3>
                <h4>{item.role[lan]}</h4>
                <p>{item.description[lan]}</p>
                <div className={teamstyles.contact}>
                  <a href={"tel:"+item.phone}>{item.phone}</a>
                  <a onClick={() => copyToClipboard(item.email)}>{item.email}</a>
                </div>
              </div>
            </div>
          ))
          // map ends
          }
      </div>
  )
}

/* RIPYARD
<div className={styles.skillset}>
                  {item.skills.map((val, key) => (
                    <a className={styles.skillBox}>{val[lan]}</a>
                  ))}
                </div>


*/