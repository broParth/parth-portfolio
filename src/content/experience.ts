export type ActivityCategory =
  | "CLUBS & COMMUNITY"
  | "HACKATHONS & TECHNICAL ACTIVITIES"
  | "CERTIFICATIONS & LEARNING";

export interface ActivityRecord {
  id: string;
  category: ActivityCategory;
  title: string;
  organization: string;
  description: string;
  status: string;
}

export const currentStatus = {
  level: "UNDERGRADUATE STUDENT",
  discipline: "COMPUTER SCIENCE & ENGINEERING",
  institution: "New Horizon College of Engineering",
} as const;

export const activityRecords: readonly ActivityRecord[] = [
  {
    id: "ACTIVITY 01",
    category: "CLUBS & COMMUNITY",
    title: "CTF: CACHE ME IF YOU CAN",
    organization: "CSEH · Cybersecurity Club",
    description:
      "Involved in organizing the CTF event and created SQL injection challenges for it.",
    status: "COMMUNITY RECORD",
  },
  {
    id: "ACTIVITY 02",
    category: "HACKATHONS & TECHNICAL ACTIVITIES",
    title: "SAP Hackfest",
    organization: "Theme · Inclusive Workforce",
    description: "Reached the finals.",
    status: "FINALIST",
  },
  {
    id: "ACTIVITY 03",
    category: "HACKATHONS & TECHNICAL ACTIVITIES",
    title: "Smart India Hackathon",
    organization: "Problem Statement · PS 034",
    description:
      "Hackathon project: an AI-based packaged commodity compliance checking system for Legal Metrology.",
    status: "HACKATHON PROJECT",
  },
  {
    id: "ACTIVITY 04",
    category: "CERTIFICATIONS & LEARNING",
    title: "Computer Networks",
    organization: "NPTEL",
    description: "Learning programme / course",
    status: "LEARNING PROGRAMME",
  },
  {
    id: "ACTIVITY 05",
    category: "CERTIFICATIONS & LEARNING",
    title: "DBMS",
    organization: "Scaler",
    description: "Learning programme / course.",
    status: "LEARNING PROGRAMME",
  },
];

export const professionalStatus = {
  label: "AVAILABILITY",
  statement: "Open to internships and software engineering opportunities.",
} as const;
