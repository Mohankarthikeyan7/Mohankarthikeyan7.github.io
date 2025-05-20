
import React from 'react';
import { Button } from "@/components/ui/button";
import { DownloadIcon } from 'lucide-react';

const Resume = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-devops-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-gray-300">
            Download my resume or view it online
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-devops-navy">Mohan Karthikeyan</h2>
              <p className="text-gray-600">DevOps Engineer</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-devops-teal hover:bg-devops-teal/90 flex items-center">
                <DownloadIcon size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-devops-navy mb-4">Professional Summary</h3>
            <p className="text-gray-700 mb-2">
              Dynamic DevOps professional with over 5+ years of experience specializing in cloud infrastructure, 
              automation, and security in AWS and Azure and on-premises (hybrid) environments.
            </p>
            <p className="text-gray-700 mb-2">
              Exceptional Skills in Container technologies, AWS, GCP and Azure Cloud, Linux Administration, 
              CI/CD Integration, working in fast paced Agile Environment.
            </p>
            <p className="text-gray-700">
              Expert in containerization with Docker, orchestrating with Kubernetes, and managing infrastructure 
              as code with a strong focus on Terraform for AWS and other cloud providers.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-devops-navy mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex">
                <span className="font-medium min-w-[180px]">Source Code Management:</span>
                <span className="text-gray-700">Github, GitLab</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">CI/CD Tool:</span>
                <span className="text-gray-700">GitHub Actions, Azure Devops, Jenkins</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Containerization Tool:</span>
                <span className="text-gray-700">Docker, Kubernetes, ECS</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Code Quality Check Tool:</span>
                <span className="text-gray-700">SonarQube</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">AWS Services:</span>
                <span className="text-gray-700">EC2, VPC, IAM, SG, Lambda</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Container Management:</span>
                <span className="text-gray-700">Portainer</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">IaC Tools:</span>
                <span className="text-gray-700">Ansible, CloudFormation & Terraform</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Scripting Languages:</span>
                <span className="text-gray-700">Bash, Python</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Operating System:</span>
                <span className="text-gray-700">Windows, Linux (RHEL & Ubuntu)</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Monitoring and Logging:</span>
                <span className="text-gray-700">Grafana, Loki, Prometheus, Cloudwatch</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Cloud Platform:</span>
                <span className="text-gray-700">AWS, Azure Cloud, GCP</span>
              </div>
              <div className="flex">
                <span className="font-medium min-w-[180px]">Networking:</span>
                <span className="text-gray-700">TCP/IP, TLS, DNS, VPN, Load balancer, SSL</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-devops-navy mb-4">Resume File</h3>
            <p className="text-gray-700 mb-4">
              The resume PDF is stored in the GitHub repository and can be updated frequently.
              Current version: <span className="font-medium">mohan_karthikeyan_cv.pdf</span>
            </p>
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-devops-blue/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-devops-blue">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">mohan_karthikeyan_cv.pdf</h4>
                    <p className="text-sm text-gray-600">Last updated: May 20, 2025</p>
                  </div>
                </div>
                <Button className="bg-devops-blue hover:bg-devops-blue/90 flex items-center">
                  <DownloadIcon size={18} className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Need an updated version or have questions? Feel free to reach out.
            </p>
            <Button asChild variant="outline" className="border-devops-teal text-devops-teal hover:bg-devops-teal/10">
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
