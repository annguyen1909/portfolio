import { notFound } from "next/navigation";
import { getProjectBySlug, publicProjects } from "../../../data/projects";
import ProjectDetail from "../../../components/ProjectDetail";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
export async function generateStaticParams() {
  return publicProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - An Nguyen`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
