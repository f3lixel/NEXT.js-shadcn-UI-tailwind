import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <main className="flex flex-col gap-8 max-w-4xl w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + Tailwind CSS + shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern starter template with all the tools you need to build beautiful applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
              <CardDescription>
                The React framework for production
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Fast refresh, TypeScript support, and optimized production builds out of the box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS v4</CardTitle>
              <CardDescription>
                Utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Rapidly build modern websites with a utility-first approach and customizable design system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful UI components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Accessible and customizable components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Ready to start building? Try out these example buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Edit <code className="bg-muted px-2 py-1 rounded">app/page.tsx</code> to customize this page
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
