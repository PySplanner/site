import { Separator } from "@/components/ui/separator"

export default function Home() {
    return (
        <div className="relative flex flex-col w-full h-full justify-center items-center">
            <div className="absolute top-0 left-0 right-0 h-[30vh] bg-linear-to-b from-primary/4 to-transparent pointer-events-none" />

            <img className="rounded-md mt-10 mb-6" width={570} height={240} src="/banner.png" alt="PySplanner Logo" />
            <div className="w-1/2 text-center">
                <h1 className="font-bold text-4xl">LEGO Robot Movement, Revolutionized</h1>
                <p className="text-lg text-muted-foreground mt-4">PySplanner is a powerful tool that generates optimized movement plans for LEGO robots, ensuring efficient and effective performance.</p>
            </div>
        </div>
    )
}