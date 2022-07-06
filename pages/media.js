
import GeneralHeader from '@components/GeneralHeader';

// content
import { attributes } from '../content/media.md';

// Styles
import GeneralCSS from '@components/general_components/styles/General.module.css'
import styles from '../components/styles/Media.module.css';

export default function Media({ lan }) {
  let { title, headerIMG, description, items } = attributes;

  let imgSrcColor = [
    {
      code: 'black',
      fi: 'Musta',
      en: 'Black'
    },{
      code: 'plum',
      fi: 'Luumu',
      en: 'Plum'
    },{
      code: 'powder',
      fi: 'Jauhe',
      en: 'Powder'
    },{
      code: 'white',
      fi: 'Valkoinen',
      en: 'White'
    }
  ]
  let imgSrcNaming = [1, 2, 3]
  return (
    <div className='mediaPage'>
      <GeneralHeader title={title} img={headerIMG} lan={lan} description={description} />
      <div className={GeneralCSS.container}>
        <div className={styles.frame}>
          <div className={styles.content}>
            <div className={styles.content}>
              <div className={styles.media}>
                <h2>{{en: 'Download logo', fi: "Lataa logo"}[lan]}</h2>
                {imgSrcNaming.map((indexValue, keyI) => (
                  <div key={keyI} className={styles.row}>
                    <img src={'/img/media/logo-black-'+indexValue+'.svg'} className={styles.rowIMG} />
                    <div className={styles.rowText}>
                    {imgSrcColor.map((colorValue, keyC) => (
                      <a href={'/img/media/logo-'+colorValue.code+"-"+indexValue+".svg"} download="logo_black">
                        {colorValue[lan]}
                      </a>
                    ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
