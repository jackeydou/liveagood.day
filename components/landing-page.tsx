/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/70FQErDp9xg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SunIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Live a Good Day</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Tips
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Mindset
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Self-Care
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Start Your Day
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Live a Good Day, Every Day
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl">
              Discover the secrets to starting your day right, maintaining a
              positive mindset, and practicing self-care for a fulfilling and
              joyful life.
            </p>
            <div className="mt-8">
              <Button size="lg">Start Your Journey</Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Start Your Day Right
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Establish a morning routine that sets you up for success. From
                  mindful meditation to a nutritious breakfast, learn how to
                  kickstart your day with intention.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 font-medium hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Morning Routine"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Positive Mindset"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Maintain a Positive Mindset
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Cultivate a mindset of gratitude, resilience, and optimism.
                  Learn techniques to reframe challenges, focus on the positive,
                  and find joy in the present moment.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 font-medium hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Practice Self-Care
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Prioritize your physical, mental, and emotional well-being
                  throughout the day. Discover simple self-care rituals that can
                  boost your energy, reduce stress, and promote overall balance.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 font-medium hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Self-Care"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                What People Are Saying
              </h2>
              <div className="mt-8 grid gap-6">
                <div className="bg-background p-6 rounded-xl shadow-sm">
                  <blockquote>
                    <p className="text-lg font-medium">
                      Living a good day has completely transformed my life.\n I
                      feel more energized, focused, and joyful than ever\n
                      before.
                    </p>
                    <cite className="mt-4 block font-medium not-italic text-muted-foreground">
                      - Sarah, Entrepreneur
                    </cite>
                  </blockquote>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm">
                  <blockquote>
                    <p className="text-lg font-medium">
                      The tips and strategies I learned have helped me\n
                      maintain a positive mindset even on the most\n challenging
                      days. I highly recommend this program!
                    </p>
                    <cite className="mt-4 block font-medium not-italic text-muted-foreground">
                      - Michael, Software Engineer
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SunIcon className="h-6 w-6" />
            <span className="font-bold">Live a Good Day</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
