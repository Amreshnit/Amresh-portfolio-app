import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { PROFILE, formatExperienceDuration, formatExperienceYearsPlus } from "@/lib/portfolio-profile";

const skillPresentation = [
  { icon: Code2, color: "text-sky-600 bg-sky-50 border-sky-100" },
  { icon: GitBranch, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  { icon: Database, color: "text-violet-600 bg-violet-50 border-violet-100" },
  { icon: Layers, color: "text-amber-600 bg-amber-50 border-amber-100" },
  { icon: Cloud, color: "text-cyan-600 bg-cyan-50 border-cyan-100" },
  { icon: Shield, color: "text-rose-600 bg-rose-50 border-rose-100" },
];

const About = () => {
  const experienceDuration = formatExperienceDuration();
  const experienceYears = formatExperienceYearsPlus();
  const achievements = [
    {
      icon: Zap,
      title: "Automation at scale",
      text: "Architected a mailbox to SharePoint to PDF parsing pipeline that processes about 2,000 files per day.",
    },
    {
      icon: TrendingUp,
      title: "Faster analytics",
      text: "Designed PostgreSQL materialized views and indexing for a 30+ KPI dashboard with 15-minute refreshes.",
    },
    {
      icon: Shield,
      title: "Enterprise security",
      text: "Standardized Keycloak OAuth 2.0, Microsoft Entra ID, SSO, MFA, and tenant-isolated RBAC patterns.",
    },
    {
      icon: Target,
      title: "Production reliability",
      text: "Resolved concurrency issues, introduced async extraction calls, and improved Quartz job retry behavior.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Badge className="mb-4 border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100">
              Backend systems, data workflows, and secure platforms
            </Badge>
            <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I am a Java Backend and Data Engineer with {experienceDuration} of professional experience at Kanerika
              Software. I started as an intern in January 2023 and moved into a full-time software engineering role in
              June 2023, working across platform engineering, enterprise integrations, and data-heavy backend systems.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <Card className="rounded-lg border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-slate-950 p-2 text-white">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">Professional Summary</h3>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-7">
                    <p>
                      My core strength is building production-grade Java services: Spring Boot APIs, secure authentication
                      flows, tenant-aware access control, and database-backed business workflows.
                    </p>
                    <p>
                      Recently, my work has expanded into data engineering with document extraction, JSON processing,
                      PostgreSQL performance tuning, Azure data services, Databricks integrations, and analytics platforms.
                    </p>
                    <p>
                      I care about clean service boundaries, measurable performance improvements, and systems that remain
                      understandable when the traffic, data volume, and business rules grow.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { number: experienceYears, label: "Experience" },
                  { number: "30+", label: "REST APIs" },
                  { number: "2K/day", label: "Files automated" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="text-2xl font-bold text-slate-950">{stat.number}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map(({ icon: Icon, title, text }) => (
                  <Card key={title} className="rounded-lg border-slate-200 shadow-sm">
                    <CardContent className="p-5">
                      <Icon className="mb-4 h-6 w-6 text-emerald-600" />
                      <h4 className="font-semibold text-slate-950">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="mb-5 text-xl font-semibold text-slate-950">Technical Skills</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {PROFILE.skillGroups.map((skillGroup, index) => {
                    const presentation = skillPresentation[index % skillPresentation.length];
                    const Icon = presentation.icon;
                    return (
                      <Card key={skillGroup.category} className="rounded-lg border-slate-200 shadow-sm">
                        <CardContent className="p-5">
                          <div className="mb-4 flex items-center gap-3">
                            <div className={`rounded-lg border p-2 ${presentation.color}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <h4 className="font-semibold text-slate-950">{skillGroup.category}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
