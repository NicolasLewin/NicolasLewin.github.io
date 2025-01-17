export const portfolioData = {
  en: {
    header: {
      name: "Nicolas Lewin",
      title: "Fullstack Software Engineer"
    },
    studies: [
      {
        degree: "Master MIAGE IKSEM (english courses) with apprenticeship",
        school: "Université Paris I Panthéon-Sorbonne",
        year: "2020-2022",
        description: "",
        logo: "/logos/studies/paris1_logo.png"
      },
      {
        degree: "Licence MIAGE with apprenticeship",
        school: "Université Paris I Panthéon-Sorbonne",
        year: "2019-2020",
        description: "",
        logo: "/logos/studies/paris1_logo.png"
      },
      {
        degree: "BTS Informatique (Services Informatiques aux Organisations), option Solutions Logicielles et Applications Métier",
        school: "University Name",
        year: "2014-2018",
        description: "",
        logo: "/logos/studies/saintaspais_logo.png"
      }
    ],
    experience: [
      {
        title: "Fullstack Software Engineer",
        company: "Sopra Steria",
        period: "Oct. 2022 - Feb. 2024",
        responsibilities: [
          "- Development of features of several ministry applications (sport, health, culture), in JavaScript, Angular, PHP, Symfony",
          "- Development of bug fixes",
          "- Test and qualify applications",
          "- Application containerization with Docker and Podman",
          "- Training courses on various technologies (React, Java/Spring Boot, Angular)"
        ],
        logo: "/logos/experiences/sopra_logo.png"
      },
      {
        title: "Junior developer",
        company: "Sopra Steria",
        period: "Sept. 2020 - Sept. 2022",
        responsibilities: [
          "- Third-party application maintenance on various applications of the Musée du Louvre and ministries (bug fixes, development of features, digital accessibility, etc.), in PHP / Symfony"
        ],
        logo: "/logos/experiences/sopra_logo.png"
      },
      {
        title: "Junior developer",
        company: "City Hall of Vitry-sur-Seine",
        period: "Sept. 2019 - Aug. 2020",
        responsibilities: [
          "- Development of PHP applications",
          "- Development of bug fixes",
          "- Development of an application to display the voting results for municipal elections",
          "- Training course on GIS (Geographic Information System) with ArcGIS Web AppBuilder and development of widgets in JavaScript"
        ],
        logo: "/logos/experiences/vitry_logo.png"
      },
      {
        title: "Junior developer JAVA and JavaScript / React",
        company: "Groupe HN",
        period: "Jan. 2019 - Feb. 2019",
        responsibilities: [
          "- Development of bug fixes for Java applications with SonarQube",
          "- Introduction to the React library"
        ],
        logo: "/logos/experiences/hn_logo.png"
      },
      {
        title: "Junior developer PHP",
        company: "Valeurs Investissements Patrimoine",
        period: "May 2018 - June 2018",
        responsibilities: [
          "- Development of a PHP application to generate life insurance reports based on data submitted on the graphical user interface."
        ],
        logo: "/logos/experiences/VIP_logo.png"
      }
    ],
    projects: [
      {
        name: "Music Player",
        date: "2024",
        description: "Web application allowing users to upload and listen to music",
        technologies: ["React", "NextJS", "TypeScript", "TailwindCSS", "PostgreSQL", "Supabase", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://music-player-six-rouge.vercel.app"
      },
      {
        name: "Social Media",
        date: "2024",
        description: "Social network allowing users to express themselves and react in comments",
        technologies: ["React", "NextJS", "TypeScript", "TailwindCSS", "MongoDB", "Prisma", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://social-media-one-topaz.vercel.app"
      },
      {
        name: "Media Tracker",
        date: "2024",
        description: "Web application allowing users to add movies and video games they've seen/watched and write a review for them",
        technologies: ["React", "NextJS", "TypeScript", "TailwindCSS","PostgreSQL", "Supabase", "Prisma", "APIs", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://media-tracker-six.vercel.app"
      },
      {
        name: "Weather App",
        date: "2024",
        description: "Small web application allowing users to see the current weather and temperature of the city of their choice",
        technologies: ["React", "NextJS", "TypeScript","Tailwind CSS", "APIs", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://weather-app-seven-beige-57.vercel.app"
      },
      {
        name: "Portfolio",
        date: "2024",
        description: "This portfolio itself",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "Github Pages"],
      },
      {
        name: "Business creation project",
        date: "2022",
        description: "Business creation project under real-life conditions. Tutored by the company PIVOD and the MIAGE Entrepreneurs association.",
        technologies: ["Businness Plan", "Market Research", "Partner contact", "UI/UX design"]
      },
      {
        name: "State of the art thesis on Image Captioning using Deep Learning",
        date: "2021",
        description: "I wrote a thesis regarding the current known methods (at the time) for image captioning using deep learning",
        technologies: ["Artificial Intelligence", "Deep Learning"]
      },
      {
        name: "GiantMix",
        date: "2021",
        description: "Development of a simplified e-commerce site using different types of NoSQL DB.",
        technologies: ["PHP", "Mongo DB", "ElasticSearch", "Redis"],
        githubLink: "https://github.com/NicolasLewin/giantmix"
      },
      {
        name: "Infogare",
        date: "2021",
        description: "Development of a traveler information system using the various frameworks of the Jakarta EE specification (JPA, JAXB, CDI, JMS, JAX-RS - Jersey)",
        technologies: ["Java", "Jakarta EE", "H2"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Monster collector application/game",
        date: "2020",
        description: "A Symfony application/game allowing users to collect monsters by various means",
        technologies: ["PHP", "Symfony", "Bootstrap" ,"MySQL"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Car-sharing application",
        date: "2019",
        description: "Application that allows users to find occupied or unoccupied cars for their trips",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MVC", "MySQL"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Application for an original product",
        date: "2018",
        description: "Creation of a application dedicated to a totally original product, as part of a small business start-up project.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      },

    ],
    skills: {
      languages: ["HTML / CSS", "JavaScript", "TypeScript", "Python", "Java", "PHP"],
      frameworks: ["React", "NextJS", "Node.js", "Symfony", "SpringBoot", "TailwindCSS", "Boostrap"],
      methods: ["Méthode Agile", "Cycle en V"],
      tools: ["Git", "GitLab", "Docker", "Podman", "Oracle VM Virtualbox", "SonarQube", "Jira", "Mantis"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      IDEs: ["Visual Studio Code", "JetBrains IDEs"]
    }
  },
  fr: {
    header: {
      name: "Nicolas Lewin",
      title: "Ingénieur développeur fullstack"
    },
    studies: [
      {
        degree: "Master MIAGE IKSEM (cours en anglais) en apprentissage",
        school: "Université Paris I Panthéon-Sorbonne",
        year: "2020-2022",
        description: "",
        logo: "/logos/studies/paris1_logo.png"
      },
      {
        degree: "Licence MIAGE en apprentissage",
        school: "Université Paris I Panthéon-Sorbonne",
        year: "2019-2020",
        description: "",
        logo: "/logos/studies/paris1_logo.png"
      },
      {
        degree: "BTS Informatique (Services Informatiques aux Organisations), option Solutions Logicielles et Applications Métier",
        school: "University Name",
        year: "2014-2018",
        description: "",
        logo: "/logos/studies/saintaspais_logo.png"
      }
    ],
    experience: [
      {
        title: "Ingénieur étude et développement",
        company: "Sopra Steria",
        period: "Oct. 2022 - Fév. 2024",
        responsibilities: [
          "- Développement d’évolutions sur plusieurs applications des ministères (sport, santé, culture), en JavaScript, Angular, PHP, Symfony",
          "- Développement des corrections",
          "- Tester et qualifier les solutions apportées en développement",
          "- Conteneurisation d’applications avec Docker et Podman",
          "- Formations sur diverses technologies (React, Java/Spring Boot, Angular)"
        ],
        logo: "/logos/experiences/sopra_logo.png"
      },
      {
        title: "Apprenti développeur",
        company: "Sopra Steria",
        period: "Sept. 2020 - Sept. 2022",
        responsibilities: [
          "- Tierce maintenance applicative sur plusieurs applications du musée du Louvre et des ministères (correction de bugs, évolutions, accessibilité numérique, etc.), en PHP / Symfony"
        ],
        logo: "/logos/experiences/sopra_logo.png"
      },
      {
        title: "Apprenti développeur",
        company: "Mairie de Vitry-sur-Seine",
        period: "Sept. 2019 - Août. 2020",
        responsibilities: [
          "- Correction de bugs et refonte d'applications en PHP",
          "- Création d'un affichage graphique pour les résultats de vote pour les élections municipales",
          "- Formation au SIG (Système d'Information Géographique) avec ArcGIS Web AppBuilder avec création de widgets en JavaScript"
        ],
        logo: "/logos/experiences/vitry_logo.png"
      },
      {
        title: "Stagiaire développeur JAVA et JavaScript / React",
        company: "Groupe HN",
        period: "Janv. 2019 - Fév. 2019",
        responsibilities: [
          "- Correction de bugs d'applications Java avec SonarQube",
          "- Initiation à la librairie React"
        ],
        logo: "/logos/experiences/hn_logo.png"
      },
      {
        title: "Stagiaire développeur PHP",
        company: "Valeurs Investissements Patrimoine",
        period: "Mai 2018 - Juin 2018",
        responsibilities: [
          "- Développement d'une solution informatique en PHP, permettant de générer des rapports d'assurance-vie en fonction des données rentrées sur l'interface graphique"
        ],
        logo: "/logos/experiences/VIP_logo.png"
      }
    ],
    projects: [
      {
        name: "Music Player",
        date: "2024",
        description: "Application web permettant aux utilisateurs d'uploader et d'écouter de la musique",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://music-player-six-rouge.vercel.app"
      },
      {
        name: "Social Media",
        date: "2024",
        description: "Réseau social permettant aux utilisateurs de s'exprimer et de réagir en commentaires",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://social-media-one-topaz.vercel.app"
      },
      {
        name: "Media Tracker",
        date: "2024",
        description: "Application web permettant aux utilisateurs d'ajouter les films et les jeux vidéos qu'ils ont vus/regardés et de leur écrire une review",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Prisma", "APIs", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://media-tracker-six.vercel.app"
      },
      {
        name: "Weather App",
        date: "2024",
        description: "Petite application web permettant aux utilisateurs de voir la météo et la température actuelle dans la ville de son choix",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "APIs", "Vercel"],
        githubLink: "https://github.com/username/project1",
        demoLink: "https://weather-app-seven-beige-57.vercel.app"
      },
      {
        name: "Portfolio",
        date: "2024",
        description: "Ce portfolio ci-même",
        technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "Github Pages"]
      },
      {
        name: "Projet de Création d'entreprise",
        date: "2022",
        description: "Projet de création d'entreprise dans des conditions réelles. En tutorat avec l'entreprise PIVOD et l'association MIAGE Entrepreneurs.",
        technologies: ["Businness Plan", "Etude du marché", "Contact de partenaires", "UI/UX design"]
      },
      {
        name: "Mémoire état de l'art sur la génération automatique de descriptions d'images en apprentissage profond",
        date: "2021",
        description: "J'ai rédigé un mémoire sur les méthodes actuelles (à ce moment) pour la génération automatique de descriptions d'images, à l'aide de l'apprentissage profond.",
        technologies: ["Intelligence Artificielle", "Apprentissage Profond"]
      },
      {
        name: "GiantMix",
        date: "2021",
        description: "Projet consistant à créer un site e-commerce simplifié en utilisant différents types de BDD NoSQL",
        technologies: ["PHP", "Mongo DB", "ElasticSearch", "Redis"],
        githubLink: "https://github.com/NicolasLewin/giantmix"
      },
      {
        name: "Infogare",
        date: "2021",
        description: "Conception d'un système d'information voyageur à l'aide des différents frameworks de la spécification Jakarta EE (JPA, JAXB, CDI, JMS, JAX-RS - Jersey)",
        technologies: ["Java", "Jakarta EE", "H2"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Application/Jeu de collection de monstres",
        date: "2020",
        description: "Application/jeu en Symfony permettant à l'utilisateur de collectionner des monstres en s'en procurant par divers moyens",
        technologies: ["PHP", "Symfony", "Bootstrap" ,"MySQL"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Application de covoiturage",
        date: "2019",
        description: "Application permettant aux utilisateurs de trouver des voitures déjà occupées ou non, pour leurs trajets",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MVC", "MySQL"],
        githubLink: "https://github.com/NicolasLewin/sncf-infogare"
      },
      {
        name: "Application pour produit original",
        date: "2018",
        description: "Création d'un site internet dédié à un produit totalement original, dans le cadre d'un petit projet de création d'entreprise",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      }
    ],
    skills: {
      languages: ["HTML / CSS", "JavaScript", "TypeScript", "Python", "Java", "PHP"],
      frameworks: ["React", "NextJS", "Node.js", "Symfony", "SpringBoot", "TailwindCSS", "Boostrap"],
      methods: ["Méthode Agile", "Cycle en V"],
      tools: ["Git", "GitLab", "Docker", "Podman", "Oracle VM Virtualbox", "SonarQube", "Jira", "Mantis"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      IDEs: ["Visual Studio Code", "JetBrains IDEs"]
    }
  }
} as const;