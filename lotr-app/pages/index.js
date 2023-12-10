import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <p>
        <Link href="/volumes" >Volumes</Link>
      </p>
    </div>
  );
}
