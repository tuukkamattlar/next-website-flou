import Head from 'next/head'
import Header from '@components/Header'
import WhatWeDoBlock from '@components/WhatWeDoBlock';
import SmallRef from '@components/SmallRef';
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  let { title, items } = attributes;
  return (
    <>      
    <Head>
      <title>FLOU</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Header title="FLOU: joku iskulause?" />
      <div style={{
        background: "black",
        color: "white",
        fontSize: "50px",
        textAlign: "center",
        padding: "30px"
      }}>
        {title}
      </div>
      <WhatWeDoBlock/>
      <SmallRef items={items}/>
    </div>
  </>
    
  )
}
