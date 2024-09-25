import Button from "@/componants/Button";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white">
        Welcome to Next.js Workshop
      </h1>
      <p className="mt-4 text-lg text-white">
        Build amazing web apps with Next.js and TailwindCSS!
      </p>
      <Button text="Get Started" href="/about" />
    </div>
  );
}

