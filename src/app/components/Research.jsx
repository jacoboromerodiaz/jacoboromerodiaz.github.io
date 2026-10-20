import { publications } from "@/data/data";

function PublicationCard({ publication }) {
    return (
        <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border-2 border-base-content/20 p-4 transition-colors hover:border-base-content/80"
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="font-semibold leading-snug">{publication.title}</h3>
                </div>
                <span aria-hidden="true" className="shrink-0 transition-transform group-hover:rotate-45">↗</span>
            </div>
            <p className="mt-2 text-sm text-base-content/80">{publication.authors}</p>
            <p className="mt-1 text-xs text-base-content/70">{publication.venue} · {publication.year} · {publication.type}</p>
        </a>
    );
}

export default function Research() {
    const featuredPublications = publications.filter(publication => publication.featured);

    return (
        <section className="mt-10 scroll-mt-14 flex flex-col gap-3" id="research">
            <div className="flex items-end justify-between gap-3">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Relevant Publications</h2>
                <a
                    href="https://scholar.google.com/citations?user=IyqJoWgAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm underline hover:text-base-content/80"
                >
                    See all research ↗
                </a>
            </div>
            <ul className="flex flex-col gap-2">
                {featuredPublications.map(publication => (
                    <li key={publication.title}><PublicationCard publication={publication} /></li>
                ))}
            </ul>
        </section>
    );
}
