import Hero from '../../components/home/hero'
import Layout from '../../components/layout'
import SkillStack from '../../components/home/skill-stack'
export default function Home() {
  return (
    <Layout >
      <section className="flex flex-col items-center justify-start text-gray-600 body-font">
    <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
      <section >
        <section className="py-8 bg-gray-200 dark:bg-slate-600">
          <div className="container mx-auto">
            <h2 className="mb-4 ml-2 text-3xl font-bold">Skill Stack</h2>
            <div className="flex flex-col items-center justify-start px-2 py-2 text-gray-600 body-font">
                <SkillStack />
            </div>
          </div>
        </section>
      </section>
    </Layout>
   
  )
}
