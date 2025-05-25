import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-green-500 sm:text-4xl">
        Boost your productivity. Start using our app today.
      </h2>
      <Button variant="cwa" className="rounded-none">
        Click Me!
      </Button>
    </div>
  );
}
