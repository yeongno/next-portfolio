import Head from "next/head";
import Layout from "../../components/layout";
import { DATABASE_ID, TOKEN } from "../../config";
import ProjectItem from "../../components/projects/project-item";
export default function Projects({ projects }) {
    return(
        <>
        <Layout >
          <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10 px-6">
        <Head>
        <title>이영노 포트폴리오</title>
        <meta name="description" content='오늘도 코딩' />
        <link rel='icon' href='/favicon.ico' />
      </Head> 
            <h1 className="text-5xl font-bold sm:text-6xl">
              총 프로젝트 :
              <span className="pl-4 text-blue-500">
                {projects.results.length}
              </span>
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 m-6 s:w-full" >
          {projects.results?.map((aProject) => (
            // <h1>{aProject.properties.title.title[0].plain_text}</h1>
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
            </div>
          </div>
        </Layout>
        </>
    )
}

//빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
      body: JSON.stringify({
        sorts: [
          {
            "property": "title",
            "direction":"ascending"
          }
        ],
        page_size: 100
        })
  };
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  
  const projects = await res.json()

  
  // const projectNames = projects.results?.map((aProject) => (
  //   aProject.properties.title.title[0]?.plain_text
  // ))
  
  return {
    props: {projects},
  }
}