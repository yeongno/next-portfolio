import { DATABASE_ID, TOKEN } from "../config";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, projects }) {
    console.log(projects)
    return (
        <div>
        <div className="min-h-screen bg-primary">
        <Header />
        <div>
            {children}
        </div>
        </div>
        <Footer />
        </div>
    )
}

//notion data
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