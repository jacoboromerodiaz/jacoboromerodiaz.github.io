// Public portfolio content.
export const about = {
    name: "Jacobo Romero Díaz",
    role: "Data Science MSc student at EPFL",
    about: "I’m a Data Science master’s student at EPFL with a background in Biomedical Engineering and Physics. I work at the frontier of machine learning, exploring how it can help us understand speech, images, language, and the world around us.",
    email: "jacobo.romerodiaz@epfl.ch",
    photo: "/profile.jpg",
};

export const seo = {
    title: `${about.name} | Data Science & Machine Learning`,
    description: "Jacobo Romero Díaz is a Data Science student at EPFL working on machine learning, speech technologies, biomedical imaging, and applied AI.",
    keywords: "Jacobo Romero Díaz, EPFL, data science, machine learning, speech, biomedical imaging, portfolio",
};

export const socials = {
    linkedin: "https://linkedin.com/in/jacobo-romero-diaz",
    github: "https://github.com/jacoboromerodiaz",
    email: `mailto:${about.email}`,
};

// Every item below appears in the supplied CV or a project already in the workspace.
export const skills = [
    { name: "Python", alt: "Python logo", icon: "/skills/python.svg" },
    { name: "PyTorch", alt: "PyTorch logo", icon: "/skills/pytorch.svg" },
    { name: "Pandas", alt: "Pandas logo", icon: "/skills/pandas.svg" },
    { name: "NumPy", alt: "NumPy logo", icon: "/skills/numpy.svg" },
    { name: "PostgreSQL", alt: "PostgreSQL logo", icon: "/skills/postgresql.svg" },
    { name: "FastAPI", alt: "FastAPI logo", icon: "/skills/fastapi.svg" },
    { name: "Supabase", alt: "Supabase logo", icon: "/skills/supabase.svg" },
    { name: "Docker", alt: "Docker logo", icon: "/skills/docker.svg" },
    { name: "Git", alt: "Git logo", icon: "/skills/git.svg" },
];

