import styles from './styles/SkillPageContent.module.css'
import { attributes} from '../content/competences_refs.md';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function RefProjectBox({ item, lan }) {
  console.log(item.skillIMG)
  return (
      <div>
        <img src={item.skillIMG.replace('img/', '../img/')} style={{width: "300px"}}></img>
        <h3>{item.title[lan]}</h3>
        <h4>{item.short[lan]}</h4>
        <h4>{item.customer[lan]}</h4>
      </div>

  )
}