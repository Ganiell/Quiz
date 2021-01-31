import React from 'react'
import db from '../db.json'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import BackgroundImg from '../src/components/BackgroundImg'
import Art from '../src/components/Art'
import Container from '../src/components/Container'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import LoadingSpinner from '../src/components/LoadingSpinner'
import Link from '../src/components/Link'

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')


//   let arrayImg = db.images
//   let i = 0 
//   setInterval(function () {
//   i++
//   console.log(i)
//   if(i >= arrayImg.length - 1) {i = 0}
//   setImg(arrayImg[i]) 
//   },1 * 7000)





  return(
      <BackgroundImg.ContainerBase>
        <Head>
          <title>Quiz</title>
        </Head>
        <Container as={motion.section}
          transition={{delay: 0.1, duration: 0.1}}
          variants={{
            show: {opacity: 1, x: '0'},
            hidden: {opacity: 0, x: '-120%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Container.TituloQuiz>
            <h1>{db.title}</h1>
          </Container.TituloQuiz>
          <Art as={motion.section}
            transition={{delay: 0.2, duration: 0.2}}
            variants={{
              show: {opacity: 1, x: '0'},
              hidden: {opacity: 0, x: '-120%' },
            }}
            initial="hidden"
            animate="show"
          >
              <p>
                {db.description} 
              </p>
              <form onSubmit={function (event) {
                event.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}>
                <Input 
                  maxLength={20}
                  onChange={(event) => setName(event.target.value)} 
                  placeholder="Diz ai seu nome ;)"
                  name="nomeDoUsuario"
                  value={name}
                />
                <Button 
                  as={"button"}                
                  type="submit" 
                  disabled={!name}>
                  Jogar {name}
                </Button>
              </form>
          </Art>
          <Art.Art2 as={motion.section}
              transition={{delay: 0.3, duration: 0.3}}
              variants={{
                show: {opacity: 1, x: '0'},
                hidden: {opacity: 0, x: '-120%' },
              }}
              initial="hidden"
              animate="show"
              disabled={!!name}
            >
            <h2>Tem também os Quizes da Galera :)</h2>
              <ul>
                {db.external.map((linkExterno)=> {
                  const [check, setCheck] = React.useState(false) 
                  const [projectName, gitHubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')
                  return ( 
                      <li style={{listStyle: "none", padding: "4px 25px", marginBottom: "0px 20px", textAlign: "center"}}  
                      onClick={()=>{
                        !!name ? setCheck(true) : setCheck(false)   
                        }}
                        key={linkExterno}>
                        <Art.Quizes 
                          as={Link} 
                          href={name ? `/quiz/${projectName}__${gitHubUser}?name=${name}` : '#'}>
                          {`${projectName}`} {!!name == true && check && <LoadingSpinner/>}
                        </Art.Quizes> 
                      </li>
                    )
                   }
                   )
                   }
                   
              </ul>
          </Art.Art2>
        </Container>
        <GitHubCorner projectUrl="https://github.com/Ganiell"/>
      </BackgroundImg.ContainerBase>
  )
}


