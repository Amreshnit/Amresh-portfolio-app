import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, CheckCircle2, MapPin, Rocket, Server, Sparkles } from "lucide-react";
import { formatExperienceDuration, formatExperienceYearsPlus } from "@/lib/portfolio-profile";

const Experience = () => {
  const experienceDuration = formatExperienceDuration();
  const experienceYears = formatExperienceYearsPlus();
  const experiences = [
    {
      title: "Software Engineer",
      company: "Kanerika Software Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "January 2023 - Present",
      type: "Internship to Full-time",
      summary:
        "Progressed from Backend Developer Intern to full-time Software Engineer, working across Java backend services, data engineering pipelines, enterprise integrations, and secure platform features.",
      sections: [
        {
          title: "Data Engineering - WGT Client",
          bullets: [
            "Architected an automated mailbox to SharePoint to PDF parsing to Excel to JSON pipeline, eliminating manual document handling for about 2,000 files per day.",
            "Cut dashboard refresh time to 15 minutes by flattening nested JSON into PostgreSQL materialized views for a 30+ KPI analytics dashboard.",
            "Improved query response times through targeted indexing and schema design for analytics-heavy workloads.",
          ],
        },
        {
          title: "Platform Engineering",
          bullets: [
            "Re-engineered AI extraction calls from synchronous to asynchronous execution to remove thread blocking on long-running requests.",
            "Resolved a recurring production exception caused by duplicate temporary table names during concurrent multi-threaded table creation.",
            "Extended platform data sources to Databricks, Azure Fabric, dynamic tenant-aware Azure Blob Storage, and MFA-secured mailbox connectors.",
          ],
        },
        {
          title: "Backend Development & APIs",
          bullets: [
            "Delivered 30+ production REST APIs with Spring Boot, supporting about 30,000 concurrent users with high availability.",
            "Standardized enterprise onboarding with Keycloak OAuth 2.0 and designed a multi-tenant RBAC model with strict tenant isolation.",
            "Integrated IBM Cognos with Power BI through Java services and Azure Functions, reducing manual reporting effort by about 50%.",
            "Implemented Quartz Scheduler retry logic, Spring Cloud Gateway routing, and JPA CriteriaBuilder analytics queries.",
          ],
        },
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Cloud Gateway",
        "PostgreSQL",
        "Apache Kafka",
        "Quartz",
        "Azure Fabric",
        "Databricks",
        "Azure Blob Storage",
        "Keycloak",
        "OAuth 2.0",
        "Docker",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Badge className="mb-4 border-emerald-400/30 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/15">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Experience updates automatically
              </Badge>
              <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">Professional Experience</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                {experienceDuration} of hands-on software engineering experience across backend systems, data pipelines,
                authentication, cloud integrations, and production support.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-4xl font-bold text-white">{experienceYears}</div>
              <div className="mt-1 text-sm text-slate-300">professional experience</div>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.title} className="rounded-lg border-white/10 bg-white text-slate-950 shadow-2xl shadow-black/20">
                <CardHeader className="border-b border-slate-200">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-lg bg-slate-950 p-2 text-white">
                          <Server className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <Badge className="w-fit bg-emerald-50 text-emerald-700 hover:bg-emerald-100">{exp.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 p-6">
                  <p className="text-lg leading-8 text-slate-700">{exp.summary}</p>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {exp.sections.map((section) => (
                      <div key={section.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                        <div className="mb-4 flex items-center gap-2 font-semibold text-slate-950">
                          <Rocket className="h-4 w-4 text-emerald-600" />
                          {section.title}
                        </div>
                        <ul className="space-y-3">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600">
                              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-slate-950">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="border border-slate-200 bg-white text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
