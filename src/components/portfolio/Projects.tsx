import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, CloudCog, Database, FileText, Github, ShieldCheck } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Document Extraction Pipeline",
      description:
        "End-to-end data pipeline that moves documents from mailbox and SharePoint into parsed PDFs, Excel outputs, and JSON payloads for downstream analytics.",
      icon: FileText,
      result: "About 2,000 files processed daily",
      technologies: ["Java", "Spring Boot", "PDF Parsing", "SharePoint", "JSON", "PostgreSQL"],
      highlights: [
        "Removed manual document handling from the client workflow.",
        "Standardized multi-step extraction into a reliable backend process.",
        "Prepared structured data for reporting and analytics consumers.",
      ],
    },
    {
      title: "30+ KPI Analytics Dashboard Backend",
      description:
        "Analytics backend for KPI dashboards using PostgreSQL materialized views, flattened JSON structures, and targeted indexing for faster reporting.",
      icon: BarChart3,
      result: "15-minute dashboard refresh cycle",
      technologies: ["PostgreSQL", "Materialized Views", "Indexing", "JPA CriteriaBuilder", "REST APIs"],
      highlights: [
        "Flattened nested JSON into query-friendly columnar tables.",
        "Improved dashboard response time with indexing and query tuning.",
        "Supported advanced filtering for client-facing analytics views.",
      ],
    },
    {
      title: "Multi-Cloud Data Source Integrations",
      description:
        "Expanded platform ingestion beyond the native SaaS model to support Databricks, Azure Fabric, dynamic Azure Blob Storage, and MFA mailbox connectors.",
      icon: CloudCog,
      result: "Broader enterprise deployment options",
      technologies: ["Azure Fabric", "Databricks", "Azure Blob Storage", "Azure ACR", "MFA", "REST APIs"],
      highlights: [
        "Reworked static storage into a tenant-aware dynamic storage model.",
        "Added new secured mailbox ingestion paths for enterprise clients.",
        "Supported ongoing R&D for Databricks Marketplace readiness.",
      ],
    },
    {
      title: "Secure Backend Platform Services",
      description:
        "Production-grade Spring Boot services covering authentication, API routing, scheduler reliability, async execution, and tenant-aware access control.",
      icon: ShieldCheck,
      result: "30+ APIs and about 30,000 concurrent users",
      technologies: ["Spring Boot", "Keycloak", "OAuth 2.0", "Spring Cloud Gateway", "Quartz", "Docker"],
      highlights: [
        "Standardized SSO, JWT, RBAC, and tenant isolation patterns.",
        "Moved long-running AI extraction calls to asynchronous execution.",
        "Improved scheduled job reliability with Quartz retry handling.",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Badge className="mb-4 border-slate-200 bg-white text-slate-700 hover:bg-white">
              <Database className="mr-2 h-3.5 w-3.5" />
              Recent backend and data engineering work
            </Badge>
            <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">Key Projects</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A more current view of the systems I have worked on recently, based on production responsibilities from
              backend services, platform integrations, and data engineering.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.title} className="rounded-lg border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="rounded-lg bg-slate-950 p-3 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                        {project.result}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-slate-950">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="leading-7 text-slate-600">{project.description}</p>

                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-emerald-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="border border-slate-200 bg-slate-50 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
              <a href="https://github.com/Amreshnit" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View GitHub profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
