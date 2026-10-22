import AllProjects from '../../components/AllProjects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'All Projects - An Nguyen Portfolio',
  description: 'Explore all my projects including web development, 3D experiences, and interactive applications.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}
