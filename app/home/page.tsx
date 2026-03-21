import TypeIt from "typeit-react";

export default function Home() {
    return (
        <div className="relative flex flex-col w-full h-full justify-center items-center">
            <div className="absolute top-0 left-0 right-0 h-[30vh] bg-linear-to-b from-primary/4 to-transparent pointer-events-none" />

            <img className="rounded-md mt-10 mb-6" width={570} height={240} src="/banner.png" alt="PySplanner Logo" />
            <div className="w-1/2 text-center">
                <TypedHeading />
                <p className="text-lg text-muted-foreground mt-4">PySplanner is a powerful tool that generates optimized movement plans for LEGO robots, ensuring efficient and effective performance.</p>
            </div>
        </div>
    )
}

function TypedHeading() {
  return (
    <h2 className="font-bold text-4xl tracking-tight">
      LEGO Robot Movement,&nbsp;
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
            .type("crazy easy.")
            .pause(1500)
            .delete()
            .type("that doesn't suck.")
            .pause(1500)
            .delete()
            .type("repeatable.")
            .pause(1500)
            .delete()
            .type("built different.")
            .pause(1500)
            .delete()
            .type("revolutionized.")
            .pause(1500)
            .delete()
            .type("precise.")
            .pause(1500)
            .delete()
            .type("optimized.")
            .pause(1500)
            .delete()
            .type("no guesswork.")
            .pause(1500)
            .delete()
        }
      />
    </h2>
  );
}
