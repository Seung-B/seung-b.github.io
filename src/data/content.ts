export const profile = {
  name: "SeungBum Ha",
  title: "Ph.D. Student",
  affiliation: "UNIST",
  affiliationFull:
    "Ulsan National Institute of Science and Technology",
  department: "Graduate School of Artificial Intelligence",
  email: "ethereal0507@unist.ac.kr",
  website: "https://seung-b.github.io",
  summary:
    "Ph.D. student at UNIST researching Federated Learning, Machine Unlearning, Trustworthy AI, and Large Model Safety.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=ccebwAsAAAAJ",
    orcid: "https://orcid.org/0009-0000-1621-3551",
    github: "https://github.com/Seung-B",
    linkedin: "https://linkedin.com/in/seung0b",
  },
};

export const researchInterests = [
  "Federated Learning",
  "Machine Unlearning",
  "Trustworthy AI",
  "Deep Learning",
  "Large Model Safety",
];

export const education = [
  {
    degree: "Ph.D.",
    field: "Artificial Intelligence",
    school: "UNIST",
    period: "2024 – Present",
    advisor: "Sung Whan Yoon",
    gpa: "3.88 / 4.3",
  },
  {
    degree: "M.S.",
    field: "Artificial Intelligence",
    school: "UNIST",
    period: "2022 – 2024",
    advisor: "Sung Whan Yoon",
  },
  {
    degree: "B.S.",
    field: "Industrial Engineering",
    school: "UNIST",
    period: "2019 – 2022",
    advisor: "Sunghoon Lim",
    gpa: "3.7 / 4.3",
    honors: "Cum Laude",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: "preprint" | "conference" | "journal";
  paperUrl?: string;
  slidesUrl?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Unlearning's Blind Spots: Over-Unlearning and Prototypical Relearning Attack",
    authors: "SB Ha, S Park, SW Yoon",
    venue: "arXiv preprint (Under Review)",
    year: 2025,
    category: "preprint",
    paperUrl: "https://arxiv.org/pdf/2506.01318",
  },
  {
    title:
      "MetaVers: Meta-Learned Versatile Representations for Personalized Federated Learning",
    authors: "JH Lim*, SB Ha*, SW Yoon",
    venue: "WACV 2024",
    year: 2024,
    category: "conference",
    paperUrl:
      "https://openaccess.thecvf.com/content/WACV2024/papers/Lim_MetaVers_Meta-Learned_Versatile_Representations_for_Personalized_Federated_Learning_WACV_2024_paper.pdf",
    slidesUrl:
      "https://drive.google.com/file/d/1-GT4Eb5wEIbVAF86rsRGRLOt_lZD5D2q/view",
  },
  {
    title:
      "Benchmarking federated learning for semantic datasets: Federated scene graph generation",
    authors: "SB Ha*, T Lee*, J Lim, SW Yoon",
    venue: "Pattern Recognition Letters, Vol. 197, pp. 195-201",
    year: 2025,
    category: "journal",
    paperUrl:
      "https://www.sciencedirect.com/science/article/pii/S0167865525002727",
  },
];

export const experience = [
  {
    position: "Research Student",
    organization: "Machine Intelligence and Information Learning Lab, UNIST",
    period: "2022.08 – Present",
  },
  {
    position: "Undergraduate Research Intern",
    organization: "Homomorphic Encryption Lab, UNIST",
    period: "2021.12 – 2022.07",
  },
  {
    position: "Research Intern",
    organization: "Unstructured Data Mining and Machine Learning Lab, UNIST",
    period: "2020.05 – 2021.12",
  },
];

export const patents = [
  {
    title: "Meta-learning algorithms for personalized federated learning",
    number: "KR-Application No. 10-2023-0037350",
    inventors: "Sung Whan Yoon, Jinhyuk Lim, SeungBum Ha",
    year: 2023,
  },
];

export const awards = [
  {
    title: "The 1st KUIAI Hackathon, Excellence Award (2nd)",
    awarder: "Korea University",
    date: "2021",
  },
  {
    title: "Data Science Contest, Encouragement Prize",
    awarder: "UNIST, KAIST, POSTECH",
    date: "2022",
  },
  {
    title: "Undergraduate Full Scholarship",
    awarder: "UNIST",
    date: "2019",
  },
  {
    title: "Graduate Full Scholarship",
    awarder: "UNIST",
    date: "2022",
  },
];

export const service = [
  {
    role: "Reviewer",
    venue: "ICLR 2025, ICLR 2026, CVPR 2026, ECCV 2026",
  },
];

export const projects = [
  {
    name: "Hierarchical federated learning simulations and clients contribution measurement",
    org: "ETRI, Korea",
    period: "Jun. 2024 – Nov. 2024",
  },
  {
    name: "Multi-inference performance based federated learning asynchronous consensus",
    org: "ETRI, Korea",
    period: "Jun. 2023 – Nov. 2023",
  },
  {
    name: "Development of feasibility verification technology for resource hidden deep learning model",
    org: "ETRI, Korea",
    period: "Apr. 2023 – Nov. 2023",
  },
  {
    name: "Predicting stock price volatility using FinBERT",
    org: "AICP Program, UNIST",
    period: "Mar. 2021 – Dec. 2021",
  },
  {
    name: "Manufacturing Bigdata Analysis — anomaly detection based on manufacturing process data",
    org: "Hankuk Mold, Korea",
    period: "Nov. 2020 – Feb. 2021",
  },
  {
    name: "Energy Consumption Analysis for Additive Manufacturing",
    org: "UNIST UDMML Lab",
    period: "Jul. 2020 – Jul. 2021",
  },
  {
    name: "Optimization of AI-based fusion manufacturing process conditions and prediction of defects",
    org: "Seoyeon E-hwa / Inter-X, Korea",
    period: "Jun. 2020 – Feb. 2021",
  },
];

export const teaching = [
  {
    course: "Distributed Learning",
    code: "AI51501",
    institution: "UNIST",
    period: "Sep. 2024 – Dec. 2024",
    role: "Teaching Assistant",
  },
  {
    course: "Introduction to AI Safety",
    code: "IE47001",
    institution: "UNIST",
    period: "Mar. 2024 – Jun. 2024",
    role: "Teaching Assistant",
  },
  {
    course: "AI Novatus Academia Curriculum",
    code: "",
    institution: "Gyeongsangnam-do",
    period: "Sep. 2022 – Feb. 2023",
    role: "Teaching Assistant",
  },
];
