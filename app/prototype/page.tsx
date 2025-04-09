"use client"

import { useState } from "react"

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span className="font-bold text-xl text-gray-800">WriteMentor</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 overflow-auto">
        {activeTab === "learn" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">¿Qué quieres practicar hoy?</h1>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-orange-500 font-bold mb-1">✏️</span>
                <span className="text-sm text-gray-700">Escritura</span>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-blue-500 font-bold mb-1">📚</span>
                <span className="text-sm text-gray-700">Gramática</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800">Temas de escritura</h2>

            <div className="space-y-3">
              <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center">
                  <div className="bg-amber-500 p-4 flex items-center justify-center rounded-l-lg">
                    <span className="text-white font-bold">📝</span>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-800">Inglés de Negocios</h3>
                    <p className="text-sm text-gray-500">30+ ejercicios</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-4 flex items-center justify-center rounded-l-lg">
                    <span className="text-white font-bold">✈️</span>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-800">Viajes y Cultura</h3>
                    <p className="text-sm text-gray-500">25+ ejercicios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <h2 className="font-bold text-lg mb-2">Ejercicio de escritura</h2>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p>
                  Write a professional email to a potential business partner proposing a collaboration on a new
                  project. Include an introduction, the benefits of collaboration, and a call to action.
                </p>
              </div>

              <textarea 
                placeholder="Start writing your response here..." 
                className="w-full border rounded-md p-2 min-h-[200px]"
              ></textarea>

              <button className="w-full bg-orange-500 text-white py-2 rounded-md mt-4 hover:bg-orange-600">
                Submit for Feedback
              </button>
            </div>
          </div>
        )}

        {activeTab === "ai" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">AI Writing Coach</h1>

            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <p className="text-gray-600 mb-4">
                Paste your English text below and our AI coach will analyze it, providing feedback on grammar,
                vocabulary, style, and structure.
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                placeholder="Paste or write your text here for AI analysis..."
                className="w-full border rounded-md p-2 min-h-[150px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>

            <button 
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
              onClick={handleAnalyze}
            >
              Analyze Text ✨
            </button>

            {feedback && (
              <div className="space-y-4 mt-6">
                <div className="bg-white p-4 rounded-lg border shadow-sm mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <div>
                      <h3 className="font-medium text-gray-800">Strengths</h3>
                      <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>Good vocabulary usage</li>
                        <li>Clear structure in your writing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500">✨</span>
                    <div>
                      <h3 className="font-medium text-gray-800">Suggestions</h3>
                      <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>Try using more varied sentence structures</li>
                        <li>Consider adding more specific examples</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Saved Items</h1>

            <div className="flex flex-col items-center justify-center py-10 text-center">
              <span className="text-4xl mb-4">🔖</span>
              <h2 className="text-xl font-semibold text-gray-700">No saved items yet</h2>
              <p className="text-gray-500 mt-2">Your saved exercises and writing samples will appear here</p>
            </div>
          </div>
        )}
      </main>

      <nav className="bg-white border-t border-gray-200 py-2">
        <div className="grid grid-cols-4 gap-1">
          <button
            className={`flex flex-col items-center py-2 ${activeTab === "learn" ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("learn")}
          >
            <span className="text-lg mb-1">📚</span>
            <span className="text-xs">Learn</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 ${activeTab === "practice" ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("practice")}
          >
            <span className="text-lg mb-1">✏️</span>
            <span className="text-xs">Practice</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 ${activeTab === "ai" ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("ai")}
          >
            <span className="text-lg mb-1">🧠</span>
            <span className="text-xs">AI Coach</span>
          </button>
          <button
            className={`flex flex-col items-center py-2 ${activeTab === "saved" ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("saved")}
          >
            <span className="text-lg mb-1">🔖</span>
            <span className="text-xs">Saved</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
