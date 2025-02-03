import React, { useEffect } from 'react';
import { Users, Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TeamPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const teamMembers = [
    {
      name: "Mohammed Mudabbir Pasha",
      role: "Founder & Lead Developer",
      description: "Full-stack developer with expertise in React, Node.js, and cloud technologies.",
      email: "sohailmudabbir@gmail.com",
      linkedin: "https://www.linkedin.com/in/mohammed-mudabbir-pasha/",
      github: "#"
    },
    {
      name: "Siddeshwar Reddy",
      role: "UI/UX Design Lead",
      description: "Creative director specializing in user-centered design and brand identity.",
      email: "designer@webhostdevs.com",
      linkedin: "https://www.linkedin.com/in/siddesh7077/",
      github: "#"
    },
    {
      name: "David Chen",
      role: "Backend Developer",
      description: "Expert in building robust server architectures and database optimization.",
      email: "backend@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Bharadwaj",
      role: "Frontend Developer",
      description: "Specialized in creating responsive and accessible web interfaces using modern frameworks.",
      email: "frontend@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Krishna Chaitanya",
      role: "DevOps Engineer",
      description: "Managing cloud infrastructure and implementing CI/CD pipelines for seamless deployment.",
      email: "devops@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Akshat",
      role: "Mobile App Developer",
      description: "Creating cross-platform mobile applications using React Native and Flutter.",
      email: "mobile@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sri Chandana",
      role: "SEO Specialist",
      description: "Optimizing web presence and implementing effective digital marketing strategies.",
      email: "seo@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Nirvignya",
      role: "Project Manager",
      description: "Ensuring smooth project execution and client satisfaction through effective communication.",
      email: "pm@webhostdevs.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Vennela",
      role: "Quality Assurance Lead",
      description: "Maintaining high standards through comprehensive testing and quality control processes.",
      email: "qa@webhostdevs.com",
      linkedin: "#",
      github: "#"
    }
  ];
  return (
    <div id="team" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header section matching Projects */}
      <section className="bg-blue-600 dark:bg-blue-800 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 mt-12">Our Team</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mt-2">
          Meet the talented individuals who make WebHostDevs your go-to web development solution.
        </p>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg p-6 shadow-lg bg-white dark:bg-slate-800">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-500 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-500 dark:text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href={`mailto:${member.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;