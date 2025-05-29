import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Calendar, Database, Server, Code, Terminal, Settings, Cloud, Briefcase, Building, School, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "On-prem Data Center"] },
    { category: "CI/CD", items: ["GitHub Actions", "Azure DevOps", "Jenkins", "CodePipeline"] },
    { category: "Containerization", items: ["Docker", "Kubernetes", "ECS", "Portainer"] },
    { category: "IaC", items: ["Terraform", "Ansible", "CloudFormation"] },
    { category: "Monitoring", items: ["Grafana", "Loki", "Prometheus", "CloudWatch", "Zabbix"] },
    { category: "Scripting", items: ["Bash", "Python", "Yaml"] },
    { category: "Operating Systems", items: ["Linux (RHEL, Debian & Ubuntu)", "Windows"] },
    { category: "Source Control", items: ["GitHub", "GitLab"] },
    { category: "Code Quality", items: ["SonarQube"] },
  ];

  const experiences = [
    {
      company: "Go Rentals",
      position: "DevOps Engineer",
      type: "Contract",
      period: "Nov 2024 - Present · 7 mos",
      location: "London Area, United Kingdom · Remote",
      responsibilities: [
        "Infrastructure as Code: Utilized Terraform to deploy and manage ECS clusters in AWS, streamlining infrastructure provisioning and enhancing scalability.",
        "CI/CD Pipeline Development: Designed and implemented CI/CD pipelines to automate the build, test, and deployment processes, ensuring faster and more reliable software delivery.",
        "Automation with Ansible: Leveraged Ansible to automate the deployment of applications on servers, significantly reducing manual intervention and deployment time.",
        "GitLab Repository Management: Maintained GitLab repositories for over 50 servers, ensuring version control and collaboration across development teams.",
        "Container Monitoring: Monitored containerized applications using Grafana, Loki, and Promtail, providing real-time insights and improving system reliability.",
        "On-Prem Development Environment: Managed the on-prem development environment using Proxmox, facilitating efficient resource allocation and virtualization."
      ],
      skills: ["AWS CodePipeline", "Grafana"]
    },
    {
      company: "GAVS Technologies",
      position: "DevOps Engineer",
      type: "Full-time",
      period: "Mar 2023 - Oct 2023 · 8 mos",
      location: "Chennai, Tamil Nadu, India · Hybrid",
      responsibilities: [
        "Maintained 99.9% uptime across 100+ servers in 15+ AWS accounts with proactive monitoring using CloudWatch.",
        "Deployed scalable infrastructure with EC2, S3, and Load Balancer for high-availability solutions.",
        "Optimized CI/CD pipelines via Jenkins, integrating Git, Terraform, and Kubernetes for seamless deployments.",
        "Enhanced security protocols by managing IAM roles and performing routine key rotations.",
        "Boosted operational visibility with custom dashboards on Prometheus and Grafana."
      ],
      skills: ["AWS CodePipeline", "DevOps"]
    },
    {
      company: "Tata Communications Transformation Services (TCTS)",
      position: "Cloud Support Engineer",
      type: "Full-time",
      period: "Oct 2021 - Nov 2022 · 1 yr 2 mos",
      location: "Chennai, Tamil Nadu, India · Hybrid",
      responsibilities: [
        "Managed 50+ AWS EC2 instances, reducing cloud costs by 15% through resource optimization.",
        "Automated server provisioning using Terraform, achieving a 40% improvement in deployment speed.",
        "Created secure and cost-effective solutions with DynamoDB, Lambda, and VPC configurations.",
        "Ensured system reliability by implementing AWS-native load balancers and fault-tolerant architectures."
      ],
      skills: ["Jira", "Cloud Infrastructure"]
    },
    {
      company: "ACT FIBERNET",
      position: "Technical Support Engineer",
      type: "Full-time",
      period: "Oct 2017 - Jun 2021 · 3 yrs 8 mos",
      location: "Chennai, Tamil Nadu, India · On-site",
      responsibilities: [
        "Redesigned high-fault networks, reducing downtime by 20% through targeted optimizations.",
        "Supervised critical fault rectifications, achieving SLA compliance and receiving performance incentives.",
        "Collaborated with the NOC team during crises, ensuring minimal service disruption during natural disasters."
      ],
      skills: ["VLAN", "LAN Switching"]
    }
  ];

  return (
    <>
      {/* Hero Section with DevOps Background */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated code particles overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-green-400 font-mono text-sm animate-pulse">
            docker build -t app .
          </div>
          <div className="absolute top-32 right-20 text-blue-400 font-mono text-sm animate-pulse delay-1000">
            kubectl apply -f deployment.yaml
          </div>
          <div className="absolute bottom-32 left-20 text-yellow-400 font-mono text-sm animate-pulse delay-2000">
            terraform apply
          </div>
          <div className="absolute bottom-20 right-32 text-cyan-400 font-mono text-sm animate-pulse delay-500">
            aws s3 sync ./build s3://bucket
          </div>
          <div className="absolute top-1/2 left-1/4 text-purple-400 font-mono text-sm animate-pulse delay-1500">
            ansible-playbook deploy.yml
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohan Karthikeyan</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">DevOps Engineer</h2>
              <p className="text-lg mb-8">
                Specialized in cloud infrastructure, automation, and security with over 6 years of experience building and optimizing CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-devops-teal hover:bg-devops-teal/90">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link to="/resume">Download Resume</Link>
                </Button>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="https://github.com/mohankarthikeyan7" className="text-white hover:text-devops-teal transition-colors" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mohan-karthick" className="text-white hover:text-devops-teal transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:mohankarthick52@gmail.com" className="text-white hover:text-devops-teal transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative md:pb-24">
              {/* Profile picture - moved down to align with name and buttons */}
              <div className="absolute top-8 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-1/3 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-devops-teal shadow-xl">
                <img 
                  src="/lovable-uploads/f4a1f7ee-dadc-4661-8e14-74c7ad3c8d17.png" 
                  alt="Mohan Karthikeyan in graduation attire" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Professional info - moved down with additional spacing from profile picture */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-fade-in mt-72">
                <h3 className="text-xl font-medium mb-4">Professional Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail size={18} className="mr-3" />
                    <span>mohankarthick52@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ExternalLink size={18} className="mr-3" />
                    <span>mohankarthikeyan7@github.io</span>
                  </div>
                  <div className="pt-4 border-t border-white/20 mt-4">
                    <p className="text-gray-300">Post-graduate visa holder (valid until December 2026)</p>
                    <p className="text-gray-300">Currently in Liverpool – Open for Relocation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
                I'm a DevOps engineer with over 6 years of experience specializing in cloud infrastructure, 
                automation, and security in AWS, Azure, and on-premises (hybrid) environments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
                My expertise lies in containerization with Docker, orchestrating with Kubernetes, and 
                managing infrastructure as code with a strong focus on Terraform for AWS and other cloud providers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I thrive in fast-paced Agile environments and am passionate about implementing efficient CI/CD pipelines
                that enable seamless software delivery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-devops-navy mb-6">Key Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Cloud size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Cloud infrastructure management in AWS, Azure, and GCP</span>
                </li>
                <li className="flex items-start">
                  <Code size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Infrastructure as Code using Terraform, Ansible, and CloudFormation</span>
                </li>
                <li className="flex items-start">
                  <Server size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Container orchestration with Kubernetes and Docker</span>
                </li>
                <li className="flex items-start">
                  <Terminal size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Scripting and automation with Bash and Python</span>
                </li>
                <li className="flex items-start">
                  <Settings size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">CI/CD pipeline design and implementation</span>
                </li>
                <li className="flex items-start">
                  <Database size={20} className="text-devops-teal mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Monitoring and observability solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-devops-teal">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-devops-navy mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={18} className="text-devops-blue" />
                        <span className="font-medium text-gray-800">{exp.company}</span>
                        {exp.type && <span className="text-gray-500">· {exp.type}</span>}
                      </div>
                      <div className="flex items-center gap-2 mb-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4 text-gray-600">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="px-3 py-1 bg-devops-blue/10 text-devops-blue text-xs rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {exp.responsibilities.length > 0 && (
                    <div className="mt-4">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="text-gray-700 flex leading-relaxed">
                            <span className="text-devops-teal mr-3 flex-shrink-0 mt-1">→</span>
                            <span className="text-justify">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-devops-blue mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="project-card">
              <h3 className="text-xl font-bold text-devops-navy mb-2">AWS Cloud-Native Project</h3>
              <p className="text-gray-700 mb-4">
                Built and deployed a cloud-native monitoring web application using Python with AWS services
                including EKS, ECR, EC2, and IAM.
              </p>
              <div className="mb-4">
                <span className="tech-badge">AWS EKS</span>
                <span className="tech-badge">AWS ECR</span>
                <span className="tech-badge">EC2</span>
                <span className="tech-badge">IAM</span>
                <span className="tech-badge">Python</span>
              </div>
              <Link to="/projects" className="text-devops-teal hover:underline inline-flex items-center">
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="project-card">
              <h3 className="text-xl font-bold text-devops-navy mb-2">ELK Stack: Real-Time Log Monitoring</h3>
              <p className="text-gray-700 mb-4">
                Implemented a centralized logging and monitoring solution using the ELK Stack on AWS, featuring
                Filebeat, Logstash, and Kibana for real-time insights.
              </p>
              <div className="mb-4">
                <span className="tech-badge">Elasticsearch</span>
                <span className="tech-badge">Logstash</span>
                <span className="tech-badge">Kibana</span>
                <span className="tech-badge">Filebeat</span>
                <span className="tech-badge">AWS</span>
              </div>
              <Link to="/projects" className="text-devops-teal hover:underline inline-flex items-center">
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-devops-blue hover:bg-devops-blue/90">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-devops-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and would love to discuss how my DevOps expertise can benefit your team.
          </p>
          <Button asChild className="bg-white text-devops-teal hover:bg-gray-100">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
