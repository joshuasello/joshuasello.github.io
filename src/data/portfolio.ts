export interface Link {
    label: string;
    url: string;
}

export interface Publication {
    year: string;
    title: string;
    authors: string;
    venue: string;
    links: Link[];
}

export const research = [
    {
        title: "Electric and Sustainable Mobility",
        description:
            "Data-driven planning, simulation, and optimisation of electric mobility systems, with a particular focus on the electrification of minibus-taxi and paratransit operations."
    },
    {
        title: "Mobility Data and Transport Networks",
        description:
            "Methods for converting large-scale GPS and operational datasets into evidence about vehicle activity, travel demand, stopping behaviour, routes, and time-varying transport networks."
    },
    {
        title: "Behaviour-Aware Transport Modelling",
        description:
            "Agent-based and simulation-based models that represent driver decisions, passenger demand, charging behaviour, infrastructure constraints, and uncertainty in informal transport systems."
    },
    {
        title: "Energy and Infrastructure Optimisation",
        description:
            "Engineering methods for translating observed transport operations into vehicle, battery, charging, energy-demand, and infrastructure design requirements."
    },
    {
        title: "Embedded and Data-Driven Systems",
        description:
            "Sensing, electronic systems, edge computation, control, and reproducible data pipelines."
    }
];

export const publications: Publication[] = [
    {
        year: "2026",
        title:
            "Agent-based simulation of electric minibus taxis: Framework and application to sub-Saharan Africa’s paratransit",
        authors: "Joshua Tokollo Sello and Marthinus Johannes Booysen",
        venue:
            "Energy for Sustainable Development · Article 102011",
        links: [
            {
                label: "DOI: 10.1016/j.esd.2026.102011",
                url: "https://doi.org/10.1016/j.esd.2026.102011"
            }
        ]
    },
    {
        year: "2026",
        title:
            "A sustainable transition to electric minibus taxis in Cape Town’s paratransit",
        authors:
            "Joshua Tokollo Sello, Marthinus Johannes Booysen, and Brendan G. Pretorius",
        venue: "Nature Sustainability · Published 13 April 2026",
        links: [
            {
                label: "DOI: 10.1038/s41893-026-01808-9",
                url: "https://doi.org/10.1038/s41893-026-01808-9"
            }
        ]
    },
    {
        year: "2026",
        title:
            "Electric Minibus Taxis in Cape Town: Energy Demand, Emissions, and Costs",
        authors:
            "Joshua Tokollo Sello, Marthinus Johannes Booysen, Mienke Knipe, Maria Elizabeth Marais, Christo Venter, and Salma Abdelgadir",
        venue: "Sustainability · Volume 18, Issue 4, Article 2122",
        links: [
            {
                label: "DOI: 10.3390/su18042122",
                url: "https://doi.org/10.3390/su18042122"
            }
        ]
    }
];

export const preprints: Publication[] = [
    {
        year: "2026",
        title:
            "Empirical performance assessment of South Africa’s first commercial electric minibus taxi",
        authors:
            "Joshua Tokollo Sello and Marthinus Johannes Booysen",
        venue: "African Transport Studies · Technical note under review",
        links: []
    },
    {
        year: "2026",
        title:
            "Right-sizing Paratransit Fleet Electrification: Passenger Capacity Selection Using Simulation-Based Optimisation",
        authors:
            "Joshua Tokollo Sello and Marthinus Johannes Booysen",
        venue: "Thredbo 19 · Conference paper under review",
        links: []
    },
    {
        year: "2026",
        title:
            "Beyond Static Assumptions: A Comparative Simulation Study of Driver Decisions in Paratransit Electrification",
        authors:
            "Joshua Tokollo Sello and Marthinus Johannes Booysen",
        venue:
            "Planning Practice & Research special issue · Journal manuscript under review",
        links: []
    }
];

export const public_works: Publication[] = [
    {
        year: "2026",
        title:
            "Electric minibus taxis: the challenges and gains facing Cape Town’s transition",
        authors:
            "Joshua Tokollo Sello and Marthinus Johannes Booysen",
        venue: "The Conversation · Published 13 April 2026",
        links: [
            {
                label: "Article",
                url: "https://doi.org/10.64628/AAJ.j5yf7gmaf"
            },
        ]
    }
];

export const updates = [
    {
        date: "Dec 2023",
        text:
            "Completed a bachelor’s degree in Electrical and Electronic Engineering at Stellenbosch University."
    },
    {
        date: "Jan 2024",
        text:
            "Began postgraduate research in Electrical Engineering at Stellenbosch University, focusing on electric mobility and minibus-taxi electrification."
    },
    {
        date: "Feb 2026",
        text:
            "Published an empirical assessment of the energy demand, emissions, and costs of electric minibus taxis in Cape Town."
    },
    {
        date: "Apr 2026",
        text:
            "Began a PhD in Electrical Engineering focused on data-driven and behaviour-aware modelling of electric minibus-taxi systems."
    },
    {
        date: "Apr 2026",
        text:
            "Published research in Nature Sustainability on pathways for a sustainable transition to electric minibus taxis in Cape Town."
    },
    {
        date: "Apr 2026",
        text:
            "Published a public-facing article in The Conversation examining the challenges and potential gains of Cape Town’s electric minibus-taxi transition."
    }
];
