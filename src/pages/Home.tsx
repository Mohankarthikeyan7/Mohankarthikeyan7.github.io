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
      skills: ["AWS", "GCP"]
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
      skills: ["AWS", "Azure"]
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
      skills: ["Cloud Infrastructure", "AWS"]
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
      skills: ["Networking", "Security"]
    }
  ];

  return (
    <>
      {/* Hero Section with Enhanced DevOps Background */}
      <section className="relative py-20 text-white overflow-hidden futuristic-bg">
        {/* Enhanced floating tech particles and commands with neon glow and improved positioning */}
        <div className="absolute inset-0 opacity-40">
          {/* DevOps commands with enhanced neon glow and dynamic typing animation */}
          <div className="absolute top-10 left-10 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation">
            docker build -t app:latest .
          </div>
          <div className="absolute top-32 right-20 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-1000">
            kubectl apply -f deployment.yaml
          </div>
          <div className="absolute bottom-32 left-20 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-2000">
            terraform apply --auto-approve
          </div>
          <div className="absolute bottom-20 right-32 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation delay-500">
            aws s3 sync ./build s3://bucket
          </div>
          <div className="absolute top-1/2 left-1/4 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-1500">
            ansible-playbook deploy.yml -i inventory
          </div>
          <div className="absolute top-20 right-1/3 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-3000">
            helm install app ./chart --values prod.yaml
          </div>
          <div className="absolute bottom-40 left-1/3 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation delay-2500">
            docker-compose up -d --scale web=3
          </div>
          <div className="absolute top-40 left-1/2 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-4000">
            git push origin feature/ci-pipeline
          </div>
          <div className="absolute bottom-60 right-1/4 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-3500">
            jenkins build deploy-pipeline
          </div>
          <div className="absolute top-60 right-10 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation delay-1800">
            npm run build && npm run deploy
          </div>
          
          {/* Additional enhanced DevOps commands */}
          <div className="absolute top-5 left-1/3 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-4500">
            kubectl get pods --all-namespaces
          </div>
          <div className="absolute bottom-10 left-10 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-5000">
            terraform plan -var-file=prod.tfvars
          </div>
          <div className="absolute top-3/4 right-20 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation delay-5500">
            docker logs -f --tail=100 container
          </div>
          <div className="absolute top-1/4 right-1/4 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-6000">
            aws ec2 describe-instances --region us-east-1
          </div>
          <div className="absolute bottom-1/2 left-1/2 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-6500">
            kubectl scale deployment app --replicas=5
          </div>
          <div className="absolute top-1/3 left-10 text-cyber-blue font-mono text-sm neon-glow typing-animation float-animation delay-7000">
            ansible -m ping all --limit production
          </div>
          <div className="absolute bottom-20 right-1/3 text-cyber-cyan font-mono text-sm neon-glow typing-animation float-animation delay-7500">
            helm upgrade app ./chart --atomic
          </div>
          <div className="absolute top-50 left-1/4 text-cyber-purple font-mono text-sm neon-glow typing-animation float-animation delay-8000">
            prometheus --config.file=/etc/prometheus.yml
          </div>
          
          {/* Enhanced DevOps symbols with improved positioning */}
          <div className="absolute top-16 left-1/2 text-cyber-cyan opacity-50 float-animation delay-1000 glow-cyan">
            <Server size={28} />
          </div>
          <div className="absolute top-1/3 right-20 text-cyber-purple opacity-50 float-animation delay-2000 glow-purple">
            <Database size={24} />
          </div>
          <div className="absolute bottom-1/3 left-16 text-cyber-blue opacity-50 float-animation delay-3000 glow-blue">
            <Cloud size={26} />
          </div>
          <div className="absolute top-1/4 left-20 text-cyber-cyan opacity-50 float-animation delay-1500 glow-cyan">
            <Terminal size={22} />
          </div>
          <div className="absolute bottom-1/4 right-16 text-cyber-purple opacity-50 float-animation delay-2500 glow-purple">
            <Settings size={24} />
          </div>
          <div className="absolute top-3/4 left-1/3 text-cyber-blue opacity-50 float-animation delay-3500 glow-blue">
            <Code size={23} />
          </div>
          
          {/* More enhanced symbols */}
          <div className="absolute top-10 right-1/4 text-cyber-cyan opacity-50 float-animation delay-4000 glow-cyan">
            <Briefcase size={22} />
          </div>
          <div className="absolute bottom-40 right-10 text-cyber-purple opacity-50 float-animation delay-4500 glow-purple">
            <Server size={26} />
          </div>
          <div className="absolute top-2/3 right-1/3 text-cyber-blue opacity-50 float-animation delay-5000 glow-blue">
            <Database size={24} />
          </div>
          <div className="absolute bottom-10 left-1/4 text-cyber-cyan opacity-50 float-animation delay-5500 glow-cyan">
            <Cloud size={28} />
          </div>

          {/* Additional floating particles for more dynamic effect */}
          <div className="absolute top-1/5 left-3/4 text-cyber-blue font-mono text-xs neon-glow typing-animation float-animation delay-8500">
            grafana-server --config=/etc/grafana.ini
          </div>
          <div className="absolute bottom-1/5 right-1/5 text-cyber-cyan font-mono text-xs neon-glow typing-animation float-animation delay-9000">
            docker swarm init --advertise-addr
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyber-cyan bg-clip-text text-transparent">
                Mohan Karthikeyan
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-cyber-blue">DevOps Engineer</h2>
              <p className="text-lg mb-8 text-gray-300">
                Specialized in cloud infrastructure, automation, and security with over 6 years of experience building and optimizing CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-cyan transition-all duration-300 glow-blue">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white border-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-blue transition-all duration-300">
                  <Link to="/resume">Download Resume</Link>
                </Button>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="https://github.com/mohankarthikeyan7" className="text-white hover:text-cyber-blue transition-colors hover-lift" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mohan-karthick" className="text-white hover:text-cyber-cyan transition-colors hover-lift" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:mohankarthick52@gmail.com" className="text-white hover:text-cyber-purple transition-colors hover-lift" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative md:pb-24">
              {/* Profile picture with futuristic glow */}
              <div className="absolute top-8 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-1/3 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyber-blue shadow-xl glow-blue hover-lift">
                <img 
                  src="/lovable-uploads/f4a1f7ee-dadc-4661-8e14-74c7ad3c8d17.png" 
                  alt="Mohan Karthikeyan in graduation attire" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Professional info with glass morphism */}
              <div className="glass-card p-6 animate-fade-in mt-72 hover-lift">
                <h3 className="text-xl font-medium mb-4 text-cyber-cyan">Professional Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail size={18} className="mr-3 text-cyber-blue" />
                    <span>mohankarthick52@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <ExternalLink size={18} className="mr-3 text-cyber-purple" />
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
      <section className="py-20 futuristic-bg">
        <div className="container-custom">
          <h2 className="section-heading">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 hover-lift">
              <p className="text-lg text-white mb-6 leading-relaxed text-justify">
                I'm a DevOps engineer with over 6 years of experience specializing in cloud infrastructure, 
                automation, and security in AWS, Azure, and on-premises (hybrid) environments.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed text-justify">
                My expertise lies in containerization with Docker, orchestrating with Kubernetes, and 
                managing infrastructure as code with a strong focus on Terraform for AWS and other cloud providers.
              </p>
              <p className="text-lg text-white leading-relaxed text-justify">
                I thrive in fast-paced Agile environments and am passionate about implementing efficient CI/CD pipelines
                that enable seamless software delivery.
              </p>
            </div>
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-xl font-bold text-cyber-cyan mb-6">Key Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Cloud size={20} className="text-cyber-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">Cloud infrastructure management in AWS, Azure, and GCP</span>
                </li>
                <li className="flex items-start">
                  <Code size={20} className="text-cyber-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">Infrastructure as Code using Terraform, Ansible, and CloudFormation</span>
                </li>
                <li className="flex items-start">
                  <Server size={20} className="text-cyber-cyan mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">Container orchestration with Kubernetes and Docker</span>
                </li>
                <li className="flex items-start">
                  <Terminal size={20} className="text-cyber-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">Scripting and automation with Bash and Python</span>
                </li>
                <li className="flex items-start">
                  <Settings size={20} className="text-cyber-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">CI/CD pipeline design and implementation</span>
                </li>
                <li className="flex items-start">
                  <Database size={20} className="text-cyber-cyan mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white leading-relaxed">Monitoring and observability solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 futuristic-bg">
        <div className="container-custom">
          <h2 className="section-heading">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-900/70 backdrop-blur-md border border-gray-700/50 border-l-4 border-l-cyber-blue hover-lift shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cyber-cyan mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={18} className="text-cyber-blue" />
                        <span className="font-bold text-white">{exp.company}</span>
                        {exp.type && <span className="font-bold text-white">· {exp.type}</span>}
                      </div>
                      <div className="flex items-center gap-2 mb-2 font-bold text-white">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4 font-bold text-white">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded-full font-medium border border-cyber-blue/30">
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
                          <li key={respIdx} className="font-bold text-white flex leading-relaxed">
                            <span className="text-gray-400 mr-3 flex-shrink-0 mt-1 font-bold">→</span>
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
      <section className="py-20 futuristic-bg">
        <div className="container-custom">
          <h2 className="section-heading">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover-lift"
              >
                <h3 className="text-lg font-bold text-cyber-blue mb-4">{skill.category}</h3>
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
      <section className="py-20 futuristic-bg">
        <div className="container-custom">
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="project-card hover-lift">
              <h3 className="text-xl font-bold text-white mb-2">AWS Cloud-Native Project</h3>
              <p className="text-gray-200 mb-4">
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
              <Link to="/projects" className="text-cyber-cyan hover:text-cyber-blue transition-colors inline-flex items-center">
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="project-card hover-lift">
              <h3 className="text-xl font-bold text-white mb-2">ELK Stack: Real-Time Log Monitoring</h3>
              <p className="text-gray-200 mb-4">
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
              <Link to="/projects" className="text-cyber-cyan hover:text-cyber-blue transition-colors inline-flex items-center">
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-cyan transition-all duration-300 glow-blue">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and would love to discuss how my DevOps expertise can benefit your team.
          </p>
          <Button asChild className="bg-white text-cyber-blue hover:bg-gray-100 glow-cyan">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
