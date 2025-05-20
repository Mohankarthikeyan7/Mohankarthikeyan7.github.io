
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  // Define project data
  const projects = [
    {
      id: 1,
      title: "AWS Cloud-Native Project",
      description: "Successfully built & deployed a cloud-native monitoring web application using Python and deployed it using various AWS services including EKS, ECR, EC2, and IAM.",
      details: [
        "Amazon EKS – for orchestrating containers",
        "Amazon ECR – for storing Docker images",
        "EC2 – for managing compute resources",
        "IAM – for secure access control"
      ],
      tags: ["AWS EKS", "AWS ECR", "EC2", "IAM", "Python", "Cloud-Native"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "ELK Stack DevOps Project",
      description: "Implemented a centralized logging and monitoring solution using the ELK Stack (Elasticsearch, Logstash, Kibana) using AWS Instances.",
      details: [
        "Filebeat: Installed on EC2 instance to ship logs efficiently.",
        "Logstash: Parsing and transforming incoming logs with custom grok patterns.",
        "Kibana: Providing powerful visualizations and dashboards for real-time monitoring.",
        "AWS: Leveraging EC2, IAM, and VPC configurations for scalable and secure deployment."
      ],
      tags: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "AWS EC2", "Monitoring"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "CI/CD Pipeline Implementation",
      description: "Implemented a project that brought together a full CI/CD pipeline with automation from end to end, working hands-on with a powerful set of tools and services.",
      details: [
        "GitHub Actions: For CI/CD pipeline",
        "Terraform: To provision EKS clusters, EC2, VPC, IAM, Security Groups",
        "AWS (EKS, EC2, IAM, VPC, SG): Core infrastructure",
        "Maven: For automating testing, compiling, and packaging",
        "SonarQube: To maintain code quality through static analysis",
        "Trivy: For scanning vulnerabilities in Docker images",
        "Docker: For containerization and artifact storage"
      ],
      tags: ["GitHub Actions", "Terraform", "AWS", "Maven", "SonarQube", "Trivy", "Docker"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Web Application Deployment",
      description: "Deployed a web application using AWS EC2, ECR, IAM, Maven, Docker, and Terraform.",
      details: [
        "Created an IAM user and launched an EC2 instance using Terraform.",
        "Installed the necessary dependencies (Java, Docker, AWS CLI) on the instance.",
        "Cloned the application from GitHub and built it using Maven.",
        "Tagged the application and pushed the Docker image to ECR for storage."
      ],
      tags: ["AWS EC2", "AWS ECR", "IAM", "Maven", "Docker", "Terraform"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Power of Math – AWS Serverless App",
      description: "Built a simple math calculation app entirely using AWS services, focusing on serverless computing and cloud-native application design.",
      details: [
        "AWS Amplify – for front-end hosting and CI/CD",
        "AWS Lambda – to run backend logic for math operations",
        "API Gateway (REST API) – to expose Lambda functions securely",
        "DynamoDB – to store calculation history",
        "IAM – for access control and permissions",
        "Visual Studio Code – as the development environment",
        "Draw.io – to make the architectural diagram"
      ],
      tags: ["AWS Amplify", "AWS Lambda", "API Gateway", "DynamoDB", "IAM", "Serverless"],
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Personal Notes Management App",
      description: "Built a Flask-based web application to manage learning notes, keeping them safe, organized, and version-controlled.",
      details: [
        "Used Python Flask to develop the application backend",
        "Packaged it with Docker to make it portable and easy to deploy",
        "Stored the data securely in a GitHub repository",
        "Used VSCode for development and version control workflows"
      ],
      tags: ["Python", "Flask", "Docker", "GitHub", "VSCode"],
      image: "/placeholder.svg"
    }
  ];

  // Filter state
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on active tag
  const filteredProjects = activeTag 
    ? projects.filter(project => project.tags.includes(activeTag))
    : projects;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-devops-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-300">
            A showcase of my DevOps projects and implementations
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Filter tags */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Filter by technology:</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeTag === null 
                  ? 'bg-devops-teal text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTag === tag 
                    ? 'bg-devops-teal text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-devops-navy mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Components:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="tech-badge">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-badge">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No projects found with the selected filter.</p>
            <button
              onClick={() => setActiveTag(null)}
              className="mt-4 text-devops-teal hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
