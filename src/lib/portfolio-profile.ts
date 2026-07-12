export const PROFILE = {
  name: "Amresh Kumar",
  role: "Software Engineer - Java Backend & Data Engineering",
  shortRole: "Java Backend & Data Engineer",
  location: "Hyderabad, India",
  email: "amreshnitjsr09@gmail.com",
  phone: "+91 9122501795",
  resumePath: "/Amresh_Kumar_Software_Engineer.pdf",
  resumeFileName: "Amresh_Kumar_Software_Engineer.pdf",
  professionalStartDate: {
    year: 2023,
    monthIndex: 0,
    day: 1,
  },
  coverLetterSkills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Azure", "Databricks"],
  skillGroups: [
    {
      category: "Languages & CS",
      items: ["Java", "SQL", "C++", "DSA", "OOP", "Multithreading", "Design Patterns"],
    },
    {
      category: "Backend & APIs",
      items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "RESTful APIs", "Apache Kafka"],
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
    "Automated document extraction pipeline processing about 2,000 files per day.",
    "Built a 30+ KPI analytics dashboard with PostgreSQL materialized views and targeted indexing.",
    "Delivered 30+ production REST APIs supporting about 30,000 concurrent users.",
    "Extended platform data support across Databricks, Azure Fabric, Azure Blob Storage, and MFA-secured mailbox sources.",
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
