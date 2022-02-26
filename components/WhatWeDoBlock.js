import styles from './styles/WhatWeDo.module.css'

export default function WhatWeDoBlock() {
    const skillist = [
        {
            title: {
                fi: 'Vaikutusten arviointi',
                en: 'asia 2'
            },
            description: {
                fi: 'Palvelumme kattavat monipuolisesti eri vaikutuslajit ja niiden mallinnusmenetelmät. Tarvittaessa kehitämme olemassa olevan teoriapohjan perusteella uusia menetelmiä vastataksemme asiakkaidemme vaativimpiinkin kysymyksiin.',
                en: 'asgfasg 2 asafg'
            }
        },
        {
            title: {
                fi: 'Strategiat',
                en: 'asia 2'
            },
            description: {
                fi: 'Tuotamme tarvittavat tiedot päätöksenteon tueksi ja suunnitelmat strategioiden toteutuksiin. Palveluvalikoimaamme sisältyvät nykytila-analyysit, tulevaisuuskuvatyöt, toimenpiteiden suunnittelu ja toimeenpanon tuki.',
                en: 'asgfasg 2 asafg'
            }
        }
        ,{
            title: {
                fi: 'Riskienhallinta',
                en: 'asia 2'
            },
            description: {
                fi: 'Riskienhallintaosaamisemme kattaa rakennushankkeen riskien arvioinnin ja kyberturvallisuuden. Kehitämme kustomoidut tilannekuvapalvelut riskien hallinnan tueksi.',
                en: 'asgfasg 2 asafg'
            }
        }
    ]
  return (
    <div className={`${styles.skills} powder`}>
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
