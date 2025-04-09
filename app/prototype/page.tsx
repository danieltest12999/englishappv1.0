"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, FileEdit, Brain, Bookmark, CheckCircle, Sparkles } from "lucide-react"

export default function Prototype() {
  const [activeTab, setActiveTab] = useState("learn")
  const [text, setText] = useState("")
  const [feedback, setFeedback] = useState(false)

  const handleAnalyze = () => {
    if (text.trim().length > 0) {
      setFeedback(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <FileEdit className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800">WriteMentor</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 overflow-auto">
        {activeTab === "learn" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">¿Qué quieres practicar hoy?</h1>

            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-orange-100 border-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <FileEdit className="h-6 w-6 text-orange-500 mb-1" />
                  <span className="text-sm text-slate-700">Escritura</span>
                </CardContent>
              </Card>
              <Card className="bg-blue-100 border-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <BookOpen className="h-6 w-6 text-blue-500 mb-1" />
                  <span className="text-sm text-slate-700">Gramática</span>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl font-semibold text-slate-800">Temas de escritura</h2>

            <div className="space-y-3">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="bg-amber-500 p-4 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-slate-800">Inglés de Negocios</h3>
                      <p className="text-sm text-slate-500">30+ ejercicios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-4 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-slate-800">Viajes y Cultura</h3>
                      <p className="text-sm text-slate-500">25+ ejercicios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ejercicio de escritura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-100 p-4 rounded-md">
                  <p>
                    Write a professional email to a potential business partner proposing a collaboration on a new
                    project. Include an introduction, the benefits of collaboration, and a call to action.
                  </p>
                </div>

                <Textarea placeholder="Start writing your response here..." className="min-h-[200px] resize-y" />

                <Button className="w-full">Submit for Feedback</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "ai" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">AI Writing Coach</h1>

            <Card>
              <CardContent className="p-4">
                <p className="text-slate-600 mb-4">
                  Paste your English text below and our AI coach will analyze it, providing feedback on grammar,
                  vocabulary, style, and structure.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Textarea
                placeholder="Paste or write your text here for AI analysis..."
                className="min-h-[150px] resize-y"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <Button className="w-full gap-2 bg-orange-500 hover:bg-orange-600" onClick={handleAnalyze}>
              Analyze Text
              <Sparkles className="h-4 w-4" />
            </Button>

            {feedback && (
              <div className="space-y-4 mt-6">
                <Card className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-slate-800">Strengths</h3>
                        <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
                          <li>Good vocabulary usage</li>
                          <li>Clear structure in your writing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-slate-800">Suggestions</h3>
                        <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
                          <li>Try using more varied sentence structures</li>
                          <li>Consider adding more specific examples</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Saved Items</h1>

            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Bookmark className="h-16 w-16 text-slate-300 mb-4" />
              <h2 className="text-xl font-semibold text-slate-700">No saved items yet</h2>
              <p className="text-slate-500 mt-2">Your saved exercises and writing samples will appear here</p>
            </div>
          </div>
        )}
      </main>

      <nav className="bg-white border-t border-slate-200 py-2">
        <div className="grid grid-cols-4 gap-1">
          <Button
            variant={activeTab === "learn" ? "default" : "ghost"}
            className="flex flex-col items-center rounded-none h-16"
            onClick={() => setActiveTab("learn")}
          >
            <BookOpen className="h-5 w-5 mb-1" />
            <span className="text-xs">Learn</span>
          </Button>
          <Button
            variant={activeTab === "practice" ? "default" : "ghost"}
            className="flex flex-col items-center rounded-none h-16"
            onClick={() => setActiveTab("practice")}
          >
            <FileEdit className="h-5 w-5 mb-1" />
            <span className="text-xs">Practice</span>
          </Button>
          <Button
            variant={activeTab === "ai" ? "default" : "ghost"}
            className="flex flex-col items-center rounded-none h-16"
            onClick={() => setActiveTab("ai")}
          >
            <Brain className="h-5 w-5 mb-1" />
            <span className="text-xs">AI Coach</span>
          </Button>
          <Button
            variant={activeTab === "saved" ? "default" : "ghost"}
            className="flex flex-col items-center rounded-none h-16"
            onClick={() => setActiveTab("saved")}
          >
            <Bookmark className="h-5 w-5 mb-1" />
            <span className="text-xs">Saved</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}
