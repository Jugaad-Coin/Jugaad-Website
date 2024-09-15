import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Zap, Users, Github, Coffee, Pizza, Lightbulb } from 'lucide-react'

export default function UltraJugaadedCoin() {
  const [address, setAddress] = useState('')
  const [jugaadTip, setJugaadTip] = useState('')

  const jugaadTips = [
    "Who needs a whitepaper when you have a napkin sketch?",
    "Our smart contracts are held together with digital duct tape!",
    "Jugaad Coin: Because 'financial innovation' sounds better than 'winging it'",
    "We put the 'cry' in cryptocurrency!",
    "Our blockchain is just a very long game of telephone",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setJugaadTip(jugaadTips[Math.floor(Math.random() * jugaadTips.length)])
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Congrats! ${Math.floor(Math.random() * 1000)} Jugaad Coins have been jugaaded to ${address}! (Not really, but imagine they were!)`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-purple-900 font-comic-sans">
      <header className="p-5 flex justify-between items-center bg-white/30 backdrop-blur-sm">
        <h1 className="text-3xl font-bold animate-bounce">🪙 Jugaad Coin 🪙</h1>
        <a href="https://github.com/Jugaad-Coin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:animate-spin">
          <Github className="mr-2" />
          Our Jugaaded Code
        </a>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 animate-pulse">Welcome to the Jugaadverse!</h2>
          <p className="text-2xl italic">"Where every bug is a feature, and every feature is... well, jugaaded!"</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Coins, title: "Polygon-ish", content: "We're on Polygon... we think. It's blue, right?" },
            { icon: Zap, title: "Jugaadsactions", content: "So fast, even we don't know how it works!" },
            { icon: Users, title: "Jugaadeers Unite", content: "Join our Discord! It's just a WhatsApp group, but don't tell anyone." },
            { icon: Coffee, title: "Caffeine Powered", content: "Our devs run on coffee and prayer" },
            { icon: Pizza, title: "Pizza Tokenomics", content: "The more slices you have, the less everyone else has!" },
            { icon: Lightbulb, title: "Innovative Roadmap", content: "We'll figure it out as we go. That's the Jugaad way!" },
          ].map((item, index) => (
            <Card key={index} className="bg-white/20 backdrop-blur-lg hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <item.icon className="w-12 h-12 mb-2 mx-auto" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="max-w-md mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-4 text-center">Get Your Jugaadrop!</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your wallet address (or just any string, really)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-white/30 border-purple-500 text-purple-900 placeholder-purple-700"
            />
            <Button type="submit" className="w-full bg-purple-600 text-yellow-300 hover:bg-purple-700 animate-pulse">
              Jugaad Me Some Coins!
            </Button>
          </form>
        </section>

        <div className="text-center">
          <h4 className="text-2xl font-bold mb-2">Jugaad Tip of the Moment:</h4>
          <p className="italic text-xl">{jugaadTip}</p>
        </div>
      </main>

      <footer className="text-center py-4 mt-12 bg-purple-800 text-yellow-300">
        <p>© 2024 Jugaad Coin. All rights reserved... or not. We're not really sure.</p>
        <p className="text-sm mt-2">Powered by hopes, dreams, and a bit of elbow grease</p>
      </footer>
    </div>
  )
}