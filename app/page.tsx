import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from './components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2">
          Ajay Kommineni
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Gen AI Developer and Enthusiast
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/AjayK47" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:ajaykommineni@yahoo.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">01.</span> About Me
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Final-year Computer Science and Engineering student at Vellore Institute of Technology, AP. 
          Passionate about Deep Learning, AI trends, and building large language models (LLMs). 
          My interests extend beyond tech into space exploration and aviation.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">02.</span> Experience
        </h2>
        <div className="relative border-l border-muted pl-8 ml-4">
          {[
            {
              title: "Software Engineer",
              company: "Tech Innovators Inc.",
              date: "2020 — Present",
              description: [
                "Led development of key features resulting in 30% increase in user engagement",
                "Implemented machine learning algorithms for data analysis",
                "Mentored junior developers and conducted code reviews"
              ]
            },
            {
              title: "Junior Developer",
              company: "StartUp Solutions",
              date: "2018 — 2020",
              description: [
                "Developed and maintained web applications using React and Node.js",
                "Collaborated with cross-functional teams to deliver projects on time",
                "Improved application performance by 40% through code optimization"
              ]
            },
            {
              title: "Research Assistant",
              company: "University Tech Lab",
              date: "2016 — 2018",
              description: [
                "Assisted in machine learning research projects",
                "Published 2 papers in international conferences",
                "Developed data visualization tools for research findings"
              ]
            }
          ].map((job, index) => (
            <Card key={index} className="mb-6 relative">
              <div className="absolute -left-10 top-5 w-4 h-4 bg-primary rounded-full" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold">{job.title}</h3>
                <p className="text-muted-foreground">{job.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{job.date}</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">03.</span> Education
        </h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold">BTech in Computer Science and Engineering</h3>
              <p className="text-muted-foreground">VIT AP University</p>
              <p className="text-sm text-muted-foreground">2021 — 2025</p>
              <p className="text-sm text-muted-foreground">CGPA: 8.73/10</p>
              <p className="text-muted-foreground">Specialization: AI and ML</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">04.</span> Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "PagePod - Multi-Agent Web content Podcast generator",
              description: "This project uses a multi-agent framework to automatically generate podcasts from website content. It leverages the power of AI to scrape web content, refine it, create a script, and convert it to speech.",
              technologies: ["Python", "LangChain", "Autogen", "GPT-4"],
              github: "https://github.com/AjayK47/PagePod"
            },
            {
              title: "Stock Insight Agentic Framework",
              description: "Multi-agent system that uses LLM's to analyze financial data, review market news, and predict company stock performance using autogen library.",
              technologies: ["Python", "Autogen", "LLMs", "Financial APIs"],
              github: "https://github.com/AjayK47/Stock-Insight-Agent"
            },
            {
              title: "AI Voice Over and Script Generator",
              description: "Streamlit application that uses various LLM models to generate YouTube scripts and voiceovers.",
              technologies: ["Python", "Streamlit", "LLMs", "TTS"],
              github: "https://github.com/AjayK47/AI-Youtube-Voice-Over-and-Script-Generator"
            },
            {
              title: "Gemma Model Finetuning Using Lora",
              description: "Finetuned Google's Open source Gemma 2b model on Indian history domain using Lora technique.",
              technologies: ["Python", "PyTorch", "Transformers", "LoRA"],
              github: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora"
            }
          ].map((project, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">05.</span> Publications
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Multimodal Approach to Emotion Recognition using Deep Learning",
              conference: "ICIMIA (International Conference on Intelligent Machines, Innovation and Automation)",
              year: 2023,
              link: "https://ieeexplore.ieee.org/document/10426592"
            },
            {
              title: "Paddy Crop Disease Detection using LeNet and MobileNet Models",
              conference: "INDIACom 2024",
              year: 2024,
              link: "https://ieeexplore.ieee.org/document/10498510"
            }
          ].map((publication, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={publication.link} className="hover:underline">
                    {publication.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  {publication.conference}, {publication.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">06.</span> Contact
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="mailto:ajaykommineni@yahoo.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
