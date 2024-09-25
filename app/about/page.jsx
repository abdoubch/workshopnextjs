import Button from "@/componants/Button";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-xl text-center">
        This workshop teaches how to use Next.js to build efficient web
        applications with dynamic rendering, API integration, and TailwindCSS
        for styling.
      </p>
      <Button text="Get Started" href="/about" />
    </div>
  );
}
