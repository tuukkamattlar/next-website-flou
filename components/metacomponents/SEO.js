import React from "react";
import Head from "next/head";

export default function SEO({metadata, OGdata}) {
  return (
    <Head>
      <title>{metadata.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="description" content={metadata.description} />
      <meta name="image" content={metadata.image} />
      {OGdata.map((value, index) => (
        <meta property={value.property} content={value.content} key={index} />
      )) }
    </Head>
  )
}