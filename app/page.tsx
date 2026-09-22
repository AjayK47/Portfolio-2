import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main id="top" className="max-w-2xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-20">
      
      {/* Intro */}
      <section className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading">Ajay Kommineni</h1>
          <p className="text-xl md:text-2xl font-heading leading-relaxed">
            I&apos;m an experienced builder, taking AI products from zero to one.
          </p>
        </div>

        <div className="text-lg leading-relaxed font-normal opacity-90 text-justify">
          <p>
            I&apos;m an AI/ML engineer. Right now I&apos;m building the identity and messaging layer so AI agents
            can talk to each other. Before this, I built agent harnesses and AI co-workers for enterprise,
            hiring pipelines, and AI SDR workflows. In my free time, I explore diffusion-based language
            models and work on fixing memory and context bloat in AI agents.
          </p>
        </div>

        {/* Social Links with Logos */}
        <div className="flex flex-wrap gap-8 text-sm font-medium">
          <Link href="https://github.com/AjayK47" target="_blank" className="flex items-center gap-2 hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all">
            <Github className="h-5 w-5" /> GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/" target="_blank" className="flex items-center gap-2 hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </Link>
          <Link href="mailto:ajaykommineni@yahoo.com" className="flex items-center gap-2 hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all">
            <Mail className="h-5 w-5" /> Email
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-16">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Experience
        </h3>
        
        <div className="space-y-16">
          
          {/* Truviz Collective Timeline */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-[#00ff41]/30 pb-4">
              <h4 className="text-2xl font-bold font-heading">Truviz AI</h4>
              <p className="text-sm font-heading uppercase tracking-widest opacity-70">
                1 yr 11 mos <span className="opacity-100 ml-2">[Parent company of HireID &amp; Trugen]</span>
              </p>
            </div>

            <div className="relative border-l border-[#00ff41]/30 ml-2 space-y-12">

              {/* Trugen AI (Full-time) */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4.5px] top-2 h-2 w-2 bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold font-heading">Trugen AI · AI/ML Engineer</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Full-time · Nov 2025 – Sep 2026</p>
                  </div>
                  <ul className="leading-relaxed opacity-90 text-base space-y-2 list-none">
                    <li>
                      Own the agent harness end-to-end for Trugen&apos;s AI co-worker, built from scratch and
                      currently powering{" "}
                      <Link href="https://clarasdr.ai/" target="_blank" className="underline underline-offset-2 hover:bg-[#00ff41] hover:text-black">ClaraSDR</Link>
                      {" "}and{" "}
                      <Link href="https://juno-ai.app/" target="_blank" className="underline underline-offset-2 hover:bg-[#00ff41] hover:text-black">Juno AI</Link>.
                    </li>
                    <li>Previously built the AI workflow behind an AI SDR product.</li>
                  </ul>
                </div>
              </div>

              {/* HireID.ai (Full-time) */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4.5px] top-2 h-2 w-2 bg-[transparent] border border-[#00ff41]"></div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold font-heading">
                      <Link href="https://hireid.ai/" target="_blank" className="hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all">HireID AI</Link>
                      {" "}· AI/ML Engineer
                    </p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Full-time · Jan 2025 – Nov 2025</p>
                  </div>
                  <ul className="leading-relaxed opacity-90 text-base space-y-2 list-none">
                    <li>Built AI-powered people search over candidate profiles using embeddings.</li>
                    <li>Built an end-to-end hiring pipeline: parsing resumes, matching them against JDs, and scoring candidates via embeddings.</li>
                    <li>Built agents that run deep research on candidates&apos; GitHub and research profiles.</li>
                  </ul>
                </div>
              </div>

              {/* Internship */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4.5px] top-2 h-2 w-2 bg-[transparent] border border-[#00ff41]"></div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold font-heading">Internship · AI/ML Engineer</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Internship · Oct 2024 – Dec 2024</p>
                  </div>
                  <ul className="leading-relaxed opacity-90 text-base space-y-2 list-none">
                    <li>Built an end-to-end AI-agentic hiring platform.</li>
                    <li>Developed automated job search systems for candidates using AI agents.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Research Section */}
          <div className="space-y-4 pt-4 border-t border-[#00ff41]/30">
            <div className="space-y-1">
              <p className="text-xl font-bold font-heading">Undergraduate Research Fellow</p>
              <p className="text-sm opacity-50 uppercase tracking-widest">
                <Link href="https://air.vitap.ac.in/" target="_blank" rel="noreferrer">AIR CENTER VITAP</Link> · Part-time
              </p>
              <p className="text-xs opacity-70 uppercase tracking-widest">Apr 2024 – Jan 2025</p>
            </div>
            <ul className="leading-relaxed text-lg opacity-90 space-y-2 list-none">
              <li>Worked on the development of India&apos;s indigenous legal domain LLM models and conducted research in video generation technologies.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Current Builds */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Current builds
        </h3>
        <div className="space-y-10">
          {[
            { title: "myagent.to", link: "https://myagent.to", desc: "A messaging network that gives every AI agent a permanent address so agents can talk to each other across different owners and runtimes. Messages are stored even when the receiving agent is offline." },
            { title: "OnWatch", link: "https://onwatch.site", desc: "A social listening tool that scans the web for conversations about your product and competitors. AI filters every mention so you only see the ones worth your time." },
          ].map((proj, i) => (
            <div key={i} className="space-y-2 group">
              <Link href={proj.link} target="_blank" className="text-xl font-bold font-heading hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all flex items-center gap-2 w-fit">
                {proj.title} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="text-base opacity-70 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Builds */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Past builds
        </h3>
        <div className="space-y-10">
          {[
            { title: "Organic Hire", link: "https://organichire.co", desc: "An AI-first ATS for small teams — post jobs, let AI screen and rank resumes with reasoning you can actually read, and move candidates through a pipeline without paying for enterprise recruiting software." },
            { title: "Open Session", link: "https://session.drawset.com", desc: "Open-source conference software that runs the whole show — CFP forms, submission review, speaker onboarding, drag-and-drop scheduling with conflict detection, and the public agenda." },
          ].map((proj, i) => (
            <div key={i} className="space-y-2 group">
              <Link href={proj.link} target="_blank" className="text-xl font-bold font-heading hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all flex items-center gap-2 w-fit">
                {proj.title} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="text-base opacity-70 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Selected work
        </h3>
        <div className="space-y-10">
          {[
            { title: "Forechain", link: "https://forechain.co", desc: "Self-hosted supplier-risk intelligence platform. A durable agent harness bootstraps each supplier, monitors them continuously in the background, and surfaces evidence-cited risk signals across six risk dimensions — every run's reasoning trace and sources are replayable on disk." },
            { title: "PagePod", link: "https://github.com/AjayK47/PagePod", desc: "Multi-agent framework for generating podcasts from web content." },
            { title: "Stock Insight", link: "https://github.com/AjayK47/Stock-Insight-Agent", desc: "Collaborative agent system for market analysis and prediction." },
            { title: "AI Voice Over and Script Generator", link: "https://github.com/AjayK47/AI-Voice-Over-and-Script-Generator-for-Youtube", desc: "Streamlit application using LLM models to generate YouTube scripts and voiceovers." },
            { title: "Gemma Research", link: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora", desc: "Domain adaptation of Gemma 2B for Indian history using LoRA." },
            { title: "Llama Navigator", link: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index", desc: "Interactive web explorer using RAG for contextual question-answering." },
          ].map((proj, i) => (
            <div key={i} className="space-y-2 group">
              <Link href={proj.link} target="_blank" className="text-xl font-bold font-heading hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all flex items-center gap-2 w-fit">
                {proj.title} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="text-base opacity-70 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications - hidden for now */}
      <section className="hidden space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Publications
        </h3>
        <div className="space-y-10">
          {[
            { 
              title: "Multimodal Approach to Emotion Recognition using Deep Learning", 
              link: "https://ieeexplore.ieee.org/document/10426592",
              conf: "ICIMIA (International Conference on Intelligent Machines, Innovation and Automation), 2023"
            },
            { 
              title: "Paddy Crop Disease Detection using LeNet and MobileNet Models", 
              link: "https://ieeexplore.ieee.org/document/10498510",
              conf: "INDIACom 2024, 2024"
            }
          ].map((pub, i) => (
            <div key={i} className="space-y-2 group">
              <Link href={pub.link} target="_blank" className="text-xl font-bold font-heading hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all flex items-center gap-2 w-fit">
                {pub.title} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="text-base opacity-70 leading-relaxed">{pub.conf}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Blogs
        </h3>
        <div className="space-y-10">
          {[
            {
              title: 'Context Engineering for Agents: Building the Context Layer',
              link: 'https://trugen.ai/blog/context-engineering',
              source: 'TruGen AI',
            },
            {
              title: 'Is LLM Request Routing a Good Idea?',
              link: 'https://medium.com/@ajaykommineni.dev/is-llm-request-routing-a-good-idea-c034420c19f6',
              source: 'Medium',
            },
          ].map((blog) => (
            <div key={blog.link} className="space-y-2 group">
              <Link href={blog.link} target="_blank" rel="noreferrer" className="text-xl font-bold font-heading hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all flex items-center gap-2 w-fit">
                {blog.title} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="text-base opacity-70 leading-relaxed">Published on {blog.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          Contact
        </h3>
        <div className="border border-[#00ff41]/30 p-8 space-y-8">
          <p className="text-base leading-relaxed opacity-90">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-8 text-sm font-medium">
            <Link href="mailto:ajaykommineni@yahoo.com" className="flex items-center gap-3 hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all w-fit">
              <Mail className="h-5 w-5" /> Email Me
            </Link>
            <Link href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/" target="_blank" className="flex items-center gap-3 hover:bg-[#00ff41] hover:text-black hover:px-2 transition-all w-fit">
              <Linkedin className="h-5 w-5" /> Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer border-t border-[#00ff41]/30">
        <div className="flex justify-between items-center text-sm">
          <p>© 2026 Ajay Kommineni</p>
          <div className="flex gap-6">
            <Link href="#top" className="px-1 transition-colors">Back to top</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
