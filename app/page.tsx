import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "./components/contact-form";
import EducationSection from "./components/education-section";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import WorkExperienceSection from "./components/work-experience-section";
import { education, researchPublications } from "./data/education";
import { personalInfo } from "./data/personal-info";
import { projects } from "./data/projects";
import { techStack } from "./data/tech-stack";
import { workExperience } from "./data/work-experience";
import CertificationsSection from "./components/certifications-section";
import {
  languageCertifications,
  professionalCertifications,
} from "./data/certifications";

const icons = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-6 flex h-14 items-center w-full">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                {personalInfo.name}
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto" asChild>
            <Link target="_blank" href={personalInfo.resumeLink}>
              Resume
            </Link>
          </Button>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section
          id="about"
          className="py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="w-full px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block mb-4">
                  <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {personalInfo.title}
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>
              <div className="space-x-4">
                {personalInfo.socials.map((social) => {
                  const Icon = icons[social.icon as keyof typeof icons];
                  return (
                    <Link
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{social.platform}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <Link href={`#projects`}>
                <Button className="mt-8 rounded-full">View My Work</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Education
            </h2>
            <EducationSection
              items={education}
              publications={researchPublications}
            />
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="container mx-auto py-12 md:py-24 lg:py-32">
          <div className="w-full px-6 md:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Work Experience
            </h2>
            <WorkExperienceSection items={workExperience} />
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-24 lg:py-32">
          <div className="w-full px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-24 bg-primary mx-auto"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Certifications & Skills
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and language proficiency
              </p>
            </div>
            <CertificationsSection
              languageCertifications={languageCertifications}
              professionalCertifications={professionalCertifications}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto py-12 md:py-24 lg:py-32 bg-muted/30"
        >
          <div className="w-full px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-24 bg-primary mx-auto"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent work. Each project represents a unique
                challenge and solution.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="container mx-auto py-12 md:py-24 lg:py-32">
          <div className="w-full px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="h-1 w-24 bg-primary mx-auto"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tech Stack
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring products to life
              </p>
            </div>
            <TechStack items={techStack} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or want to discuss opportunities? I'd
                  love to hear from you.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="w-full flex flex-col gap-4 sm:flex-row py-8 shrink-0 items-center px-6 md:px-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
