import { Site } from "./Site";
import { sites } from "./sites";

export default function Home() {
  return (
    <main className="p-8 max-w-7xl mx-auto prose">
      <h1>All ESK Sites</h1>
      <div className="grid gap-2">
        {sites.map((site) => (
          <Site key={site.name} site={site} />
        ))}
      </div>
    </main>
  );
}
