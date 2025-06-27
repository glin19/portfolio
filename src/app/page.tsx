'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import { submitContactForm, ContactFormData } from '@/lib/contact'
import { projects } from '@/data/projects'
import ProjectModal from '@/components/ProjectModal'
import type { Project } from '@/data/projects'
import { Download } from "lucide-react"
import { BackgroundBoxes } from "@/components/ui/background-boxes"

export default function Home() {
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState<string>('')

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return "Please enter your name"
    }
    if (!formData.email.trim()) {
      return "Please enter your email address"
    }
    if (!formData.email.includes('@')) {
      return "Please enter a valid email address"
    }
    if (!formData.message.trim()) {
      return "Please enter a message"
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const validationResult = validateForm()
    if (validationResult) {
      setValidationError(validationResult)
      return
    }
    
    // Clear any previous validation errors
    setValidationError('')
    setIsSubmitting(true)

    const result = await submitContactForm(formData)
    
    if (result.success) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  

  return (
    <>
      <Navigation />
        {/* Boxes */}
        <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
          <BackgroundBoxes/>
        </div>
        
        <main className="relative z-10 text-white">
        {/* Home Section */}
        <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm Guan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Developer & Problem Solver
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              I create modern web applications with cutting-edge technologies. 
              Passionate about code and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0165FC] hover:bg-[#0165FC] border border-white text-white px-8 py-3 text-lg transform hover:scale-105 transition-transform duration-200">
                <a href="/cv/Resume.pdf" download="Resume.pdf" aria-label="Download Guan Lin's Resume (PDF)">
                  <Download className="mr-2 h-5 w-5" />
                    Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-[#0165FC] hover:bg-[#0165FC] hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-transform duration-200" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
          <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">       
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
                    My journey in tech started with curiosity and has evolved into a career focused on building 
                    meaningful applications that make a difference.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                    or sharing knowledge with the developer community.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-gray-600 text-white text-blue-300 px-3 py-1 rounded-full text-sm">Problem Solver</span>
                    <span className="bg-gray-600 text-white text-purple-300 px-3 py-1 rounded-full text-sm">Team Player</span>
                    <span className="bg-gray-600 text-white text-green-300 px-3 py-1 rounded-full text-sm">Continuous Learner</span>
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <img
                      src="/AnthonyEdwards.jpg"
                      alt="Guan Lin - Profile Picture"
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              My Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.id}
                  className="bg-black/40 backdrop-blur-sm border border-white/20 overflow-hidden group hover:bg-black/60 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl"
                  onClick={() => openProjectModal(project)}
                >
                  {/* Project Image */}
                  <div className="h-48 bg-[#1a1a1a] overflow-hidden relative">
                    {project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📁</div>
                          <div>No Image</div>
                        </div>
                      </div>
                    )}
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-600 text-white rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          className="bg-[#0165FC] hover:bg-[#0165FC] border border-white text-white transform hover:scale-105 transition-transform duration-200 flex-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.liveUrl, '_blank')
                          }}
                        >
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          size="sm" 
                          className="bg-[#0165FC] hover:bg-[#0165FC] border border-white text-white transform hover:scale-105 transition-transform duration-200 flex-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubUrl, '_blank')
                          }}
                        >
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your next project or just say hello!
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center border border-white">
                      <img src="/icons/gmail.svg" alt="Email" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">guan.lin.business@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center border border-white">
                      <img src="/icons/linkedin.svg" alt="Email" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-400">linkedin.com/in/guan-lin-ba1963228/</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center border border-white">
                      <img src="/icons/github.svg" alt="Email" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-400">github.com/glin19</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-[#252525] border border-white p-6">
                  {/* Validation Error */}
                  {validationError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      {validationError}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-3 bg-[#252525] border border-white rounded-lg text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 bg-[#252525] border border-white rounded-lg text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full p-3 bg-[#252525] border border-white rounded-lg text-white placeholder-gray-400"
                      ></textarea>
                    </div>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-600/20 border border-green-600/30 rounded-lg text-green-300">
                        Thank you! I will get back to you shortly.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-600/20 border border-red-600/30 rounded-lg text-red-300">
                        Sorry, there was an error sending your message. Please try again.
                      </div>
                    )}
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0165FC] hover:bg-[#0165FC] disabled:opacity-50 transform hover:scale-105 transition-transform duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </main>
    </>
  )
}