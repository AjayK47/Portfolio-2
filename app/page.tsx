import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from './components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const runtime = "edge";

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
        <div className="flex gap-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/AjayK47" target="_blank">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/ajay-kommineni-1b3985224/" target="_blank">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:ajaykommineni@yahoo.com">
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
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
      <section id="experience" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">02.</span> Experience
        </h2>
        <div className="relative border-l border-muted pl-8 ml-4">
          {[
            {
              title: "AI/ML Engineer",
              company: "Truviz AI",
              date: "2025 January — Present",
              description: [
                "Building End to End AI Agentic based Hiring Platform",
                "Working on Job search for Job seekers using AI agents",
                "Implementing advanced ML algorithms for candidate matching"
              ]
            },
            {
              title: "AI/ML Engineer Intern",
              company: "Truviz AI",
              date: "2024 October - 2024 December",
              description: [
                "Building End to End AI Agentic based Hiring Platform",
                "Working on Job search for Job seekers using AI agents",
                "Implementing advanced ML algorithms for candidate matching"
              ]
            },
            {
              title: "Undergraduate Research Fellow",
              company: "AIR CENTER VITAP",
              date: "2024 April - 2025 January",
              description: [
                "Worked on development of India's own Legal Domain LLM models",
                "Conducted research on Video Generation technologies",
                "Contributing to cutting-edge AI research projects"
              ]
            },
            {
              title: "ML Project Intern",
              company: "InTrain Tech",
              date: "2023 October - 2023 December",
              description: [
                "Developed a real-estate price prediction model using ML regression techniques",
                "Built an NLP Assistant chatbot for an Edu-tech company to handle website visitor queries",
                "Implemented and deployed machine learning solutions for production use"
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
      <section id="education" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"> {/* Increased margin-bottom */}
          <span className="text-muted-foreground">03.</span> Education
        </h2>
        <div className="space-y-8"> {/* Increased space between cards */}
          <Card>
            <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">BTech in Computer Science and Engineering</h3>
              <div className="space-y-3"> {/* Added spacing between details */}
                <p className="text-lg text-muted-foreground">VIT AP University</p>
                <p className="text-base text-muted-foreground">2021 — 2025</p>
                <p className="text-lg text-muted-foreground">Specialization: AI and ML</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">04.</span> Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2"> {/* Increased gap from 6 to 8 */}
          {[
            {
              title: "PagePod - Multi-Agent Web content Podcast generator",
              description: "This project uses a multi-agent framework to automatically generate podcasts from website content. It leverages the power of AI to scrape web content, refine it, create a script, and convert it to speech.",
              technologies: ["Python", "LangChain", "Autogen", "GPT-4"],
              github: "https://github.com/AjayK47/PagePod"
            },
            {
              title: "Stock Insight Agentic Framework with Autogen",
              description: "This is a multi-agent system that uses LLM's to analyze financial data, review market news, and predict company stock performance. Built with the autogen library, it coordinates multiple agents, each assigned a specific role in processing financial information and making predictions",
              technologies: ["Python", "Autogen", "LLMs", "Financial APIs"],
              github: "https://github.com/AjayK47/Stock-Insight-Agent"
            },
            {
              title: "AI Voice Over and Script Generator for Youtube",
              description: "This project is a Streamlit application that uses various LLM models to generate YouTube scripts and voiceovers. It aims to assist content creators in producing high-quality YouTube videos with minimal effort.",
              technologies: ["Python", "Streamlit", "LLMs", "TTS"],
              github: "https://github.com/AjayK47/AI-Youtube-Voice-Over-and-Script-Generator"
            },
            {
              title: "Gemma Model Finetuning Using Lora",
              description: "Finetuned Google's Open source Gemma 2b model on Indian history domain using Lora technique , huggingface transformers library",
              technologies: ["Python", "PyTorch", "Transformers", "LoRA"],
              github: "https://github.com/AjayK47/Gemma-Model-Finetuning-Using-Lora"
            },
            {
              title: "Web Page ChatBot using Llama index",
              description: "Web Page Q&A Chatbot is a Streamlit web application designed to interactively answer questions based on web page data. The chatbot uses LLMS such as Hugging Face, Gemini or OpenAI to provide accurate and context-aware responses.",
              technologies: ["Python", "Streamlit", "LlamaIndex", "LLMs"],
              github: "https://github.com/AjayK47/Web-ChatBot-using-Llama-index"
            },
            {
              title: "Gemini-File with Llama-Index",
              description: "Gemini-File is a Streamlit web application that allows users to upload PDF files, index their contents using the Gemini search engine from the Llama-Index library, and query the documents.",
              technologies: ["Python", "Streamlit", "LlamaIndex", "Gemini"],
              github: "https://github.com/AjayK47/Gemini-File"
            },
            {
              title: "Face Emotion Detection using CNN",
              description: "A project involving training a Convolutional Neural Network (CNN) for facial expression recognition.",
              technologies: ["Python", "CNN", "Deep Learning", "Computer Vision"],
              github: "https://github.com/AjayK47/Face-Emotion-Detection_CNN"
            },
            {
              title: "Boston Housing Price Prediction",
              description: "A machine learning project for predicting median housing costs in different areas of Boston.",
              technologies: ["Python", "ML", "Regression", "Data Analysis"],
              github: "https://github.com/AjayK47/Boston-Hosuing-Prediction-and-Deployment-"
            },
            {
              title: "Fruits/Veggies Classification with InceptionV3",
              description: "A project that uses a fine tuned InceptionV3 model to identify vegetables or fruits in uploaded images also provide nutrition info using Google PaLM API",
              technologies: ["Python", "InceptionV3", "Google PaLM", "Computer Vision"],
              github: "https://github.com/AjayK47/image-classification-with-inceptioV3-and-Google-Palm"
            }
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden"> {/* Added overflow-hidden */}
              <CardContent className="pt-8 p-6 md:p-8"> {/* Increased padding */}
                <div className="flex justify-between items-start mb-4"> {/* Increased margin-bottom */}
                  <h3 className="text-xl md:text-2xl font-semibold pr-8"> {/* Added padding-right */}
                    {project.title}
                  </h3>
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                  >
                    <Github className="h-6 w-6 md:h-7 md:w-7" /> {/* Increased icon size */}
                  </Link>
                </div>
                <p className="text-muted-foreground mb-6 text-base md:text-lg"> {/* Increased text size and margin */}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-sm bg-muted px-3 py-1.5 rounded"> {/* Increased text size and padding */}
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
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
      <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
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