export const allProjects = [
    {
        slug: "peixescan",
        title: "PeixeScan",
        eyebrow: "Mobile app · Computer vision",
        description: "An iPhone app for recording catches, exploring species, and identifying fish from a photo.",
        tags: ["React Native", "TypeScript", "FastAPI", "Supabase", "Computer vision"],
        featured: true,
        image: "/projects/peixescan/slide-1.png",
        appStore: "https://apps.apple.com/es/app/peixescan/id6797203314",
        appIcon: "/projects/peixescan/app-icon.png",
        heroImage: { src: "/projects/peixescan/slide-1.png", alt: "PeixeScan introduction and fish identification screen" },
        sections: [
            { heading: "The app", body: "Log a catch, browse the species catalogue, see your progress, and share catches from one mobile app." },
            { heading: "Image analysis", body: "Photos go through object detection and image segmentation to support fish identification and measurement." },
            { heading: "Under the hood", body: "I built the mobile app in React Native and TypeScript, with a FastAPI service and Supabase for accounts and catch data." },
        ],
        gallery: [
            { src: "/projects/peixescan/slide-2.png", alt: "PeixeScan species catalogue screen", caption: "Explore the species catalogue" },
            { src: "/projects/peixescan/slide-3.png", alt: "PeixeScan catch statistics and map screen", caption: "Track catches and progress" },
            { src: "/projects/peixescan/slide-4.png", alt: "PeixeScan community post screen", caption: "Share catches with the community" },
        ],
    },
    {
        slug: "listening-or-reading",
        title: "Listening or Reading?",
        eyebrow: "Research · Speech and language",
        description: "An interpretability study of whether speech translation models actually use audio when text context is also available.",
        tags: ["Python", "Speech translation", "Interpretability", "PyTorch"],
        featured: true,
        source: "https://github.com/jacoboromerodiaz/context-mixing-audio-text",
        paper: "https://www.isca-archive.org/interspeech_2026/romerodiaz26_interspeech.html",
        heroImage: { src: "/projects/listening-or-reading/speechllm.png", alt: "Speech to text translation model diagram from the project repository", caption: "Speech and transcript context enter the translation model together" },
        gallery: [
            { src: "/projects/listening-or-reading/alignment.png", alt: "Forced alignment and attribution visualization from the project repository", caption: "Tracing audio and text contributions with forced alignment" },
        ],
        sections: [
            { heading: "The question", body: "When a model translates speech with both audio and written context, which source actually shapes its answer?" },
            { heading: "The method", body: "I combined token level attribution with forced alignment to trace translations back to audio segments and text tokens, then compared the patterns across languages." },
            { heading: "Publication", body: "Published at Interspeech 2026 as “Listening or Reading? Evaluating Speech Awareness in Chain-of-Thought Speech-to-Text Translation.”" },
        ],
    },
    {
        slug: "gpt-2-from-scratch",
        title: "ChatGPT-2 from Scratch",
        eyebrow: "Language models · Engineering",
        description: "A 124M parameter GPT-2 project spanning byte pair tokenization, pretraining, instruction tuning, and reinforcement learning.",
        tags: ["Python", "PyTorch", "LLMs"],
        featured: true,
        source: "https://github.com/jacoboromerodiaz/gpt-2",
        highlights: [
            { value: "124M", label: "model parameters" },
            { value: "10B", label: "FineWeb-Edu training tokens" },
        ],
        sections: [
            { heading: "Pretraining", body: "I trained a GPT-2 model on FineWeb-Edu, with checkpointing, HellaSwag evaluation, and a data pipeline that supports single and multi GPU training." },
            { heading: "Post-training", body: "I fine-tuned the model on Alpaca and Dolly instruction data, then used GRPO and a pretrained reward model for the reinforcement learning stage." },
            { heading: "Tokenizer", body: "I also implemented GPT-2 byte pair encoding from scratch on a separate branch of the repository." },
        ],
    },
    {
        slug: "multilingual-asr",
        title: "Speech Recognition for 21 Underrepresented Languages",
        eyebrow: "Speech recognition · Challenge",
        description: "A multilingual speech recognition system for Mozilla Common Voice’s spontaneous speech shared task.",
        tags: ["Python", "Speech recognition", "Multilingual AI"],
        source: "https://www.codabench.org/competitions/10820/#/results-tab",
        challenge: "https://community.mozilladatacollective.com/shared-task-mozilla-common-voice-spontaneous-speech-asr/",
        highlights: [
            { value: "21", label: "languages in the challenge" },
            { value: "3rd", label: "place in the shared task" },
        ],
        sections: [
            { heading: "Context", body: "The challenge focused on spontaneous speech in 21 underserved languages. Limited transcribed audio makes these languages harder to serve with conventional ASR systems." },
            { heading: "My work", body: "I built a multilingual recognition pipeline and evaluated it on the Common Voice shared task. The submission placed third on the challenge leaderboard." },
        ],
    },
    {
        slug: "mri-crossmodality",
        title: "Reconstructing Missing MRI Sequences with Deep Learning",
        eyebrow: "Biomedical imaging · Thesis",
        description: "My Physics thesis on generating missing MRI sequences from scans that are already available.",
        tags: ["Python", "U-Net", "pix2pix", "Medical imaging"],
        source: "https://github.com/jacoboromerodiaz/mri-crossmodality",
        paper: "https://diposit.ub.edu/items/a0f274e7-234c-4c0c-b469-2f7adc4e35ff",
        heroImage: { src: "/projects/mri-crossmodality/mri.png", alt: "Side-by-side MRI input, ground truth, U-Net, and pix2pix predictions from the project repository", caption: "Input, target, and model predictions across MRI sequences" },
        gallery: [
            { src: "/projects/mri-crossmodality/samples.png", alt: "MRI slices in six acquisition sequences from the project repository", caption: "The same anatomy across MRI sequences" },
            { src: "/projects/mri-crossmodality/models.png", alt: "U-Net and pix2pix architecture diagrams from the project repository", caption: "U-Net and pix2pix architectures" },
        ],
        sections: [
            { heading: "Problem", body: "An MRI exam can be missing a sequence needed for comparison or further analysis. The question was whether a model could reconstruct it from aligned scans of the same anatomy." },
            { heading: "Method", body: "I trained and compared U-Net and pix2pix models for cross sequence synthesis, examining their predictions alongside the real target images." },
        ],
    },
];

export const projects = {
    pinProjects: allProjects.filter(project => project.featured).map(project => ({ ...project, link: `/projects/${project.slug}` })),
    otherProjects: allProjects.filter(project => !project.featured).map(project => ({ ...project, link: `/projects/${project.slug}` })),
};

