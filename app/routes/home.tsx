import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Resumecard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeJudge" },
    { name: "description", content: "Valuable feedback for that dream job !" },
  ];
}

export default function Home() {
const {auth} = usePuterStore();

    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated, navigate])
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
