import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Ajay Kommineni
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Engineer & Researcher
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yourusername" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-muted-foreground">01.</span> About Me
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a passionate software engineer with expertise in full-stack development and machine learning. 
          Currently pursuing my Ph.D., I focus on developing innovative solutions that bridge the gap between 
          theoretical research and practical applications.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
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
            <Card key={index} className="mb-8 relative">
              <div className="absolute -left-10 top-5 w-4 h-4 bg-primary rounded-full" />
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">{job.title}</h3>
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
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-muted-foreground">03.</span> Education
        </h2>
        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
              <p className="text-muted-foreground">Stanford University</p>
              <p className="text-sm text-muted-foreground">2020 — Present</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold">M.S. in Computer Science</h3>
              <p className="text-muted-foreground">MIT</p>
              <p className="text-sm text-muted-foreground">2018 — 2020</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
              <p className="text-muted-foreground">UC Berkeley</p>
              <p className="text-sm text-muted-foreground">2014 — 2018</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-muted-foreground">04.</span> Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "AI-Powered Chat Bot",
              description: "Developed a chat bot using GPT-3 for customer support automation.",
              technologies: ["Python", "Flask", "OpenAI API", "React"],
              github: "https://github.com/yourusername/chatbot"
            },
            {
              title: "Blockchain Voting System",
              description: "Created a secure and transparent voting system using blockchain technology.",
              technologies: ["Solidity", "Ethereum", "Web3.js", "Node.js"],
              github: "https://github.com/yourusername/blockchain-voting"
            },
            {
              title: "Real-time Data Visualization Dashboard",
              description: "Built a dashboard for visualizing large-scale data in real-time.",
              technologies: ["D3.js", "React", "Node.js", "WebSocket"],
              github: "https://github.com/yourusername/data-viz"
            },
            {
              title: "Mobile Fitness Tracking App",
              description: "Developed a cross-platform mobile app for fitness tracking and goal setting.",
              technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
              github: "https://github.com/yourusername/fitness-app"
            }
          ].map((project, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
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
      <section id="publications" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-muted-foreground">05.</span> Publications
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Advances in Neural Network Architectures for Image Recognition",
              journal: "Journal of Artificial Intelligence",
              year: 2022,
              link: "#"
            },
            {
              title: "Efficient Algorithms for Large-Scale Data Processing in IoT Networks",
              conference: "International Conference on Distributed Computing Systems",
              year: 2021,
              link: "#"
            },
            {
              title: "A Novel Approach to Privacy-Preserving Machine Learning",
              journal: "IEEE Transactions on Information Forensics and Security",
              year: 2020,
              link: "#"
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
                  {publication.journal || publication.conference}, {publication.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-muted-foreground">06.</span> Contact
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername"
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

