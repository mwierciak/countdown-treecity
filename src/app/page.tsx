'use client'
import { useCountdown } from "@/hooks/useCountdown";
import { Separator } from "@radix-ui/react-separator";
import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function App() {
  const days = 10;
  const hours = 11;
  const minutes = 23;

  const initialTime = ((days * 24 * 60 + hours * 60 + minutes) * 60) * 1000;
  const time = useCountdown(initialTime, () => console.log('Time is up!'));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black"> {/* Added text-black class */}
      <h1 className="text-4xl font-bold mb-4 uppercase">TreeCityLaser</h1>
      <Separator />
      <div className="text-6xl font-mono">
        {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
      </div>

      <div className="card mt-8"> {/* Added mt-8 for margin-top */}
        <HoverCard>
          <HoverCardTrigger>
            <Button>Learn More</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 hover:mt-4"> {/* Added hover:mt-4 for margin-top when hovered */}
            <div className="space-y-1">
              <h4 className="">TreeCityLaser LLC</h4>
              <p className="text-sm">
                A product of Braydon Denham and Matthew Wierciak.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Established - March, 2024
                </span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

    </div>

  );
}

export default App;