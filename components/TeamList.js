import teamstyles from './styles/Tiimi.module.css'
import Link from 'next/link'
import FullWidthTextModule from './general_components/FullWidthTextModule'
import { useEffect, useState } from 'react';

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
  

  return (
      <div className={teamstyles.container} >
          {
          // map begins
          filteredItems.map((item, k) => (
            <TeamItem item={item} lan={lan} key={k}/>
          ))
          // map ends
          }
      </div>
  )
}

function TeamItem({ item, lan }) {

  const [showPhone, setShowPhone] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  const phoneText = {en: 'Show phone', fi: 'Näytä puhelin'}
  const emailText = {en: 'Show email', fi: 'Näytä sähköposti'}

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  return(
    <div className={teamstyles.personBox}>
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
          { !showPhone ?
            <a onClick={() => setShowPhone(!showPhone)}>{phoneText[lan]}</a>
            :
            <a onClick={() => setShowPhone(!showPhone)}>{item.phone}</a>
          }
          {
            !showEmail ?
            <a onClick={() => {setShowEmail(!showEmail)}}>{emailText[lan]}</a>
            :
            <a onClick={() => {copyToClipboard(item.email)}}>{item.email}</a>
          }
        </div>
      </div>
    </div>
  )
}