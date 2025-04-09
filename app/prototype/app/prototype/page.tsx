"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wifi, Smartphone, Info } from "lucide-react"

export default function LocalTesting() {
  const [ipAddress, setIpAddress] = useState("")
  const [port, setPort] = useState("3000")
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  // Get the local IP address
  useEffect(() => {
    // This is a simple way to try to get the local IP address
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        // This will get the external IP, but we'll use it as a fallback
        setIpAddress(data.ip)
      })
      .catch(() => {
        // Fallback to a common local IP
        setIpAddress("192.168.1.x")
      })
  }, [])

  // Generate QR code when IP or port changes
  useEffect(() => {
    const localUrl = `http://${ipAddress}:${port}`
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(localUrl)}&size=200x200`)
  }, [ipAddress, port])

  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Prueba Local de Aplicación</CardTitle>
          <CardDescription className="text-center">
            Ejecuta tu prototipo localmente sin necesidad de hosting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="instructions">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="instructions">Instrucciones</TabsTrigger>
              <TabsTrigger value="qrcode">Código QR</TabsTrigger>
            </TabsList>

            <TabsContent value="instructions" className="space-y-4">
              <div className="space-y-2 border rounded-md p-4 bg-slate-50">
                <h3 className="font-medium flex items-center gap-2">
                  <Wifi className="h-4 w-4" /> Paso 1: Configura tu servidor local
                </h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Asegúrate de que tu computadora y teléfono estén conectados a la misma red WiFi</li>
                  <li>
                    Ejecuta tu proyecto en tu computadora con{" "}
                    <code className="bg-slate-200 px-1 rounded">npm run dev</code> o el comando correspondiente
                  </li>
                  <li>
                    Encuentra la dirección IP de tu computadora:
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Windows: Ejecuta <code className="bg-slate-200 px-1 rounded">ipconfig</code> en CMD
                      </li>
                      <li>
                        Mac/Linux: Ejecuta <code className="bg-slate-200 px-1 rounded">ifconfig</code> en Terminal
                      </li>
                    </ul>
                  </li>
                  <li>Anota la dirección IP (algo como 192.168.1.x) y el puerto (normalmente 3000)</li>
                </ol>
              </div>

              <div className="space-y-2 border rounded-md p-4 bg-slate-50">
                <h3 className="font-medium flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> Paso 2: Accede desde tu teléfono
                </h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Ve a la pestaña "Código QR" y escanea el código con tu teléfono</li>
                  <li>
                    O abre el navegador en tu teléfono y escribe:{" "}
                    <code className="bg-slate-200 px-1 rounded">http://[IP-DE-TU-PC]:[PUERTO]</code>
                  </li>
                  <li>
                    Por ejemplo: <code className="bg-slate-200 px-1 rounded">http://192.168.1.5:3000</code>
                  </li>
                </ol>
              </div>

              <div className="space-y-2 border rounded-md p-4 bg-amber-50">
                <h3 className="font-medium flex items-center gap-2 text-amber-800">
                  <Info className="h-4 w-4" /> Nota importante
                </h3>
                <p className="text-sm text-amber-700">
                  Esta solución funciona para prototipos web. Si estás desarrollando una app nativa para Android,
                  considera usar herramientas como Expo para React Native, que facilitan las pruebas locales.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="qrcode" className="space-y-4">
              <div className="space-y-2">
                <Label>Tu dirección IP local (edita si es necesario):</Label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="192.168.1.x"
                  />
                  <input
                    type="text"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    className="flex h-10 w-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="3000"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 pt-4">
                <p className="text-sm text-center">
                  Escanea este código QR desde tu teléfono para acceder a:
                  <br />
                  <code className="bg-slate-200 px-1 rounded">
                    http://{ipAddress}:{port}
                  </code>
                </p>
                <div className="border p-4 rounded-md bg-white">
                  <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" width={200} height={200} />
                </div>
                <Button onClick={() => window.open(`http://${ipAddress}:${port}`, "_blank")} className="w-full">
                  Probar enlace en esta computadora
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
