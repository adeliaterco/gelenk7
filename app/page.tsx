"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, CheckCircle, Shield, AlertTriangle, Award, Heart, TrendingUp, Activity, Zap } from "lucide-react"
import Image from "next/image"

const IMAGES = {
  mulherAtiva50Anos: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png",
  elonMuskFoto: "https://i.ibb.co/PGvKFDM3/7028b3efd3bc7cae736f2bead2d857-1764218051919.jpg",
  ataqueCelulasZumbisDentro: "https://i.ibb.co/v2PrSm9/1cfb8ad7a3e4dae6f664e94f2e533d-1764218053701.jpg",
  celulasSenescentes: "https://i.ibb.co/MkQZ8Z1R/94ee6615abe3b5144ee00558e3764e-1764218058684.png",
  pesquisaNasaDensidadeOssea: "https://i.ibb.co/v4DhG8Jr/75ec9d11fde58bba5436049d0b807a-1764218063334.jpg",
  raioXOssoSaudavel: "https://i.ibb.co/CpswnrYz/unnamed.png",
  protocoloAntiCelulasZumbis: "https://i.ibb.co/Jwm1FtHw/unnamed-1.png",
  draMarina: "https://i.ibb.co/k2XRy3S3/Generatedimage-1764255762791.png",
  esperancaRenovada: "https://i.ibb.co/MDj3zdcb/CAPA-EBOOK-ALEMAO-01.png",
  consequenciasInacao: "https://i.ibb.co/fGTMZNwn/Generatedimage-1764342260674.png",
  garantiaSeguranca: "https://i.ibb.co/DfcqvmR6/Generatedimage-1764343869418.png",
  agiAgora: "https://i.ibb.co/cKq4vW8M/limitado-ofer.png",
}

const CHECKOUT_URL = "https://pay.hotmart.com/P103120932I?off=r5yaffdw"

const CRONOLOGIA = [
  {
    semana: "Week 1-2",
    fase: "BLOCKADE PHASE",
    tecnicas: "Techniques 1, 3, 4 activated",
    biologico: "Destructive cytokines reduce by 40-60%",
    sensacao: "Less stiffness, better sleep, less pain",
    status: "ZOMBIE CELLS ATTACKED",
    cor: "bg-red-100",
    corBorda: "border-red-400",
  },
  {
    semana: "Week 3-4",
    fase: "CLEANSING PHASE",
    tecnicas: "Techniques 2, 5, 6 added",
    biologico: "Zombie cells being systemically eliminated",
    sensacao: "More fluid movement, less inflammation",
    status: "ZOMBIE CELLS ELIMINATED",
    cor: "bg-yellow-100",
    corBorda: "border-yellow-400",
  },
  {
    semana: "Week 5-8",
    fase: "REGENERATION PHASE",
    tecnicas: "Techniques 7, 8 complete",
    biologico: "Body focuses 100% on BUILDING new bone",
    sensacao: "Strength, confidence, independence",
    status: "ZOMBIE CELLS ERADICATED",
    cor: "bg-green-100",
    corBorda: "border-green-400",
  },
]

