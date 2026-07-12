import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Cloud,
  Database,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PROFILE, formatExperienceDuration, formatExperienceYearsPlus } from "@/lib/portfolio-profile";
import profileImage from "@/assets/amresh-profile.jpg";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  const experienceDuration = formatExperienceDuration();
  const experienceYears = formatExperienceYearsPlus();
  const focusAreas = [
    { icon: Database, label: "Data pipelines", value: "2K files/day" },
    { icon: ShieldCheck, label: "Enterprise auth", value: "SSO, MFA, RBAC" },
    { icon: Cloud, label: "Cloud data", value: "Azure + Databricks" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef7f2_48%,#f8fafc_100%)]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <Badge className="w-fit border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Open to backend and data engineering roles
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                {PROFILE.name}
                <span className="mt-3 block text-2xl font-semibold text-slate-600 sm:text-3xl lg:text-4xl">
                  {PROFILE.role}
                </span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                I build secure Spring Boot platforms, high-throughput REST APIs, and data workflows that turn messy
                enterprise inputs into reliable product features. My current experience updates automatically from
                January 2023: <span className="font-semibold text-slate-900">{experienceDuration}</span>.
              </p>
            </div>

            <div className="grid max-w-3xl gap-3 sm:grid-cols-3">
              {focusAreas.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <Icon className="mb-3 h-5 w-5 text-emerald-600" />
                  <div className="text-sm font-medium text-slate-500">{label}</div>
                  <div className="mt-1 text-base font-semibold text-slate-950">{value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-slate-950 text-white hover:bg-slate-800"
                onClick={() => scrollTo("projects")}
              >
                View project work
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white/80">
                <a href={PROFILE.resumePath} download={PROFILE.resumeFileName}>
                  <Download className="mr-2 h-4 w-4" />
                  Download resume
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap">
              {[
                { Icon: MapPin, text: PROFILE.location },
                { Icon: Phone, text: PROFILE.phone },
                { Icon: Mail, text: PROFILE.email },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-slate-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
              <img
                src={profileImage}
                alt="Amresh Kumar"
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-8 rounded-lg border border-slate-200 bg-white p-4 shadow-xl sm:-left-10">
              <div className="text-3xl font-bold text-slate-950">{experienceYears}</div>
              <div className="text-sm text-slate-500">experience</div>
            </div>
            <div className="absolute -right-2 top-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 shadow-xl sm:-right-8">
              <div className="text-sm font-medium text-emerald-700">Latest focus</div>
              <div className="mt-1 text-base font-semibold text-slate-950">Backend + Data</div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button variant="ghost" size="icon" onClick={() => scrollTo("about")} aria-label="Scroll to About">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
