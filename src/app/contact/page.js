import { about, socials, seo } from "@/data/data";

export const metadata = {
    title: `Contact | ${seo.title}`,
    description: `Contact ${about.name} about research and projects.`,
};

export default function Contact() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Contact
                </h1>
                <p className="text-base text-base-content/80">
                    I’m happy to hear about research and collaboration opportunities.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                    <a href={socials.email} className="hover:underline font-medium">{about.email} ↗</a>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">LinkedIn ↗</a>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">GitHub ↗</a>
                </div>
            </main>
        </div>
    );
}
