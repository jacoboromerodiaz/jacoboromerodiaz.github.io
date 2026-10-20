import { about, socials } from "@/data/data";

export default function Profile() {
    return (
        <>
            {about.photo ? (
                <img src={about.photo} className="w-[70px] h-[70px] rounded-[50%] object-cover object-center" alt={`${about.name}'s profile`} />
            ) : (
                <div className="w-[70px] h-[70px] rounded-[50%] border border-base-content/20" aria-hidden="true" />
            )}
            <div className="flex gap-[5px] items-center mt-1">
                <h1 className="text-2xl font-semibold">{about.name}</h1>
            </div>
            <p className="mt-1.5 text-base text-base-content/60">{about.role}</p>
            <div className="flex items-center mt-3 gap-3">
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 10v7M7 7h.01M11 17v-7h3v1a3 3 0 0 1 5 2v4M11 13v4" />
                    </svg>
                </a>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>
                <a href={socials.email} aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" />
                    </svg>
                </a>
            </div>
        </>
    );
}
