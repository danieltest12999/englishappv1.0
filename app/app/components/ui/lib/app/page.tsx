import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-slate-800">WriteMentor</h1>
        <p className="mt-2 text-xl text-slate-600">Advanced English Writing Coach</p>
        
        <div className="mt-6 max-w-md">
          <p className="text-slate-600">
            Enhance your writing skills with AI-powered feedback, personalized exercises, 
            and advanced grammar assistance.
          </p>
        </div>
        
        <Button asChild className="mt-8 px-8 py-6 text-lg bg-orange-500 hover:bg-orange-600">
          <Link href="/prototype">
            Ver Prototipo
          </Link>
        </Button>
      </div>
    </div>
  )
}
