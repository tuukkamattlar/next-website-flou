import styles from './styles/SkillPageContent.module.css'
import Link from 'next/link'

export default function SkillPageContent({ item, lan }) {
  console.log(item)
  const refePlaceholder = [
    {
      title: {
        fi: "Yksi projekti",
        en: "One project"
      },
      description: {
        fi: "Yksi projekti tehtiin tänne",
        en: "One project was done"
      },
      customer: {
        fi: "Asiakas",
        en: "Customer"
      }
    },
    {
      title: {
        fi: "Yksi projekti",
        en: "One project"
      },
      description: {
        fi: "Yksi projekti tehtiin tänne",
        en: "One project was done"
      },
      customer: {
        fi: "Asiakas",
        en: "Customer"
      }
    },
  ]
  return (
      <div className={styles.container} >
        <p>{item.long[lan]}</p>
        {refePlaceholder.map((val, key) => (
          <div key={key}>
            <h3>{val.title[lan]}</h3>
            <p>{val.description[lan]}</p>
            <p>{val.customer[lan]}</p>
          </div>
        ))}
      </div>

  )
}