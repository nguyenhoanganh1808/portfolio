import { Card } from "@/components/ui/card";
import type { TechCategory } from "../data/types";

interface TechStackProps {
  items: TechCategory[];
}

export default function TechStack({ items }: TechStackProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 hover:shadow-md transition-shadow border-primary/10 hover:border-primary/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">{tech.icon}</div>
            <h3 className="text-xl font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
