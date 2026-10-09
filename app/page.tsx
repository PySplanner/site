"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

import { GithubSVG, DiscordSVG, YoutubeSVG, InstagramSVG } from "@/components/media-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import TypeIt from "typeit-react";
import { ArrowDownIcon, MailIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface TutorialProps {
  name: string;
  description: string;
  image?: string;
  docs_link: string;
}
const tutorials: TutorialProps[] = [
  {
    name: "Getting Started",
    description: "Learn the basics of PySplanner and how to get started with your robot.",
    docs_link: "/docs/"
  },
  {
    name: "Advanced Features",
    description: "Explore the advanced capabilities of PySplanner for complex robot movements.",
    docs_link: "/docs/"
  },
  {
    name: "Behind the scenes",
    description: "Dive into the technical details of how PySplanner works.",
    docs_link: "/docs/"
  },
  {
    name: "Tutorial 4",
    description: "This is a placeholder for a future tutorial.",
    docs_link: "/docs/"
  },
  {
    name: "Tutorial 5",
    description: "This is a placeholder for a future tutorial.",
    docs_link: "/docs/"
  }
];

function OpenTutorial() {
  return null; // TODO: Add this once the docs are made
}

interface ReleaseProps {
  product: string;
  description: string;
  version: string;
  date: string;
  github_link: string;
}
const releases: ReleaseProps[] = [
  {
    product: "Main",
    description: "The core PySplanner Python code that runs on the robot and interfaces with the firmware.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/main"
  },
  {
    product: "Firmware",
    description: "A fork of the PyBricks firmware that implements PySplanner algorithms and features.",
    version: "v0.2.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/firmware"
  },
  {
    product: "Dashboard",
    description: "The web-based dashboard for managing a robot, visualizing movements, and configuring settings.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/site"
  },
  {
    product: "Visualizer",
    description: "A web-based tool for creating splans that the robot will follow.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/visualizer"
  }
];

interface SocialProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}
const socialLinks: SocialProps[] = [
  {
    name: "GitHub",
    icon: <GithubSVG className="size-8"/>,
    link: "https://github.com/PySplanner"
  },
  {
    name: "Discord",
    icon: <DiscordSVG className="size-8"/>,
    link: "https://discord.gg/peMVWcuzdJ"
  },
  {
    name: "YouTube",
    icon: <YoutubeSVG className="size-8"/>,
    link: "https://www.youtube.com/@pysplanner"
  },
  {
    name: "Instagram",
    icon: <InstagramSVG className="size-8"/>,
    link: "https://www.instagram.com/pysplanner/"
  },
  {
    name: "Email",
    icon: <MailIcon className="size-8" />,
    link: "mailto:contact@pysplanner.com"
  }
];

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY < 50);
    };

    handleScroll();
    setIsMounted(true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => trackRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => trackRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

  return (
    <div className="relative flex flex-col w-full items-center overflow-x-hidden">
        <div className="relative flex flex-col w-full items-center pt-8 pb-16 md:pt-12 md:pb-24 px-4 text-center">
            <img className="hidden rounded-md max-h-48 mt-12 mb-12 md:block" src="./banner.svg" alt="PySplanner Logo" />
            <img className="rounded-md max-h-48 mt-12 mb-12 md:hidden" src="./logo.svg" alt="PySplanner Logo" />
            <div className="w-full text-center">
                <TypedHeading />
                <p className="mx-auto max-w-5xl text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
                  PySplanner is a powerful, free, and open source tool for optimized autonomous movement on LEGO MINDSTORMS EV3 and SPIKE Prime robots.
                  Creating smooth and consistent movements for your robot has never been easier. Check out the documentation below to get started!
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
                <Button size="lg" className="text-base w-full sm:w-auto px-4 transition-all" onClick={() => router.push('/docs')}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-4 text-base border-border hover:bg-muted/50 transition-all" onClick={() => window.open("https://visualizer.pysplanner.com/", '_blank')}>
                  Go To Visualizer <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>

        <div className="flex flex-col w-full max-w-6xl px-4 lg:px-0">
            <Card className="w-full p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Tutorials</h3>
                
                <div className="relative flex items-center w-full">
                    <button onClick={scrollLeft} className={`absolute left-2 z-20 bg-card border shadow-lg text-primary w-9 h-9 rounded-full hidden md:flex items-center justify-center transition-opacity duration-200 ${showLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ChevronLeftIcon size={20} strokeWidth={2.5} />
                    </button>
                    <div 
                        className="flex flex-row gap-4 overflow-x-auto scroll-smooth py-2 px-1 scrollbar-hide w-full" 
                        ref={trackRef} 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {tutorials.map((tutorial, index) => (
                        <Card key={index} className="flex flex-col w-70 sm:w-80 shrink-0 gap-4 pb-4 bg-background hover:shadow-xl hover:ring-primary transition-all cursor-pointer">
                          <img src={tutorial.image || "./logo.svg"} className="w-full h-32 object-cover rounded-t-lg border-b" />
                          <h4 className="text-lg font-semibold mx-4">{tutorial.name}</h4>
                          <p className="text-muted-foreground mx-4">{tutorial.description}</p>
                        </Card>
                      ))}
                    </div>
                    <button onClick={scrollRight} className={`absolute right-2 z-20 bg-card border shadow-lg text-primary w-9 h-9 rounded-full hidden md:flex items-center justify-center transition-opacity duration-200 ${showRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ChevronRightIcon size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </Card>

            <Card className="w-full p-4 sm:p-6 mt-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Releases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {releases.map((release, index) => (
                    <Card key={index} className="p-4 flex flex-col gap-2 hover:shadow-xl bg-background hover:ring-primary transition-all cursor-pointer" onClick={() => window.open(release.github_link, '_blank')}>
                      <h4 className="text-lg font-semibold">{release.product} - {release.version}</h4>
                      <p className="text-muted-foreground">{release.description}</p>
                      <p className="text-sm text-muted-foreground mt-auto pt-2">Released on {release.date}</p>
                    </Card>
                  ))}
                </div>
            </Card>

            <Card className="w-full p-4 sm:p-6 my-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Connect With Us</h3>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="flex flex-1 min-w-80 flex-row p-4 gap-4 bg-background items-center hover:shadow-xl hover:ring-primary transition-all cursor-pointer" onClick={() => window.open(social.link, '_blank')}>
                      {social.icon}
                      <p className="text-muted-foreground font-medium">{social.name}</p>
                    </Card>
                  ))}
                </div>
            </Card>
        </div>
    </div>
  )
}

function TypedHeading() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight px-4">
      LEGO robot movement,&nbsp;
      <br className="block sm:hidden" />
      <span className="text-primary">
        {isMounted ? (
          <TypeIt
            options={{
              speed: 70,
              deleteSpeed: 50,
              waitUntilVisible: true,
              loop: true,
            }}
            getBeforeInit={(instance) =>
              instance
                .type("simplified.").pause(1500).delete()
                .type("made for FLL.").pause(1500).delete()
                .type("free and open source.").pause(1500).delete()
                .type("crazy easy.").pause(1500).delete()
                .type("that doesn't suck.").pause(1500).delete()
                .type("that's repeatable.").pause(1500).delete()
                .type("built different.").pause(1500).delete()
                .type("that's precise.").pause(1500).delete()
                .type("revolutionized.").pause(1500).delete()
                .type("that's optimized.").pause(1500).delete()
                .type("with no guesswork.").pause(1500).delete()
            }
          />
        ) : (
          <span>simplified.</span>
        )}
      </span>
    </h2>
  );
}