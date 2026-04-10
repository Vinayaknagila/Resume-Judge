import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Resumecard from "~/components/Resumecard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeJudge" },
    { name: "description", content: "Valuable feedback for that dream job !" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section py-16">
      <div className="page-heading">
        <h1>Track your Applications and Resume Ratings</h1>
        <h2>Valuable feedback for that dream job !</h2>
      </div>
      {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <Resumecard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
      
    </section>
    
    
    
   

  </main>
}
