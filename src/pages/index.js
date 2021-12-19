import Head from 'next/head' 

import Roadcircle from '../components/roadfile'

// import styles from '../styles/pages/globals.css'

export default function Home({data}) {

  if(data.id == null) return (<h1>No data Found</h1>);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
      <Roadcircle/>
        {
          data.map((item) => (
            <li key={item._id}>
              <a href={item.url}>{item.url}</a>
              <img src={item.url} width='100' height='100'></img>
            </li>
          ))
        }  
        <button>Clica aqui</button>
      </ul>
     
    </div>
  )
}

export const getServerSideProps = async (ctx)=>{
  
  const {token} = ctx.req.cookies; // Get the token with js-cookies to facilitate with auth 

  try{
    const res = await fetch('http://localhost:3000/api/dashboard',{
      method:'GET',
      headers:{
        "authorisation":`${token}` 
      }
    })
    const resJson = await res.json();
    return {
      props:{
        data:resJson
      }
    }
  }catch(err){
    return console.log(err)
  }
}
