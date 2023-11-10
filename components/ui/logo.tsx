import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img className="h-12 w-auto rounded-full" src="/images/logo.png" alt="Beliz Logo" />
    </Link>
  )
}
