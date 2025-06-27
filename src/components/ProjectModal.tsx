'use client'

import { useState } from 'react'
import { Project } from '@/data/projects'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 overflow-hidden">
        <Card className="bg-gray-900 border-gray-700 text-white overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-300 hover:text-white"
          >
            X
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Image Gallery Section */}
            <div className="relative h-120 bg-gray-800">
              {project.images.length > 0 ? (
                <>
                  {/* Main Image */}
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-gray-800"
                  />
                  
                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-white"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-white"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex 
                              ? 'bg-white' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No images available
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {project.shortDescription}
                    </p>
                  </div>
                  <div className="flex gap-3 ml-4">
                    {project.liveUrl && (
                      <Button 
                        asChild
                        className="bg-[#0165FC] hover:bg-[#0165FC] border border-white text-white transform hover:scale-105 transition-transform duration-200 flex-1"
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        asChild
                        variant="outline" 
                        className="bg-[#0165FC] hover:bg-[#0165FC] hover:text-white border border-white text-white transform hover:scale-105 transition-transform duration-200 flex-1"
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  About This Project
                </h3>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Project Details
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Category:</span>
                      <span className="capitalize">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span>{project.completedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-green-400">Completed</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Technologies Used
                  </h4>
                  <div className="text-gray-300">
                    <ul className="space-y-1">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}