export const experience = [
    {
        title: "Undergraduate Research Engineer at Barcelona Supercomputing Center",
        role: "Undergraduate Research Engineer",
        organization: "Barcelona Supercomputing Center · Speech Technologies Laboratory",
        date: "Nov 2024 – Jan 2026",
        location: "Barcelona, Spain",
        description: "Developed evaluation pipelines for multilingual speech to text translation, studying interpretability and robustness across European languages. Investigated Catalan–Spanish code switching and low resource ASR methods.",
    },
    {
        title: "Research Intern at University of Cambridge",
        role: "Research Intern",
        organization: "University of Cambridge",
        date: "Nov 2023 – Apr 2024",
        location: "Cambridge, United Kingdom",
        description: "Developed U-Net models for semantic and instance segmentation of histopathology images to support AI assisted coeliac disease diagnosis. Built Python pipelines for quantitative tissue analysis.",
    },
    {
        title: "Amgen Scholar at ETH Zürich",
        role: "Amgen Scholar",
        organization: "ETH Zürich · Laboratory for Bone Biomechanics",
        date: "Jul 2023 – Sep 2023",
        location: "Zürich, Switzerland",
        description: "Built Python workflows for 3D micro-CT image processing and in silico analysis of osteoporosis treatments; presented results at the Cambridge Symposium 2023.",
    },
];

export const education = [
    {
        degree: "MSc in Data Science",
        school: "École polytechnique fédérale de Lausanne (EPFL)",
        date: "Sep 2026 – Jul 2028",
        detail: "Supported by a “la Caixa” Foundation postgraduate fellowship.",
    },
    {
        degree: "BSc in Biomedical Engineering & BSc in Physics",
        school: "University of Barcelona",
        date: "Sep 2020 – Jun 2026",
        detail: "Minor in Applied Physics. Biomedical Engineering: 8.95/10 (3rd in cohort); Physics: 8.18/10.",
    },
];

export const publications = [
    {
        title: "Listening or Reading? Evaluating Speech Awareness in Chain-of-Thought Speech-to-Text Translation",
        authors: "J. Romero-Díaz, G. I. Gállego, O. Pareras, F. Costa, J. Hernando, C. España-Bonet",
        venue: "Interspeech 2026",
        type: "Conference paper",
        year: "2026",
        url: "https://www.isca-archive.org/interspeech_2026/romerodiaz26_interspeech.html",
        featured: true,
    },
    {
        title: "Interpretable machine learning for coeliac disease diagnosis: quantitative morphometry of duodenal biopsies",
        authors: "R. Bryant, J. Romero Diaz, et al.",
        venue: "medRxiv",
        type: "Preprint",
        year: "2026",
        url: "https://www.medrxiv.org/content/10.64898/2026.06.02.26354731v1",
        featured: true,
    },
    {
        title: "Synthetic Cross-sequence Generation of MRI Images using Deep Learning Networks",
        authors: "J. Romero Díaz",
        venue: "University of Barcelona",
        type: "Bachelor’s thesis",
        year: "2026",
        url: "https://diposit.ub.edu/items/a0f274e7-234c-4c0c-b469-2f7adc4e35ff",
    },
    {
        title: "Interpretable machine learning-based detection of coeliac disease",
        authors: "F. Jaeckle, R. Bryant, J. Denholm, J. Romero Diaz, et al.",
        venue: "BMJ Digital Health & AI",
        type: "Journal article",
        year: "2025",
        url: "https://bmjdigitalhealth.bmj.com/content/1/1/e000023",
        featured: true,
    },
    {
        title: "Optimizing ASR for Catalan-Spanish Code-Switching: A Comparative Analysis of Methodologies",
        authors: "C. Mena, P. Serra, J. Romero, et al.",
        venue: "Interspeech 2025",
        type: "Conference paper",
        year: "2025",
        url: "https://www.isca-archive.org/interspeech_2025/mena25_interspeech.html",
    },
    {
        title: "Interpretable Machine Learning based detection of coeliac disease: the human way",
        authors: "F. Jaeckle et al.",
        venue: "The Journal of Pathology, 264 (supplement)",
        type: "Conference abstract",
        year: "2024",
        url: "https://pathsocjournals.onlinelibrary.wiley.com/doi/full/10.1002/path.6365",
    },
];

export const awards = [
    { title: "“la Caixa” Foundation Postgraduate Fellowship", detail: "Full postgraduate scholarship for a master’s degree abroad · 2026" },
    { title: "Amgen Scholarship", detail: "Research scholarship at ETH Zürich · 2023" },
    { title: "Mellores Expedientes 2020", detail: "Top 20 academic records in Galicia · 2020" },
];

export const languages = ["Spanish · native", "Galician · native", "English · bilingual", "Catalan · fluent", "French · working proficiency", "Italian · intermediate"];
