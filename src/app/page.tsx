import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 w-7xl p-2">
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-green-500 sm:text-4xl">
        Boost your productivity. Start using our app today.
      </h2>
      <div>
        <Button variant="elevated">
          Click Me!
        </Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am a text area" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
