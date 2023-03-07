import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'

type Props = {
  id: string;
  letter: string;
}

const Challenge: NextPage<Props> = ({id, letter}) => {
  return (
    <div>
      <h1>Bienvenue sur le challenge !</h1>
      <h2>Vous êtes sur la page {id}.</h2>
      {
          <p>La lettre {id} du flag est : {letter}</p>
      }
    </div>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
const paths= [0,1,2,3];

  return {
    paths: paths.map((id) => ({ params: { id: id.toString() } })),
    fallback: false
  }
}
      
export const getStaticProps : GetStaticProps = async (ctx) => {
  const flag = "easy".split("");
  const params = ctx.params;
  return {
    props: {
      id: params?.id,
      letter: params?.id ? flag[Number(params.id)] : "",
    },
  };
};

export default Challenge;
