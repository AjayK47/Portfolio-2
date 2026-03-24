import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-20">
      
      {/* Intro */}
      <section className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading">&gt; Ajay Kommineni</h1>
          <p className="text-xl md:text-2xl font-heading leading-relaxed">
            Engineer specializing in the architecture of autonomous enterprise agents.
          </p>
        </div>

        <div className="text-lg leading-relaxed font-normal opacity-90 text-justify">
          <p>
            I am working at Truviz AI, as an AI/ML Engineer currently building AI employee for the Enterprise. 
            Prior to this, I designed and developed end-to-end AI agents for hireid product to streamline 
            and optimize the hiring process. In my free time, I explore research in diffusion-based 
            language models and also addressing memory and context bloat in AI agents.
          </p>
        </div>

        {/* Social Links with Logos */}
        <div className="flex flex-wrap gap-8 text-sm tracking-widest uppercase font-medium">
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
        <h3 className="text-lg font-heading tracking-widest uppercase opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          _Experience
        </h3>
        
        <div className="space-y-16">
          
          {/* Truviz Collective Timeline */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-[#00ff41]/30 pb-4">
              <h4 className="text-2xl font-bold font-heading tracking-widest uppercase">Truviz</h4>
              <p className="text-sm font-heading uppercase tracking-widest opacity-70">
                1 yr 6 mos <span className="opacity-100 ml-2">[PARENT_ORGANISATION]</span>
              </p>
            </div>
            
            <div className="relative border-l border-[#00ff41]/30 ml-2 space-y-12">
              
              {/* Trugen AI (Full-time) */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4.5px] top-2 h-2 w-2 bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold font-heading">Trugen AI · AI/ML Engineer</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Full-time · Jan 2025 – Present</p>
                  </div>
                  <ul className="leading-relaxed opacity-90 text-base space-y-2 list-none">
                    <li>{">"} Working on tool-calling and third-party meeting integrations for autonomous Video Agents.</li>
                    <li>{">"} Currently building an 'AI Employee' designed to execute enterprise-level workflows.</li>
                  </ul>
                </div>
              </div>

              {/* HireID.ai (Full-time) */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[4.5px] top-2 h-2 w-2 bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-bold font-heading">Hireid AI · AI/ML Engineer</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Full-time · Jan 2025 – Present</p>
                  </div>
                  <ul className="leading-relaxed opacity-90 text-base space-y-2 list-none">
                    <li>{">"} Developed an end-to-end AI-driven hiring pipeline to streamline the recruitment process.</li>
                    <li>{">"} Engineered a multi-agent workflow for deep candidate profile research and matching.</li>
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
                    <li>{">"} Built an end-to-end AI-agentic hiring platform.</li>
                    <li>{">"} Developed automated job search systems for candidates using AI agents.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Research Section */}
          <div className="space-y-4 pt-4 border-t border-[#00ff41]/30">
            <div className="space-y-1">
              <p className="text-xl font-bold font-heading">Undergraduate Research Fellow</p>
              <p className="text-sm opacity-50 uppercase tracking-widest">AIR CENTER VITAP · Part-time</p>
              <p className="text-xs opacity-70 uppercase tracking-widest">Apr 2024 – Jan 2025</p>
            </div>
            <ul className="leading-relaxed text-lg opacity-90 space-y-2 list-none">
              <li>{">"} Worked on the development of India's indigenous legal domain LLM models and conducted research in video generation technologies.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Selected Works */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading tracking-widest uppercase opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          _Selected_Works
        </h3>
        <div className="space-y-10">
          {[
            { title: "PagePod", link: "https://github.com/AjayK47/PagePod", desc: "Multi-agent framework for generating podcasts from web content." },
            { title: "Stock Insight", link: "https://github.com/AjayK47/Stock-Insight-Agent", desc: "Collaborative agent system for market analysis and prediction." },
            { title: "AI Voice Over and Script Generator", link: "https://github.com/AjayK47/AI-Voice-Over-and-Script-Generator-for-Youtube", desc: "Streamlit application using LLM models to generate YouTube scripts and voiceovers." },
            { title: "Gemma Research", link: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora", desc: "Domain adaptation of Gemma 2B for Indian history using LoRA." },
            { title: "Llama Navigator", link: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index", desc: "Interactive web explorer using RAG for contextual question-answering." },
            { title: "Gemini-File", link: "https://github.com/AjayK47/Gemini-File", desc: "Streamlit web application to index and query PDF files using Gemini and Llama-Index." },
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

      {/* Publications */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading tracking-widest uppercase opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          _Publications
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

      {/* Contact */}
      <section className="space-y-12">
        <h3 className="text-lg font-heading tracking-widest uppercase opacity-70 border-b border-[#00ff41]/30 w-fit pb-1">
          _Contact
        </h3>
        <div className="border border-[#00ff41]/30 p-8 space-y-8">
          <p className="text-base leading-relaxed opacity-90">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-8 text-sm tracking-widest uppercase font-medium">
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
      <footer className="pt-20 pb-32 border-t border-[#00ff41]/30 mt-20">
        <div className="flex justify-between items-center opacity-70 text-sm tracking-widest uppercase">
          <p>SYSTEM.HALT // 2026</p>
          <div className="flex gap-6">
            <Link href="#top" className="hover:text-white hover:bg-[#00ff41] px-1 transition-colors">ROOT_DIR</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
