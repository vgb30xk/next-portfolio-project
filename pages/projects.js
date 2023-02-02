import Head from "next/head";
import { useEffect } from "react";
import { DATABASE_ID, TOKEN } from "../config";
import Layout from "./components/layout";
import ProjectItem from "./components/projects/project-item";

function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>메시 포트폴리오</title>
          <meta name="description" content="리오 메시" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트:
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
          {projects.results.map((aProject) => {
            return <ProjectItem key={aProject.id} data={aProject} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default Projects;
