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

  const currentTheme = theme; //=== 'system' ? systemTheme : theme;

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
            <h1 className="text-xl font-quicksand">Glauber Perez</h1>
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
                className="bg-gradient-to-r from-slate-400 to-slate-500 text-white px-4 py-2 rounded-lg ml-8 " 
                href=""
                >
                  Curriculo
                </a>
                </li> 
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="font-quicksand text-5xl py-3 text-slate-500">Glauber Perez</h2>
            <h3 className="font-quicksand text-2xl py-2">Desenvolvedor Full-Stack.</h3>
            <p className="font-quicksand text-md py-5 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquet nunc nisl vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, nec aliquet nunc nisl vel mauris.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-10 py-3">
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-96 h-96 mt-20 overflow-hidden">
            <Image src={dev} layout="fill" objectFit="cover" alt="dev" />
          </div>
        </section>  

        <section>
          <div>
            <h3 className="font-quicksand text-4xl">serviços que ofereço:</h3>
            <p className="text-md py-2 leading-8 text-gray-800"> 
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-md py-2 leading-8 "> 
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>

        <section>

        </section>

      </main>
    </>
  )
}
