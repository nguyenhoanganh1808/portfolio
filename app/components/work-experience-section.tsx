import type { WorkExperience } from "../data/types";

interface WorkExperienceSectionProps {
  items: WorkExperience[];
}

export default function WorkExperienceSection({
  items,
}: WorkExperienceSectionProps) {
  return (
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
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              <h4 className="text-lg text-primary mb-2">{item.company}</h4>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
