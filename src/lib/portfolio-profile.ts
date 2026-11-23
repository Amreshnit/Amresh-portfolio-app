export const PROFILE = {
  name: "Amresh Kumar",
  role: "AI & Full-Stack Software Engineer",
  shortRole: "AI & Full-Stack Engineer",
  location: "Hyderabad, India",
  email: "amreshnitjsr09@gmail.com",
  phone: "+91 9122501795",
  resumePath: "/Amresh_Kumar_Full_Stack_AI_Engineer.pdf",
  resumeFileName: "Amresh_Kumar_Full_Stack_AI_Engineer.pdf",
  professionalStartDate: {
    year: 2023,
    monthIndex: 0,
    day: 1,
  },
  coverLetterSkills: ["React", "Angular", "Java", "Python", "AI integrations", "Spring Boot"],
  skillGroups: [
    {
      category: "Languages & CS",
      items: ["Java", "Python", "SQL", "C++", "DSA", "OOP", "Multithreading", "Data Structures", "Design Patterns"],
    },
    {
      category: "Frontend & Product UI",
      items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend & APIs",
      items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "RESTful APIs", "Apache Kafka"],
    },
    {
      category: "AI & Product Engineering",
      items: ["AI Integrations", "Document Intelligence", "AI-assisted Development", "Vibe Coding"],
    },
    {
      category: "Data Engineering",
      items: ["ETL Pipelines", "Document Extraction", "Materialized Views", "JSON Processing", "Query Optimization", "Indexing"],
    },
    {
      category: "Databases & Cache",
      items: ["PostgreSQL", "MySQL", "SQL Server", "Redis Cache"],
    },
    {
      category: "Cloud & Platform",
      items: ["AWS EC2", "AWS S3", "AWS Lambda", "Azure Blob Storage", "Azure ACR", "Azure Fabric", "Databricks"],
    },
    {
      category: "Security & Delivery",
      items: ["Keycloak", "OAuth 2.0", "JWT", "Microsoft Entra ID", "RBAC", "SSO", "MFA", "Docker", "JUnit", "Mockito"],
    },
  ],
  highlights: [
    "Built end-to-end workflow features spanning the Angular UI, Java transformation logic, and automated specs.",
    "Integrated AI model discovery and document extraction into enterprise data workflows.",
    "Delivered 30+ production APIs and data workflows supporting analytics and platform operations.",
    "Worked across product UI, API, connector, data integration and platform services.",
  ],
};

const pluralize = (value: number, unit: string) => `${value} ${unit}${value === 1 ? "" : "s"}`;

export const getExperienceParts = (referenceDate = new Date()) => {
  const start = new Date(
    PROFILE.professionalStartDate.year,
    PROFILE.professionalStartDate.monthIndex,
    PROFILE.professionalStartDate.day
  );
  const end = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years: Math.max(years, 0),
    months: Math.max(months, 0),
    days: Math.max(days, 0),
  };
};

export const formatExperienceDuration = (referenceDate = new Date()) => {
  const { years, months, days } = getExperienceParts(referenceDate);
  const parts = [
    years ? pluralize(years, "year") : "",
    months ? pluralize(months, "month") : "",
    days ? pluralize(days, "day") : "",
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "less than a month";
};

export const formatExperienceYearsPlus = (referenceDate = new Date()) => {
  const { years, months, days } = getExperienceParts(referenceDate);
  const roundedHalfYear = years + (months > 6 || (months === 6 && days >= 0) ? 0.5 : 0);

  return Number.isInteger(roundedHalfYear)
    ? `${roundedHalfYear}+`
    : `${roundedHalfYear.toFixed(1)}+`;
};
