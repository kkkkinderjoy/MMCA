import Banner from '@/components/banner'
import Collection from '@/components/collection'
import Digital from '@/components/digital'
import News from '@/components/news'
import Header from '@/components/header'
import Main from '@/components/main'
import Place from '@/components/place'
import Today from '@/components/today'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Place />
      <Banner />
      {/* <Today /> */}
      <Collection /> 
      {/* 
      
      <Digital />
      <News />
      */}
      
    </>
  )
}
