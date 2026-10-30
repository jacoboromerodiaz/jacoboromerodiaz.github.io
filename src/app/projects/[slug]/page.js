import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/data/data";

export function generateStaticParams() {
    return allProjects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = allProjects.find(item => item.slug === slug);
    if (!project) return {};
    return { title: `${project.title} | Jacobo Romero Díaz`, description: project.description };
}

function ProjectFigure({ image }) {
    return (
        <figure className="overflow-hidden rounded-2xl border border-base-content/20">
            <div className="flex items-center justify-center bg-base-200/50 p-3 sm:p-5">
                <img src={image.src} alt={image.alt} className="max-h-[400px] w-full rounded-md object-contain" />
            </div>
            <figcaption className="border-t border-base-content/15 px-4 py-3 text-xs leading-relaxed text-base-content/60">
                {image.caption}
            </figcaption>
        </figure>
    );
}

function PeixeScanPreview({ project }) {
    const screenshots = [project.heroImage, ...project.gallery];

    return (
        <figure className="overflow-hidden rounded-2xl border border-base-content/20">
            <div className="flex snap-x gap-2 overflow-x-auto bg-base-200/50 p-3 sm:gap-3 sm:p-5">
                {screenshots.map(image => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="w-[136px] shrink-0 snap-start rounded-lg shadow-sm sm:min-w-0 sm:flex-1"
                    />
                ))}
            </div>
            <figcaption className="border-t border-base-content/15 px-4 py-3 text-xs text-base-content/60">
                PeixeScan Mobile App
            </figcaption>
        </figure>
    );
}

function ProjectHighlights({ highlights }) {
    if (!highlights?.length) return null;

    return (
        <div className="grid grid-cols-2 gap-6 border-y border-base-content/20 py-5" aria-label="Project highlights">
            {highlights.map(highlight => (
                <div key={highlight.label}>
                    <p className="text-2xl font-semibold leading-none sm:text-3xl">{highlight.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-base-content/60 sm:text-sm">{highlight.label}</p>
                </div>
            ))}
        </div>
    );
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const projectIndex = allProjects.findIndex(item => item.slug === slug);
    if (projectIndex === -1) notFound();
    const project = allProjects[projectIndex];
    const nextProject = allProjects[(projectIndex + 1) % allProjects.length];
    const isPeixeScan = project.slug === "peixescan";

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-8 pb-8">
                <Link href="/projects" className="w-fit text-sm underline underline-offset-2 hover:text-base-content/70">← All Projects</Link>

                <header className="flex flex-col gap-4">
                    <p className="text-sm text-base-content/60">{project.eyebrow}</p>
                    <div className="flex items-center gap-4">
                        {project.appIcon && (
                            <a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label="View PeixeScan on the App Store" className="shrink-0">
                                <svg viewBox="0 0 100 100" role="img" aria-label="PeixeScan app icon" className="h-14 w-14 drop-shadow-sm">
                                    <defs>
                                        <clipPath id="peixescan-ios-icon">
                                            <path d="M50 0 C73 0 86 0 93 7 C100 14 100 27 100 50 C100 73 100 86 93 93 C86 100 73 100 50 100 C27 100 14 100 7 93 C0 86 0 73 0 50 C0 27 0 14 7 7 C14 0 27 0 50 0 Z" />
                                        </clipPath>
                                    </defs>
                                    <image href={project.appIcon} width="100" height="100" clipPath="url(#peixescan-ios-icon)" />
                                </svg>
                            </a>
                        )}
                        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h1>
                    </div>
                    <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">{project.description}</p>
                    <p className="text-sm text-base-content/60">{project.tags.join(" · ")}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                        {project.appStore && <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-base-content/70">App Store ↗</a>}
                        {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-base-content/70">{project.slug === "multilingual-asr" ? "Challenge results" : "GitHub"} ↗</a>}
                        {project.challenge && <a href={project.challenge} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-base-content/70">About the challenge ↗</a>}
                        {project.paper && <a href={project.paper} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-base-content/70">{project.slug === "mri-crossmodality" ? "Read thesis" : "Read paper"} ↗</a>}
                    </div>
                </header>

                {isPeixeScan ? <PeixeScanPreview project={project} /> : project.heroImage ? <ProjectFigure image={project.heroImage} /> : null}
                <ProjectHighlights highlights={project.highlights} />

                <div className={project.highlights?.length ? "" : "border-t border-base-content/20"}>
                    {project.sections.map(section => (
                        <section key={section.heading} className="grid gap-2 border-b border-base-content/20 py-5 sm:grid-cols-[135px_1fr] sm:gap-6">
                            <h2 className="text-sm font-semibold">{section.heading}</h2>
                            <p className="text-sm leading-relaxed text-base-content/80 sm:text-base">{section.body}</p>
                        </section>
                    ))}
                </div>

                {!isPeixeScan && project.gallery?.map(image => <ProjectFigure key={image.src} image={image} />)}

                <Link href={nextProject.link ?? `/projects/${nextProject.slug}`} className="group flex items-center justify-between gap-4 border-t border-base-content/20 pt-5">
                    <span>
                        <span className="block text-xs text-base-content/60">Next project</span>
                        <span className="mt-1 block font-semibold group-hover:underline group-hover:underline-offset-2">{nextProject.title}</span>
                    </span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </main>
        </div>
    );
}
