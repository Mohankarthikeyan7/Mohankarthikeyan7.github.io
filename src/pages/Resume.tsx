
import React from 'react';
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileText, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Since you're building locally and pushing dist folder, the resume should be in the public folder
    const link = document.createElement('a');
    link.href = '/resume/mohan_karthikeyan_cv.pdf';
    link.download = 'mohan_karthikeyan_cv.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Hero Section */}
      <div className="py-20 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyber-cyan bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-gray-300">
            Download my resume or view it online
          </p>
        </div>
      </div>

      <div className="container-custom pb-12">
        <div className="glass-card p-8 mb-8 hover-lift">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Mohan Karthikeyan</h2>
              <p className="text-cyber-cyan">DevOps Engineer</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-cyan transition-all duration-300 glow-blue flex items-center"
              >
                <DownloadIcon size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Professional Summary</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Dynamic DevOps professional with over 5+ years of experience specializing in cloud infrastructure, 
                automation, and security in AWS and Azure and on-premises (hybrid) environments.
              </p>
              <p className="leading-relaxed">
                Exceptional Skills in Container technologies, AWS, GCP and Azure Cloud, Linux Administration, 
                CI/CD Integration, working in fast paced Agile Environment.
              </p>
              <p className="leading-relaxed">
                Expert in containerization with Docker, orchestrating with Kubernetes, and managing infrastructure 
                as code with a strong focus on Terraform for AWS and other cloud providers.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Source Code Management:</span>
                  <span className="text-gray-300">Github, GitLab</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">CI/CD Tool:</span>
                  <span className="text-gray-300">GitHub Actions, Azure Devops, Jenkins</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Containerization Tool:</span>
                  <span className="text-gray-300">Docker, Kubernetes, ECS</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Code Quality Check Tool:</span>
                  <span className="text-gray-300">SonarQube</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">AWS Services:</span>
                  <span className="text-gray-300">EC2, VPC, IAM, SG, Lambda</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Container Management:</span>
                  <span className="text-gray-300">Portainer</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">IaC Tools:</span>
                  <span className="text-gray-300">Ansible, CloudFormation & Terraform</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Scripting Languages:</span>
                  <span className="text-gray-300">Bash, Python</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Operating System:</span>
                  <span className="text-gray-300">Windows, Linux (RHEL & Ubuntu)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Monitoring and Logging:</span>
                  <span className="text-gray-300">Grafana, Loki, Prometheus, Cloudwatch</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Cloud Platform:</span>
                  <span className="text-gray-300">AWS, Azure Cloud, GCP</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white mb-2">Networking:</span>
                  <span className="text-gray-300">TCP/IP, TLS, DNS, VPN, Load balancer, SSL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyber-cyan mb-4">Resume File</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The resume PDF is stored in the public/resume folder and gets deployed with the dist folder to GitHub Pages.
              Current version: <span className="font-medium text-white">mohan_karthikeyan_cv.pdf</span>
            </p>
            <div className="glass-card p-6 border border-white/20 hover-lift">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-cyber-blue/20 p-3 rounded-lg mr-4 border border-cyber-blue/30">
                    <FileText size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">mohan_karthikeyan_cv.pdf</h4>
                    <div className="flex items-center text-sm text-gray-300 mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>Available in public/resume folder</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-cyan transition-all duration-300 glow-blue flex items-center"
                >
                  <DownloadIcon size={18} className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Need an updated version or have questions? Feel free to reach out.
            </p>
            <Button asChild variant="outline" className="bg-transparent text-cyber-cyan border-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-blue transition-all duration-300">
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
