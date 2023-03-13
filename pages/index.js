import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Inter } from '@next/font/google'

import { useTheme } from 'next-themes';

import dev from './/../public/dev.png'

import { AiFillGithub, AiFillLinkedin, AiFillBulb, AiOutlineBulb } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {theme, setTheme} = useTheme();

  const currentTheme = theme;

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/glauberperez/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        console.log(repos);
      });
      //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Glauber Perez</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-sanfrancisco">Glauber Perez</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                {
                  currentTheme === 'dark' ? (
                    <AiFillBulb onClick={() => setTheme('light')} />
                  ) : (
                    <AiOutlineBulb onClick={() => setTheme('dark')} />
                  )
                }
              </li>
              <li>
                <a 
                className="px-4 py-2 rounded-lg ml-8 text-lg font-sanfrancisco bg-emeraldgreen hover:bg-emeraldgreenlight active:bg-emeraldgreenlighter" 
                href="./GlauberPerez.pdf"
                >
                  Curriculo
                </a>
                </li> 
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-emeraldgreen rounded-full w-80 h-80 mt-0 overflow-hidden">
            <Image src={dev} layout="fill" objectFit="cover" alt="dev" />
          </div>
          <div className="text-center p-10">
            <h2 className="font-sanfrancisco text-6xl py-3 text-emeraldgreen">Glauber Perez</h2>
            <h3 className="font-sanfrancisco text-3xl py-2">Desenvolvedor Full-Stack.</h3>
            <p className="font-sourcecodepro text-md py-5 px-5 leading-8">
            Sou um jovem desenvolvedor apaixonado por tecnologia e cybersegurança. Estou sempre procurando novas oportunidades de aprendizado e crescimento. Sou um profissional dedicado e apaixonado pelo que faço, e espero ter a chance de contribuir para projetos interessantes e desafiantes.            </p>
          </div>
          <div className="text-6xl flex justify-center gap-10 py-3">
            <a href="https://github.com/glauberperez">
              <AiFillGithub/>
            </a>
            <a href="https://www.linkedin.com/in/glauber-perez-0b0b1b1b9/">
              <AiFillLinkedin/>
            </a>
          </div>
        </section>  

        <section className="py-10">
          <div>

            <h3 className="font-sanfrancisco text-4xl p-5">Projetos:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {
                repos.map(function(repo){
                  if(repo.topics.includes('portfolio')) {
                    return(
                    <div key={repo.id} className="bg-emeraldgreen rounded-lg p-5">
                      <div className="flex justify-between">
                        <h4 className="font-sanfrancisco text-2xl ">{repo.name.toUpperCase()}</h4>
                        <a href={repo.html_url} className="font-sanfrancisco text-3xl text-right hover:text-slate-300 active:text-slate-500"><AiFillGithub/></a>
                      </div>
                      <p className="font-sourcecodepro text-md py-5 leading-8 ">
                        {repo.description}
                      </p>
                    </div>
                    )
                  }else{
                    return(
                    <></>
                    )
                  }
                })
              }

            </div>

          </div>
        </section>

      </main>
    </>
  )
}
