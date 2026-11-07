/**
 * Page-specific "File Properties" for the workspace's right panel.
 * Every value is derived from the existing content sources, so the panel
 * changes with the open document and never shows invented data.
 */

import { aboutContent } from "@/content/about";
import { activityRecords } from "@/content/experience";
import { projects } from "@/content/projects";
import { contactInfo } from "@/content/contact";

export interface FileProperty {
  label: string;
  value: string;
}

export interface FilePropertySet {
  /** Shown as "FILE PROPERTIES FOR …" */
  subject: string;
  items: FileProperty[];
}

const pad = (n: number) => String(n).padStart(2, "0");

function projectProperties(slug: string): FilePropertySet | null {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  return {
    subject: project.title.toUpperCase(),
    items: [
      { label: "CATEGORY", value: project.category },
      ...("contribution" in project
        ? [
            { label: "MY ROLE", value: project.contribution.role },
            {
              label: "COLLABORATOR",
              value: `${project.contribution.collaborator} — ${project.contribution.collaboratorRole}`,
            },
          ]
        : []),
      { label: "PRIMARY STACK", value: project.technologies.slice(0, 3).join(" · ") },
    ],
  };
}

export function getFileProperties(pathname: string): FilePropertySet {
  if (pathname === "/projects") {
    const technologies = new Set(projects.flatMap((p) => [...p.technologies]));
    return {
      subject: "PROJECTS",
      items: [
        { label: "DOCUMENTED PROJECTS", value: pad(projects.length) },
        { label: "TECHNOLOGIES USED", value: `${technologies.size} across all projects` },
        { label: "SOURCE", value: contactInfo.github.href.replace("https://", "") },
      ],
    };
  }

  if (pathname.startsWith("/projects/")) {
    const props = projectProperties(pathname.slice("/projects/".length));
    if (props) return props;
  }

  if (pathname === "/experience") {
    const categories = new Set(activityRecords.map((r) => r.category));
    return {
      subject: "EXPERIENCE",
      items: [
        {
          label: "RECORDS",
          value: `${pad(activityRecords.length)} activities across ${categories.size} categories`,
        },
        ...activityRecords
          .filter((r) => r.status === "FINALIST")
          .map((r) => ({ label: "HIGHLIGHT", value: `${r.title} — finalist` })),
      ],
    };
  }

  if (pathname === "/contact") {
    return {
      subject: "CONTACT",
      items: [
        { label: "EMAIL", value: contactInfo.email },
        { label: "CHANNELS", value: "Email · LinkedIn · GitHub" },
      ],
    };
  }

  // About, and any page without its own set (e.g. 404): the personnel quick reference.
  return { subject: "PARTH", items: aboutContent.quickReference.items };
}
