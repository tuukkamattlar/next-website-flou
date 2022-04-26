import React from "react";
import Head from "next/head";
import { attributes as seoContent } from '../../content/SEO/metatags.md';

// TODO!!

export default function SEO({title, metadata, OGdata, OGimage, keywords}) {
  const siteName= {
      property: "og:site_name",
      content: "FLOU"
  }
  const combinedKeywords = keywords.concat(keywords).concat(seoContent.keywords)
  const metadataCombined = metadata.concat(OGdata).concat(siteName)
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta 
        property="keywords"
        content={combinedKeywords.map((value) => (" "+value.keyword))} 
      />
      <meta name="description" content={metadata.description} />
      <meta name="image" content={metadata.image} />
      {metadataCombined.map((value, index) => (
        <meta property={value.property} content={value.content} key={index} />
      )) }
      <meta name="og:image" content={OGimage} />
    </Head>
  )
}