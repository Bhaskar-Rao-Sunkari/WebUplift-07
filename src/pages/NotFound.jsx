import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — WebUplift"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gradient" aria-label="Error 404">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Go home
          </Link>
        </div>
      </div>
    </>
  );
}
