'use client'

import React, { useState } from 'react'
import { Search, Briefcase, MapPin, Clock } from 'lucide-react'

interface JobOpening {
  title: string
  department: string
  location: string
  type: string
  description: string
}

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const jobOpenings: JobOpening[] = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'We are seeking a talented software engineer to join our core product team.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Create intuitive and beautiful user experiences for our platform.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive our digital marketing strategies and brand growth.'
    },
    {
      title: 'Customer Support Representative',
      department: 'Customer Success',
      location: 'Pune, India',
      type: 'Full-time',
      description: 'Provide exceptional support and enhance customer experience.'
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Analyze and interpret complex data to drive business decisions.'
    }
  ]

  // Convert Set to array using Array.from()
  const departments = ['All', ...Array.from(new Set(jobOpenings.map(job => job.department)))]

  const filteredJobs = jobOpenings.filter(job => 
    (selectedDepartment === 'All' || job.department === selectedDepartment) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Build Your Career at Minutos
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join a dynamic team that's transforming the way people experience local services. 
          We believe in innovation, collaboration, and personal growth.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { 
            icon: <Briefcase className="text-red-500" size={40} />, 
            title: 'Growth Opportunities', 
            description: 'Continuous learning and career development programs.' 
          },
          { 
            icon: <Clock className="text-red-500" size={40} />, 
            title: 'Flexible Work Culture', 
            description: 'Hybrid work models and work-life balance.' 
          },
          { 
            icon: <MapPin className="text-red-500" size={40} />, 
            title: 'Collaborative Environment', 
            description: 'Work with talented professionals across India.' 
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Job Openings */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search jobs" 
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
          </div>
          
          <select 
            className="px-4 py-3 border border-gray-300 rounded-lg"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Job List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-2 space-x-4">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <p className="text-gray-700">{job.description}</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              No job openings match your search criteria. Check back later!
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-red-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Don't See Your Dream Role?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We're always looking for exceptional talent. Send us your profile, and we'll keep it on file for future opportunities.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
          Send Your Profile
        </button>
      </div>
    </div>
  )
}

export default CareersPage