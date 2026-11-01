import type { Metadata } from "next";
import Link from "next/link";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import AdaptiveUIEngineDocument from "@/components/projects/AdaptiveUIEngineDocument";
import { adaptiveUIEngine } from "@/content/projects";
import { ArrowLeft, Tag, FileCode, Clock } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === adaptiveUIEngine.slug) {
    return {
      title: `${adaptiveUIEngine.title} | Parth`,
      description: adaptiveUIEngine.summary,
    };
  }

  return {
    title: "Project Detail | Portfolio",
    description: "Detailed breakdown of engineering project",
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  if (slug === adaptiveUIEngine.slug) {
    return (
      <ArchiveWorkshell activeSection="projects">
        <AdaptiveUIEngineDocument />
      </ArchiveWorkshell>
    );
  }

  return (
    <ArchiveWorkshell activeSection="projects">
      <article className="max-w-2xl mx-auto space-y-8 pr-2 sm:pr-4">
        <Link
          href="/projects"
          className="inline-flex min-h-11 xl:min-h-0 items-center gap-1.5 font-mono text-xs text-[#A1AAA0] hover:text-[#E9E0D0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8C6BE]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO PROJECTS DIRECTORY</span>
        </Link>

        {/* Stamped Paper Title Banner */}
        <div className="space-y-3">
          <div className="inline-block max-w-full bg-[#F4EFE6] text-[#121211] px-4 py-2 rounded-sm shadow-md border-b-2 border-[#642D3D]">
            <h1 className="archive-document-heading font-display font-extrabold uppercase text-[#121211]">
              PROJECT // {slug}
            </h1>
          </div>
          <p className="font-mono text-xs text-[#A1AAA0] tracking-wide">
            Project artifact inspection and architectural dossier.
          </p>
        </div>

        {/* Frontmatter Properties Block */}
        <div className="p-4 rounded bg-[#181716] border border-[rgba(233,224,208,0.1)] space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] text-[#C24141] uppercase tracking-wider font-bold">
            <span className="flex items-center gap-1.5">
              <Tag className="w-3 h-3 text-[#C24141]" />
              PROPERTIES
            </span>
            <span className="text-[#A1AAA0]/60 text-[9px]">YAML FRONTMATTER</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
            <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
              <FileCode className="w-3 h-3 opacity-60" />
              <span className="uppercase">RECORD_ID</span>
            </div>
            <div className="sm:col-span-2 px-2.5 py-1 bg-[#201e1d] border border-[#642D3D] rounded text-[#E9E0D0] text-[11px] truncate">
              PROJ-{slug.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
            <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
              <Clock className="w-3 h-3 opacity-60" />
              <span className="uppercase">STATUS</span>
            </div>
            <div className="sm:col-span-2 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#2a1f12] text-[#d97736] border border-[#d97736]/40 text-[10px] uppercase font-bold">
                DOSSIER SPECIMEN
              </span>
            </div>
          </div>
        </div>

        {/* Content Notice */}
        <div className="p-5 sm:p-6 rounded bg-[#181716] border-l-4 border-l-[#642D3D] border-y border-r border-[rgba(233,224,208,0.08)] space-y-3">
          <p className="font-mono text-xs text-[#A1AAA0] leading-relaxed">
            [ ARCHIVAL RECORD FOR {slug.toUpperCase()} ]
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D0]/70 leading-relaxed">
            Architecture breakdown, technical design decisions, and system specifications for this project will be populated here.
          </p>
        </div>
      </article>
    </ArchiveWorkshell>
  );
}
