import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-darker px-4">
      <h1 className="text-8xl font-display font-bold text-gradient mb-4">404</h1>
      <p className="text-brand-muted text-lg mb-8">Сторінку не знайдено</p>
      <Link href="/" className="btn-primary">
        На головну
      </Link>
    </div>
  );
}
