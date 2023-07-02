import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";

const Invitacion = ({article}) => {
  
  if(article){
      return (
          <div>{article.data.title}</div>
          )
    }

}

export default Invitacion


export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
  
    const article = await client.getByUID("quince", params.uid);
    console.log(article)
    return {
      props: {
        article
      },
    };
  }
  
  export async function getStaticPaths() {
    const client = createClient();
  
    const articles = await client.getAllByType("quince");
  
    return {
      paths: articles.map((article) => prismic.asLink(article)),
      fallback: false,
    };
  }
  