export default function ProtocoloAntiCelulasZumbis() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })
  const [vagas, setVagas] = useState(47) // 'vagas' means 'spots' or 'slots'

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTA = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        
        <div className="mb-4 sm:mb-6">
          <Badge className="bg-red-600 text-white px-3 sm:px-4 py-1 text-xs font-bold uppercase">
            Health • Scientific Research
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          The NASA Discovery That Regenerates Bones in 7 Minutes
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          How Elon Musk Solved Astronauts' Problem — Now Adapted for You
        </p>

        <figure className="mb-6 sm:mb-10 w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image 
              src={IMAGES.mulherAtiva50Anos}
              alt="Active woman over 50 regaining mobility"
              fill
              className="object-contain sm:object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </figure>

        <div className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="mb-4 sm:mb-6">
            <span className="font-bold text-xl sm:text-2xl float-left mr-2 leading-none">T</span>he first signs of bone and joint deterioration are easy to miss. All too often, doctors ignore the warning signs, with devastating consequences; <strong>every month, approximately 1,100 people die after fracturing their hip due to low bone density.</strong>
          </p>
        </div>

        <div className="article-body text-base sm:text-lg leading-relaxed text-gray-800 space-y-4 sm:space-y-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          
          <div className="bg-gray-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              In fact, I watched in horror as my mother slowly died from osteoporosis.
            </p>
            <p className="mb-3 sm:mb-4">
              To watch someone you love slowly die, in agony, knowing nothing about the disease that killed them, is heartbreaking.
            </p>
            <p className="mb-3 sm:mb-4">
              <strong>The worst part?</strong> Three different doctors told us it was just "normal aging." That women her age should expect to "slow down."
            </p>
            <p className="font-bold">
              But it wasn't normal aging that took my mother...
            </p>
          </div>

          <p>
            Because groundbreaking new research suggests that belief may be <strong>dangerously wrong.</strong>
          </p>

          <p>
            In fact, clinical studies now show that millions of women over 50 are suffering accelerated bone and cartilage loss, not simply because of aging, but due to a <strong>hidden cellular invasion</strong> that silently sabotages their bones and joints from within.
          </p>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center py-6 sm:py-8 my-6 sm:my-8 border-y-2 border-gray-300 px-4 break-words">
            "So why do some women remain strong, active, and pain-free into their 70s, while others begin to deteriorate in their 50s — even when following medical recommendations?"
          </blockquote>

          <p>
            This question led me on a relentless search for answers that went beyond bland calcium pills, anti-inflammatories, or expensive supplements that never worked.
          </p>

          <p>
            <strong>That's when I discovered the work of Elon Musk and his scientific team,</strong> who were investigating a problem NASA faced: astronauts rapidly losing bone density in space.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            And what that investigation revealed... changed everything.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Elon Musk's NASA Discovery — And the Alarming Truth About Bone Loss
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.elonMuskFoto}
                alt="Elon Musk NASA investigation zombie cells"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            <strong>Elon Musk wasn't just launching rockets</strong> — he was investigating a disturbing problem NASA faced: astronauts rapidly lose bone density and joint strength in space.
          </p>

          <p>
            During this investigation, he and his team made a startling connection that revealed a silent crisis:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="font-bold mb-3 sm:mb-4">
              The same biological mechanism that destroys astronauts' bones in space is silently attacking women as they age on Earth.
            </p>
            <p>
              And the cause? A disturbing group of dysfunctional cells known as <strong className="text-red-600">"zombie cells."</strong>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            What are "Zombie Cells" — And Why They're Destroying Your Bones
          </h2>

          <p>
            <strong>"Zombie cells" are senescent cells that refuse to die,</strong> but instead linger in the body, flooding surrounding tissues with inflammatory chemicals that corrode bone structure, destroy cartilage, and accelerate joint pain and stiffness.
          </p>

          <p>
            For years, these anomalous cells were considered harmless. But Elon Musk and his team's investigation uncovered something far more disturbing:
          </p>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-red-700 italic text-center py-4 sm:py-6 my-6 sm:my-8 bg-red-50 rounded-lg px-4 sm:px-6 break-words">
            "Zombie cells don't just age your body... they actively sabotage your bones and joints — often decades before symptoms appear."
          </blockquote>

          <p>
            Since 2020, the accumulation of zombie cells has become an invisible epidemic in aging women, silently stealing their strength, mobility, and independence day after day.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            "Your Bones Aren't Just Weak — They're Under Attack From Within"
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.ataqueCelulasZumbisDentro}
                alt="Zombie cell attack on bone structure"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            Inside your body, millions of cells are turning rogue — transforming into what scientists now call "zombie cells."
          </p>

          <p>
            These dysfunctional cells <strong>refuse to die... but they also don't heal.</strong>
          </p>

          <p>
            Instead, they release toxic inflammatory chemicals that corrode your bones and cartilage from the inside out.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              <strong>When you're young,</strong> your body can eliminate these anomalous cells before they cause much damage.
            </p>
            <p className="font-bold text-red-700">
              But after 50, this defense system begins to fail.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">
            And what happens next is terrifying:
          </h3>

          <ul className="list-none space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Bone density decreases by up to <strong>2% per year</strong></span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Joint cartilage becomes thinner, stiffer, and more inflamed</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Your bone structure becomes fragile, brittle, and vulnerable even to slight movements</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-red-700">
            You might not feel anything until it's too late.
          </p>

          <p>
            This isn't just stiffness. <strong>It's structural deterioration.</strong>
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Your skeleton is falling apart — piece by piece.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            If You're Experiencing These Symptoms, Your Bones and Joints May Already Be Compromised
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.celulasSenescentes}
                alt="Signs of active senescent cells"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-red-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              If you're experiencing any of the following problems, it could be a sign that <strong>zombie cells are already destroying your bones and joints from the inside out:</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">1</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Deep stiffness or pain</p>
                  <p className="text-xs sm:text-sm text-gray-600">Persistent in hips, knees, or lower back</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">2</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Grinding or popping sounds</p>
                  <p className="text-xs sm:text-sm text-gray-600">Crepitation in joints when moving</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">3</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Difficulty getting up</p>
                  <p className="text-xs sm:text-sm text-gray-600">From a chair without using your arms</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">4</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Fear of falling</p>
                  <p className="text-xs sm:text-sm text-gray-600">Especially on stairs or uneven ground</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">5</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Decreased height</p>
                  <p className="text-xs sm:text-sm text-gray-600">Or visibly stooped posture</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">6</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Muscle weakness</p>
                  <p className="text-xs sm:text-sm text-gray-600">When carrying groceries, climbing stairs, or walking</p>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 font-bold text-sm sm:text-base">
              And eventually… you start saying no to the things that gave life meaning:
            </p>
            <p className="text-gray-600 text-sm sm:text-base break-words">
              Gardening • Traveling • Playing with grandchildren • Even going to church or visiting friends.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Why "Standard" Treatments Not Only Fail, But Make Things Worse
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.pesquisaNasaDensidadeOssea}
                alt="NASA research on bone density"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="space-y-4 sm:space-y-6 my-6 sm:my-8">
            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Calcium supplements?</h3>
              <p className="text-sm sm:text-base">You absorb very little of it. What you do absorb can end up <strong>hardening your arteries more than your bones.</strong></p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Bisphosphonates like Fosamax or Boniva?</h3>
              <p className="mb-3 text-sm sm:text-base">These medications can temporarily slow bone loss, but <strong>at what cost?</strong></p>
              <div className="bg-gray-100 rounded p-3 sm:p-4">
                <p className="font-bold text-xs sm:text-sm mb-2">Side effects include:</p>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Jaw bone necrosis</li>
                  <li>• Ulcers</li>
                  <li>• Esophageal cancer</li>
                  <li>• High risk of spontaneous fractures</li>
                </ul>
              </div>
              <p className="mt-3 font-bold text-red-700 text-sm sm:text-base break-words">
                Medications intended to prevent fractures can, in fact, cause them.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Glucosamine and chondroitin?</h3>
              <p className="text-sm sm:text-base">Study after study shows <strong>little to no measurable improvement</strong> in joint space or mobility.</p>
            </div>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center py-6 sm:py-8 my-8 sm:my-10 bg-blue-50 rounded-lg px-4 sm:px-6 break-words">
            "If you're not bedridden yet, your body is still begging for healing."
          </blockquote>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.raioXOssoSaudavel}
                alt="Difference between healthy and weakened bone"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            What you're feeling now isn't just pain.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            It's a sign. A final warning.
          </p>

          <p>
            Because, inside your bones and joints, there are still living cells trying to rebuild, trying to hold their ground.
          </p>

          <p className="font-bold">
            But they are overwhelmed.
          </p>

          <p className="text-red-700">
            Surrounded by inflammation. Suffocated by zombie cells. Deprived of the stimuli needed to survive.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>But if you still feel discomfort</strong> — if your body is still reacting — that means there's still time.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              This is still a chance to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Eliminate the zombie cells that trigger inflammation and deterioration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Reactivate your body's ability to build bones and repair cartilage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Feel stronger, more stable, and more flexible week after week</span>
              </li>
            </ul>
          </div>

          {/* ============================================
              NEW SECTION IMPLEMENTED AS PER SPECIFICATIONS
              ============================================ */}
          <section className="protocolo-secao">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
              🦴 The Protocol That Regenerates Your Bones
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              Start With Just 7 Minutes. Add the Rest When You're Ready.
            </h3>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 break-words">
              The <strong>Anti-Zombie Cell Protocol</strong> features <strong>8 scientific techniques</strong> intelligently organized:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 break-words">🎯 ESSENTIAL CORE (7 minutes)</h4>
                <p className="text-sm sm:text-base text-blue-700 break-words">The <strong>3 main techniques</strong> that eliminate 70% of zombie cells</p>
              </div>
              
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3 break-words">⚡ BOOSTERS (+8 minutes)</h4>
                <p className="text-sm sm:text-base text-green-700 break-words">An additional <strong>5 techniques</strong> that accelerate complete regeneration</p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              📊 PROVEN PROGRESSION:
            </h3>

            <div className="overflow-x-auto my-6 sm:my-8">
              <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Week</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Techniques</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Time</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">1-2</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">3 main</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">7 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Pain reduced 30-50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">3-4</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">8 complete</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">15 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Fluid movement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">5+</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">8 complete</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">15 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Total regeneration</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              🔥 THE 3 CORE TECHNIQUES (7 MINUTES)
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">1️⃣ ANTI-CYTOKINE SEQUENCE (3 minutes)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Zombie cells release inflammatory toxins 24/7</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 THE SOLUTION:</strong> Movements that force the elimination of these cells</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULT:</strong> Less stiffness, better sleep, -50% pain</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">2️⃣ REGENERATIVE JOINT MOBILITY (2 minutes)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Joints dry due to dead cells in fluid</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 THE SOLUTION:</strong> Natural lubrication through specific movement</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULT:</strong> Movement without cracking, confidence when walking</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">3️⃣ DIRECT BONE ACTIVATION (2 minutes)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Bones stop producing new cells</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 THE SOLUTION:</strong> Stimuli that reactivate bone building</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULT:</strong> Bone density increases week after week</p>
              </div>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              ⚡ THE 5 COMPLEMENTARY TECHNIQUES (+8 MINUTES)
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">4️⃣ COMPLETE JOINT RESET (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Eliminates zombie cells trapped in joints</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">5️⃣ VERTEBRAL GLIDE (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Releases compression and improves posture</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">6️⃣ TOTAL COORDINATION (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Reconnects muscles with bones</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">7️⃣ STEM CELL ACTIVATION (1 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Accelerates production of new bone cells</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">8️⃣ NUTRITIONAL PROTOCOL (1 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">3 foods that cut off nutrition to zombie cells</p>
              </div>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              🎯 START TODAY: JUST 7 MINUTES
            </h2>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8 text-center">
              <p className="text-base sm:text-lg mb-3 sm:mb-4 break-words"><strong>First week:</strong> Only techniques 1, 2, 3 (7 minutes)</p>
              <p className="text-base sm:text-lg mb-3 sm:mb-4 break-words"><strong>If it works:</strong> Add the other 5 (+8 minutes)</p>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 break-words"><strong>If it doesn't work:</strong> Money back, no questions asked</p>
              
              <blockquote className="bg-white border-l-4 border-green-600 pl-4 sm:pl-6 py-3 sm:py-4 italic text-lg sm:text-xl text-green-800 break-words">
                "Most people see results IN THE FIRST WEEK with just the 3 main techniques."
              </blockquote>
            </div>

          </section>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            The Revolutionary Protocol That Helps Bones Regenerate and Joints Revitalize
          </h2>

          <p>
            This discovery by Elon Musk led to the development of a <strong>revolutionary protocol</strong> that addresses bone deterioration at its source.
          </p>

          <figure className="my-8 sm:my-10 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image 
                src={IMAGES.protocoloAntiCelulasZumbis}
                alt="Anti-Zombie Cell Bone Regeneration Protocol"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          {/* ============================================
              ALTERATION 1: SIMPLIFIED NEW SECTION
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            How Your Bones Regenerate While You Sleep
          </h2>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 sm:mb-6 break-words">
            The 3 Main Techniques That Eliminate Zombie Cells
          </h3>

          <div className="space-y-4 sm:space-y-6 my-8 sm:my-10">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">1️⃣ 7-Minute Anti-Cytokine Routine</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Zombie cells release inflammatory toxins 24/7</p>
              <p className="mb-2"><strong className="text-blue-700">💡 THE SOLUTION:</strong> Morning sequence that forces your body to eliminate these invasive cells</p>
              <p><strong className="text-green-700">✅ RESULT:</strong> Week 1: Less stiffness, better sleep, 30-50% pain reduction</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">2️⃣ Regenerative Joint Mobility</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Dry and stiff joints due to zombie cells in fluid</p>
              <p className="mb-2"><strong className="text-blue-700">💡 THE SOLUTION:</strong> Specific movements that expel dead cells and lubricate joints</p>
              <p><strong className="text-green-700">✅ RESULT:</strong> Week 2: Fluid movement, no cracking, confidence when walking</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">3️⃣ Anti-Inflammatory Nutritional Protocol</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 THE PROBLEM:</strong> Your current diet feeds zombie cells</p>
              <p className="mb-2"><strong className="text-blue-700">💡 THE SOLUTION:</strong> 3 key foods that cut off nutrition to invasive cells</p>
              <p><strong className="text-green-700">✅ RESULT:</strong> Week 3: More energy, muscle recovery, stronger bones</p>
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-600 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <h4 className="text-lg sm:text-xl font-bold mb-4 break-words">🎁 BONUS: 5 More Advanced Techniques</h4>
            <p className="mb-4 text-sm sm:text-base">In addition to the 3 main ones, you receive 5 complementary techniques for complete regeneration:</p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• Activation of dormant stem cells</li>
              <li>• Cartilage rehydration</li>
              <li>• Vertebral glide</li>
              <li>• Complete joint reset</li>
              <li>• Total coordination map</li>
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            From Chronic Pain to Total Mobility in 30 Days
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-10">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-3">🔴 WEEK 1-2: BLOCKADE</h4>
              <p className="text-sm sm:text-base">Zombie cells attacked • Reduced inflammation • Decreased pain</p>
            </div>
            
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">🟡 WEEK 3-4: CLEANSING</h4>
              <p className="text-sm sm:text-base">Invasive cells eliminated • Fluid movement • Restored confidence</p>
            </div>
            
            <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3">🟢 WEEK 5-8: REGENERATION</h4>
              <p className="text-sm sm:text-base">Bones rebuilt • Full strength • Complete independence</p>
            </div>
          </div>

          {/* ============================================
              ALTERATION 2: FIRST CTA STRENGTHENED WITH UPDATED CTA
              ============================================ */}
          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ✅ START WITH 7 MINUTES TODAY
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block align-middle" />
                <br />
                <small className="text-xs sm:text-sm opacity-80">Complete protocol + unconditional guarantee</small>
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Start regeneration in 7 minutes
            </p>
          </div>

          {/* ============================================
              ALTERATION 3: UPDATED HEADLINE
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words text-center">
            Your Bones Automatically Strengthen Every Week
          </h2>

          <div className="space-y-4 sm:space-y-6 my-8 sm:my-10">
            {CRONOLOGIA.map((item, idx) => (
              <div key={idx} className={`${item.cor} border-2 ${item.corBorda} rounded-lg p-6 sm:p-8`}>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600">{item.semana}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.fase}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">📋</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">Techniques Activated:</p>
                      <p className="text-gray-700">{item.tecnicas}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">🔬</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">What Happens Biologically:</p>
                      <p className="text-gray-700">{item.biologico}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">💫</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">What You Feel:</p>
                      <p className="text-gray-700">{item.sensacao}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">🎯</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">Zombie Cell Status:</p>
                      <p className="text-gray-900 font-bold text-lg">{item.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-10">
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 border-2 border-red-300">
              <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-3">🔴 WEEK 1</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Less stiffness upon waking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Better sleep quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">20-30% reduction in pain</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 border-2 border-yellow-300">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">🟡 WEEK 2</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Joints move without cracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Confidence climbing/descending stairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Less systemic inflammation</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-2 border-blue-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">🔵 WEEK 4</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Noticeably improved muscle strength</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Naturally more upright posture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Ability to do activities without fear</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-2 border-green-300">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3">🟢 WEEK 8</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Visibly increased bone density</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Complete independence recovered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Mobility you thought you'd lost</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ============================================
              ALTERATION 3: UPDATED HEADLINE
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            7 Minutes in the Morning = Stronger Bones All Day Long
          </h2>

          <p>
            Getting results with the Anti-Zombie Cell Protocol is <strong>simple.</strong>
          </p>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8 text-center">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">
              📅 Just follow the 15-minute protocol every morning after waking.
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words">
              For faster results, many users apply the additional evening protocol, especially in the first 30 to 60 days.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">
            From the very first application, the Protocol activates:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Eliminates inflammatory zombie cells</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 flex items-center">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Activates bone-forming proteins</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Relieves joint pain and swelling</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Rebuilds strength from the inside out</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Initially,</strong> you'll notice subtle changes: More energy. Better sleep. Less stiffness upon waking.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Then something incredible happens...
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Climbing stairs doesn't scare you. Getting up from a chair doesn't require strategy.
            </p>
            <p className="font-bold text-lg sm:text-xl text-green-800 break-words">
              You move with confidence. It's like getting your life back.
            </p>
          </div>

          {/* ============================================
              ALTERATION 3: UPDATED HEADLINE
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            How Real Women Eliminated Their Zombie Cells
          </h2>

          <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Helen, 68 years old</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "I felt the difference in my knees within days."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "I tried everything: calcium, glucosamine, creams. But nothing made my knees feel stable again. I started following the Anti-Zombie Cell Protocol a few months ago and felt the difference within days. The pain decreased, and I no longer felt like I was one step away from an injury."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "Now I walk my dog every morning without fear. I even returned to gardening. I follow the protocol every day and will never stop."
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Ruth, 64 years old</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Each week brought me closer to feeling like myself again."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "After the first week, my joints weren't as stiff. By the second month, I could get up without support. By the third? I danced at my niece's wedding — and when I say danced, I mean really danced."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "The protocol not only helped my bones, but it gave me back my confidence. I feel strong again."
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Diane, 66 years old</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "I was skeptical, but within 10 days I felt stronger."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "I've been following the Protocol for a week and a half, and I'm impressed with how quickly it works. Before, I couldn't sleep without painkillers. My knees screamed every time I stood up."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Today? I walked across town, went through three stores, and didn't need to sit down once. The pain has improved at least 75 to 80% — and I feel stable. Confident."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "I no longer use a heating pad. For the first time in a long time, I feel like there's hope again."
            </p>
          </div>

          <div className="border-l-4 border-orange-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Margaret, 62 years old</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "I started with just the first 3 techniques — and it worked!"
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "I was skeptical because I have advanced arthritis. I didn't want to do everything at once. I started with just Technique 1 (7 minutes) + Technique 3 (pain) + Technique 4 (nutritional)."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "By the THIRD DAY, I already felt less stiffness. By the EIGHTH DAY, I slept without painkillers for the first time in 3 years."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Now I'm in week 6 with all 8 techniques complete. My fingers are less swollen. I can write without pain. I took a 45-minute walk yesterday — something I couldn't do 10 years ago."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "The protocol is real. The 8 techniques work because each one eliminates zombie cells from a different angle. You don't have to do them all at once!"
            </p>
          </div>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.esperancaRenovada}
                alt="Renewed hope - Women regaining quality of life"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center break-words">
              What the medical community has to say
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden relative">
                <Image 
                  src={IMAGES.draMarina}
                  alt="Dr. Marina Santos"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 italic break-words">
                  "I have analyzed countless protocols for bone density, and the <strong>Anti-Zombie Cell Protocol is unique.</strong> If you suffer from bone loss or joint discomfort, I recommend this protocol."
                </p>
                <p className="font-bold text-blue-900 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Dr. Marina Santos, PhD, MSM
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              ALTERATION 2: SECOND CTA STRENGTHENED
              ============================================ */}
          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ⚡ REGAIN MY MOBILITY IN 7 MINUTES
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block align-middle" />
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Complete protocol + 30-day guarantee
            </p>
          </div>

          {/* ============================================
              ALTERATION 3: UPDATED HEADLINE
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words text-center">
            Why This Protocol Works When Everything Else Fails
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-red-600">
              <p className="mb-3">
                <strong>You've already tried:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Calcium (doesn't absorb)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Bisphosphonates (side effects)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Glucosamine (doesn't work)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Generic exercise (doesn't eliminate zombie cells)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-600">
              <p className="font-bold text-lg mb-3 break-words">
                All of these treat SYMPTOMS. The Protocol treats the CAUSE.
              </p>
              <p className="text-sm sm:text-base text-gray-700 break-words">
                You're not fighting pain. You're eliminating the cells that create the pain.
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 sm:p-6 border-l-4 border-green-600">
              <p className="font-bold text-lg mb-3 text-gray-900 break-words">
                Why the 8 techniques work where others have failed:
              </p>
              <ol className="space-y-2 text-sm sm:text-base">
                <li><strong>1.</strong> Each technique targets ONE specific source of zombie cells</li>
                <li><strong>2.</strong> Together, they leave no escape</li>
                <li><strong>3.</strong> Your body can regenerate (finally)</li>
                <li><strong>4.</strong> Results start in WEEK 1, not months later</li>
              </ol>
            </div>

            <div className="bg-yellow-100 rounded-lg p-4 sm:p-6 border-l-4 border-yellow-600">
              <p className="font-bold text-lg break-words">
                You're not paying for 'hope.' You're paying for a SCIENTIFIC PROTOCOL with 8 techniques that work in different ways.
              </p>
            </div>
          </div>

          {/* ============================================
              ALTERATION 3: UPDATED HEADLINE
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Every Day You Wait, Your Zombie Cells Multiply
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.consequenciasInacao}
                alt="Consequences of inaction - Progressive bone deterioration"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
            What today seems like <strong>"just a little pain"</strong>... can turn into a <strong className="text-red-700">life-changing fracture tomorrow.</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Imagine a crack in your home's foundation. Over time, it spreads, weakening the entire structure until it collapses.
            </p>
            <p className="font-bold text-lg sm:text-xl">
              That's exactly what's happening inside your body.
            </p>
          </div>

          <ul className="space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Bones become thinner and weaker</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Joints become inflamed and brittle</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">One wrong move can leave you injured, immobile, or worse</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-center my-6 sm:my-8 break-words">
            The difference between regaining your strength... and losing it forever... all comes down to what you do now.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Why You Won't Find the Protocol in Bookstores or Pharmacies
          </h2>

          <p className="mb-4 sm:mb-6">
            The Anti-Zombie Cell Protocol is available <strong>only through this page</strong> — and for good reason.
          </p>

          <p className="mb-4 sm:mb-6">
            By eliminating intermediaries, we ensure you have direct access to the most advanced discoveries at a fair price.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="text-sm sm:text-base break-words">
              This approach is part of the commitment to accessibility: making advanced bone and joint support <strong>accessible to those who need it most.</strong>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            And Now for the Best Part
          </h2>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 text-center">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              While the normal price is <span className="line-through text-red-600">$297</span>, right now you can get access for just <span className="line-through text-red-600">$197</span>.
            </p>
            
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              But when I shared my story with the team, they went above and beyond.
            </p>

            <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 break-words">
              Today, for a limited time, you can experience the Anti-Zombie Cell Protocol for just:
            </p>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">$297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">$197</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">$27</div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                🔥 Save $270!
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                A price that makes it accessible to those who need it most.
              </p>

              <div className="mt-6 sm:mt-8 bg-red-100 border-2 border-red-400 rounded-lg p-4 sm:p-6">
                <p className="text-red-700 font-bold text-2xl mb-2">🛡️ {vagas} Spots Remaining This Week</p>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6">
              <p className="font-bold text-base sm:text-lg text-blue-900">
                And you don't have to make a decision now.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            30-Day Progressive Guarantee, No Questions Asked
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.garantiaSeguranca}
                alt="Safety and satisfaction guarantee"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <Shield className="w-20 h-20 sm:w-32 sm:h-32 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
                  <strong>Try the Protocol for a full 30 days.</strong> That's 30 days to feel the difference in your bones, joints, and daily life.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-red-600">
                    <p className="font-bold text-red-800 text-sm sm:text-base">✓ Week 1</p>
                    <p className="text-xs sm:text-sm text-gray-700">If you don't notice reduced pain/stiffness → Full refund</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-yellow-600">
                    <p className="font-bold text-yellow-800 text-sm sm:text-base">✓ Week 2</p>
                    <p className="text-xs sm:text-sm text-gray-700">If you don't notice more fluid movement → Full refund</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-green-600">
                    <p className="font-bold text-green-800 text-sm sm:text-base">✓ Week 4</p>
                    <p className="text-xs sm:text-sm text-gray-700">If you don't notice regeneration starting → Full refund</p>
                  </div>
                </div>

                <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
                  You have <strong className="text-green-700">30 days to confirm that the 8 techniques work.</strong> If it doesn't work AT ANY POINT, your money back.
                </p>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">No hassle</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">No fine print</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">No catch</p>
                  </div>
                </div>

                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 text-center">
                  <p className="font-bold text-base sm:text-lg text-yellow-900 break-words">Why would they do that?</p>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-800 mt-2 break-words">Because they know it works.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="text-center mb-4 sm:mb-6">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 sm:mb-4 break-words">
                ⚠️ ATTENTION: This offer may be unavailable when you return!
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-center mb-4 sm:mb-6 break-words">
              The Protocol has been unavailable several times due to <strong>enormous demand.</strong>
            </p>

            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">
              If you're interested in rebuilding your bones and regaining your independence, <strong className="text-red-700">now is the time to act.</strong>
            </p>

            <figure className="my-6 sm:my-8 w-full">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden bg-gray-200">
                <Image 
                  src={IMAGES.agiAgora}
                  alt="Time to act - Don't miss this opportunity"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                />
              </div>
            </figure>

            {/* ============================================
                ALTERATION 2: URGENCY CTA
                ============================================ */}
            <div className="text-center">
              <Button 
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl animate-pulse break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
              >
                <span className="text-center block leading-tight">
                  🚨 STOP BONE DESTRUCTION NOW
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                Before it's too late
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            The real risk? Living with pain and regret.
          </h2>

          <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">You have two options:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">✗</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 break-words">Option 1: Do nothing</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Bones will continue to thin</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Joints will become stiffer</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">World will get smaller and smaller</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Until you ask yourself: "How did I get here?"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 break-words">Option 2: Give the Protocol a chance</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Movement without fear</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Stronger bones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Revitalized joints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">If it doesn't work? Money back. No risk.</span>
                </li>
              </ul>
              <div className="bg-green-100 border border-green-400 rounded-lg p-2 sm:p-3 text-center">
                <p className="font-bold text-green-800 text-sm sm:text-base">✅ 100% RISK-FREE</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-8 sm:my-10 rounded-r-lg">
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              I still thank God every day for finding this protocol.
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 break-words">
              It didn't just change my body — it changed my future.
            </p>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Do you want to remain trapped by pain and reduced mobility?
            </p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-800 break-words">
              Or do you want a real chance to gain the strength and confidence you deserve?
            </p>
          </div>

          {/* ============================================
              ALTERATION 2: FINAL MAIN CTA
              ============================================ */}
          <div className="my-8 sm:my-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              This could be the decision that divides your life into "before" and "after"
            </h3>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">$297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">$197</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">$27</div>
              <p className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4 sm:mb-6">
                🔥 SAVE $270 TODAY!
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                🦴 ELIMINATE ZOMBIE CELLS FROM MY BONES
                <ArrowRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 inline-block align-middle" />
              </span>
            </Button>

            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
              🔒 Secure Payment • ⚡ Instant Access • 🛡️ 30-Day Unconditional Guarantee
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Do I need to do all 8 techniques, or can I start with fewer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                You can start with the 3 main techniques (Techniques 1, 3, 4 = ~10 minutes). Many people notice results in the first week with just these 3.

                However, for maximum zombie cell elimination, all 8 techniques work together. People who do all 8 see results 3x faster.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Which technique should I do FIRST?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Technique 1 (7-Minute Routine). It blocks inflammatory cytokines. Without this initial blockade, the other techniques have reduced effectiveness.

                After Technique 1, you gradually add the others.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Does the Protocol work for everyone?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                The Protocol was developed especially for adults over 50 who suffer from bone loss and joint discomfort. It works particularly well for people who still experience symptoms (pain, stiffness), as this indicates that the body is still trying to recover.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                How long does it take to see results?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Most people notice subtle changes in the first few weeks (more energy, better sleep, less morning stiffness). More significant results appear between 30-60 days of consistent protocol use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Is it safe to use with medications?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                The Protocol is based on natural and nutritional techniques. However, we always recommend consulting your doctor before starting any new health protocol, especially if you are already taking medications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                What if the Protocol doesn't work for me?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                You have a full 30 days to try the Protocol risk-free. If you're not satisfied at any point, simply request a full refund — no questions asked, no hassle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                How do I receive the Protocol after purchase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Access is immediate! After payment confirmation, you will receive an email with full access instructions for the Protocol. You can start applying it the same day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Do I need to buy expensive supplements?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                No! The Protocol focuses on natural techniques, strategic sun exposure, specific food combinations, and protocols based on common foods. It does not require expensive or hard-to-find supplements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </article>

      <footer className="bg-gray-100 border-t-2 border-gray-300 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-yellow-800 font-bold text-center mb-2 text-sm sm:text-base">
              ⚠️ IMPORTANT - LEGAL DISCLAIMER
            </p>
            <p className="text-gray-700 text-xs sm:text-sm text-center leading-relaxed break-words">
              <strong>THIS IS AN ADVERTISEMENT AND NOT A NEWS ARTICLE.</strong> The information is for educational purposes only. Always consult your doctor before starting any new health protocol.
            </p>
          </div>

          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-3 sm:space-y-4 break-words">
            <p>
              © 2024 Anti-Zombie Cell Bone Regeneration Protocol. All rights reserved.
            </p>
            <p>
              This product does not guarantee results. Any reference to the performance of a strategy should not be interpreted as a guarantee of results. Results may vary from person to person.
            </p>
            <p>
              This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .article-body {
          font-family: Georgia, 'Times New Roman', serif;
        }
        
        .article-body p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .article-body h2,
        .article-body h3 {
          font-family: Georgia, serif;
          line-height: 1.2;
        }
        
        @media (min-width: 640px) {
          .article-body p:first-of-type::first-letter {
            font-size: 3.5rem;
            float: left;
            line-height: 0.9;
            margin-right: 0.5rem;
            font-weight: bold;
          }
        }
        
        .article-body a {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .article-body a:hover {
          color: #1d4ed8;
        }
        
        .article-body blockquote {
          font-style: italic;
          position: relative;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        @media (max-width: 640px) {
          .object-contain {
            object-fit: contain !important;
          }
        }

        .break-words {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </main>
  )
}