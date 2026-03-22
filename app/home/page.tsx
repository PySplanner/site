"use client";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";

export default function Home({ setCurrentTab }: { setCurrentTab?: (tab: string) => void }) {
    return (
        <div className="relative flex flex-col w-full items-center">
            <div className="absolute top-0 left-0 right-0 h-[60vh] bg-linear-to-b from-primary/11 dark:from-primary/6 to-transparent pointer-events-none" />

            <img className="rounded-md mt-8 mb-6" width={570} height={240} src="./banner.png" alt="PySplanner Logo" />
            <div className="w-3/8 text-center">
                <TypedHeading />
                <p className="text-lg text-muted-foreground mt-4">
                  PySplanner is a powerful, free, and open source tool for optimized autonomous movement on LEGO MINDSTORMS EV3 and SPIKE Prime robots.
                  Creating smooth and consistent movements for your robot has never been easier. Say goodbye to guesswork and hello to precision with PySplanner.
                </p>
            </div>

             <div className="flex items-center gap-4 mt-8">
                <Button className="text-white" size="lg" onClick={() => setCurrentTab?.('docs')}>Get Started</Button>
                <Button variant="outline" size="lg" onClick={() => setCurrentTab?.('dashboard')}>Go To Dashboard</Button>
            </div>
        </div>
    )
}

function TypedHeading() {
  return (
    <h2 className="font-bold text-4xl tracking-tight">
      LEGO robot movement,&nbsp;
      <TypeIt
        options={{
          speed: 70,
          deleteSpeed: 50,
          waitUntilVisible: true,
          loop: true,
        }}
        getBeforeInit={(instance) =>
          instance
            .type("simplified.")
            .pause(1500)
            .delete()
            .type("made for FLL.")
            .pause(1500)
            .delete()
            .type("free and open source, always.")
            .pause(1500)
            .delete()
            .type("crazy easy.")
            .pause(1500)
            .delete()
            .type("that doesn't suck.")
            .pause(1500)
            .delete()
            .type("that's repeatable.")
            .pause(1500)
            .delete()
            .type("built different.")
            .pause(1500)
            .delete()
            .type("that's precise.")
            .pause(1500)
            .delete()
            .type("revolutionized.")
            .pause(1500)
            .delete()
            .type("that's optimized.")
            .pause(1500)
            .delete()
            .type("with no guesswork.")
            .pause(1500)
            .delete()
        }
      />
    </h2>
  );
}
