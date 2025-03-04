import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import type {
  LanguageCertification,
  ProfessionalCertification,
} from "../data/types";

interface CertificationsSectionProps {
  languageCertifications: LanguageCertification[];
  professionalCertifications: ProfessionalCertification[];
}

export default function CertificationsSection({
  languageCertifications,
  professionalCertifications,
}: CertificationsSectionProps) {
  return (
    <div
      className="max-w-3xl mx-auto"
      // className="grid gap-8 md:grid-cols-2"
    >
      <Card className="p-6 hover:shadow-md transition-shadow border-primary/10 hover:border-primary/30">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold">Language Certifications</h3>
        </div>
        <div className="space-y-4">
          {languageCertifications.map((cert) => (
            <div
              key={`${cert.language}-${cert.certification}`}
              className="border-b pb-4 last:border-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{cert.language}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.certification}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-semibold">
                    {cert.score}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{cert.maxScore}
                  </span>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* <Card className="p-6 hover:shadow-md transition-shadow border-primary/10 hover:border-primary/30">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold">Professional Certifications</h3>
        </div>
        <div className="space-y-4">
          {professionalCertifications.map((cert) => (
            <div key={cert.name} className="border-b pb-4 last:border-0">
              <h4 className="font-medium">{cert.name}</h4>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-muted-foreground">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card> */}
    </div>
  );
}
