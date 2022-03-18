import styles from '../components/styles/FlouPage.module.css';

import { attributes } from '../content/competences.md';
import GeneralHeader from '@components/GeneralHeader';

export default function Jobs({ lan }) {
  let { title, headerIMG, description, items } = attributes;
  return (
    <div className="powder">
      <GeneralHeader title={title} img={headerIMG} lan={lan} description={description} />
      <div className={styles.container}>
          <p>
            Etsimme jatkuvasti innokkaita tekijöitä monipuoliseen tiimiimme aina uraansa
            aloittelevista opiskelijoista kokeneimpiin asiantuntijoihin...
          </p>
          <h2>Avoimet työpaikat</h2>
          <h3>Assistentiksi FLOUhun</h3>
          <p>
            Etsimme nyt yrityksemme ensimmäistä assistenttia vahvistamaan 10-henkistä tiimiämme,
            helpottamaan toimiston arkea ja kasvamaan kanssamme. Assistenttina työhösi kuuluu
            konsulttitoiminnan monipuolisia tukitehtäviä, kuten laadunhallintaan liittyviä tehtäviä,
            laskutusta, arkistointia; tarjousvalmistelua, sosiaalisen median hallintaa ja toimiston
            juoksevia tehtäviä. Koulutamme sinut tehtävään. Tarjoamme sinulle
            kehittymismahdollisuudet, kivat työkaverit ja mahdollisuuden olla mukana kehittämässä
            tulevaisuuden konsultointitoimintaa ja kumppanuuksia.
          </p>
          <p>
            Arvostamme itseohjautuvuutta, näkemyksellisyyttä, huolellisuutta, hyvää suomen ja
            englannin osaamista, tietoteknisiä taitoja ja jatkuvaa kehittämistä. Työssä kehität
            itsenäisesti vastuualueitasi eteenpäin, kuitenkin rutiinitehtäviä kaihtamatta.
            Pääasiallinen työpaikka on toimistollamme Helsingissä, Hietalahdenrannassa.
          </p>
          <p>
            Työ on osa-aikaista ja sopii opiskelijalle. Sopiva tuntimäärä määritetään valitun
            henkilön kanssa ollen työsuhteen alussa noin 8-16 tuntia viikossa.
          </p>
          <p>
            Vapaamuotoiset hakemukset voi osoittaa toimitusjohtajallemme Taina Haapamäelle
            sähköpostitse taina.haapamaki@flou.io. Kerrothan hakemuksessasi itsestäsi, taustastasi
            ja tulevaisuuden suunnitelmistasi. Mainitsethan myös palkkatoiveesi.
          </p>
          <p>
            Mikäli Sinulla herää kysyttävää tehtävästä tai FLOUsta, toimitusjohtajamme kertoo
            mielellään lisää. Tainan tavoitat parhaiten puhelimitse ke 12.1. klo 14-16 tai ke 19.1.
            klo 14-16 tai sähköpostilla.
          </p>

          <h3>Oletko sinä uusi FLOUlainen?</h3>
          <p>
            FLOU on vuonna 2016 perustettu itsenäinen, liikenteen asiantuntijapalveluihin,
            suunnitteluun ja riskienhallintaan erikoistunut konsulttitoimisto. Erikoisosaamistamme
            ovat vaativat liikennejärjestelmän suunnittelua tukevat vaikutusarviot,
            liikennetaloudelliset tarkastelut, arviointimenetelmien kehittäminen, älyliikenne ja
            kyberturvallisuus.
          </p>
          <p>
            Työmme koostuu projekteista; viimeisen vuoden aikana meitä ovat työllistäneet muun
            muassa useat raideliikenteen toimintaympäristön selvitykset, joukkoliikennesuunnitelmat,
            rahoitustarkastelut, poliittisten toimenpiteiden vaikutusarvioinnit,
            tiemaksutarkastelut, kaupunkitaloudelliset analyysit ja riskienhallinnan tehtävät.
          </p>
          <p>
            Uskomme, että tulevaisuuden ratkaisujen tunnistaminen edellyttää monitieteellistä ja
            analyyttistä lähestymistapaa, ja haluamme olla mukana tukemassa tietoon perustuvaa
            päätöksentekoa. Teemme yhteistyötä muun muassa tutkimuslaitosten ja yritysten kanssa.
          </p>
          <p>
            <h2>Ota yhteyttä</h2>
            Luottamukselliset yhteydenotot osoitteeseen{' '}
            <a href="mailto:taina.haapamaki@flou.io">taina.haapamaki@flou.io</a>
          </p>
        </div>
      </div>
  );
}
