import type { LanguageCertification, ProfessionalCertification } from "./types";

export const languageCertifications: LanguageCertification[] = [
  {
    language: "English",
    certification: "TOEIC(LR)",
    score: "595",
    maxScore: "990",
    date: "2023",
  },
  {
    language: "English",
    certification: "TOEIC(SW)",
    score: "270",
    maxScore: "400",
    date: "2025",
  },
];

export const professionalCertifications: ProfessionalCertification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-789012",
    credentialUrl: "https://google.com/verification",
  },
];
