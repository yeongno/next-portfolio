import Head from 'next/head'
import Hero from '../../components/home/hero'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout >
      <section className="flex flex-col items-center justify-start min-h-screen text-gray-600 body-font">
    <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
    <Hero />
    </div>
  </section>
    </Layout>
   
  )
}
