import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background text-foreground">
      <h1 className="text-7xl font-heading font-bold text-brand mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link href="/" className="px-6 py-3 bg-brand text-slate-800 rounded-full font-medium transition-colors hover:bg-brand/90">
        Return Home
      </Link>
    </div>
  );
}
