import styles from './styles/WhatWeDo.module.css'

export default function WhatWeDoBlock() {
    const skillist = [
        {
            title: {
                fi: 'Vaikutusten arviointi',
                en: 'asia 2'
            },
            description: {
                fi: 'agagagagagag agaihegoi weg weg',
                en: 'asgfasg 2 asafg'
            }
        },
        {
            title: {
                fi: 'Strategia',
                en: 'asia 2'
            },
            description: {
                fi: 'agagagagagag agaihegoi weg weg',
                en: 'asgfasg 2 asafg'
            }
        }
        ,{
            title: {
                fi: 'Riskienhallinta',
                en: 'asia 2'
            },
            description: {
                fi: 'agagagagagag agaihegoi weg weg',
                en: 'asgfasg 2 asafg'
            }
        }
    ]
  return (
    <div className={styles.skills}>
        {skillist.map((val, i) => (
            <div className={styles.box} key={i}>
                <h3>
                    {val.title.fi}
                </h3>
                <p>
                    {val.description.fi}
                </p>
            </div>
        ))}
    </div>
  )
}
