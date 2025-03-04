import type { Education, ResearchPublication } from "../data/types";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

interface EducationSectionProps {
  items: Education[];
  publications?: ResearchPublication[];
}

export default function EducationSection({
  items,
  publications = [],
}: EducationSectionProps) {
  return (
    <div className="space-y-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/50"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg text-primary mb-2">
                  {item.institution}
                </h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {publications.length > 0 && (
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Research Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow border-primary/10 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h4 className="text-lg font-semibold">{pub.title}</h4>
                      <span className="text-sm whitespace-nowrap text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                        {pub.date}
                      </span>
                    </div>
                    <p className="text-sm text-primary mt-1 mb-2">
                      Published on: {pub.publisher}
                      {pub.url && (
                        <Link
                          href={pub.url}
                          target="_blank"
                          className="inline-flex items-center ml-2 hover:underline"
                        >
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      )}
                    </p>
                    <p className="text-muted-foreground mb-4">{pub.summary}</p>
                    {pub.tags && (
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
