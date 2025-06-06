"use client"

import { useState, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black p-4 md:p-8">
      {/* Mobile frame */}
      <div className="relative w-full max-w-3xl mx-auto border-l-2 border-r-2 border-purple-800/30 min-h-screen px-4 md:px-8">
        {/* Status bar */}
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm w-full py-2 px-4 flex justify-between items-center border-b border-purple-800/30 z-10">
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400">atharv mittal</div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>

        <div className="py-8">
          <div className="mb-8">
            <div className="inline-block bg-black/50 border border-purple-500/20 rounded-md px-3 py-1 text-sm text-purple-400/80">
              <span>{time} | india (GMT+5:30)</span>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                <div className="h-2 w-2 rounded-full bg-purple-400 mr-2"></div>
                <div className="h-2 w-2 rounded-full bg-purple-300"></div>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/stilln0thing"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:atharv.2023ug3019@iiitranchi.ac.in"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6">
              <div>
                <h1 className="text-6xl font-mono text-purple-500 mt-4 glitch-text">atharv.</h1>
                <p className="text-gray-400 mt-2 font-mono">
                  backend developer focused on golang, python, and
                  <br />
                  web technologies, with a knack for competitive programming.
                </p>
                <p className="text-gray-400 mt-4 font-mono">
                  student @{" "}
                  <a href="#" className="text-purple-500 hover:underline">
                    iiit ranchi
                  </a>
                  . ex-backend intern @{" "}
                  <a href="#" className="text-purple-500 hover:underline">
                    invsto
                  </a>
                  .
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50 glow-effect">
                  <Image
                    src="/profileimg.jpeg"
                    alt="Atharv Mittal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <Terminal>
            <nav className="mb-6 pb-4 border-b border-gray-800">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#about" className="text-purple-500 hover:text-purple-400 transition-colors">
                    about
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-500 hover:text-purple-400 transition-colors">
                    skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-500 hover:text-purple-400 transition-colors">
                    projects
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-gray-500 hover:text-purple-400 transition-colors">
                    achievements
                  </a>
                </li>
              </ul>
            </nav>

            <section id="about" className="mb-12">
              <h2 className="text-purple-500 font-mono mb-4 flex items-center">
                <span className="text-gray-600 mr-2">#</span> about
              </h2>
              <div className="pl-4 border-l border-purple-800/30 text-gray-400 font-mono">
                <p className="mb-4">
                  i&apos;m a computer science student at iiit ranchi, specializing in data science and ai. i started programming with
                  competitive coding, then ventured into web development with react, node.js, and backend technologies
                  like golang and fastAPI.
                </p>
                <p className="mb-4">
                  worked as a backend developer intern at invsto, where i&apos;ve refactored and debugged
                  over 100 api endpoints built with python and fastapi, improving performance and backend efficiency.
                </p>
                <p>i&apos;m passionate about creating robust developer tools and scalable backend systems.</p>
               
              </div>
            </section>

            <section id="skills" className="mb-6">
              <h2 className="text-purple-500 font-mono mb-4 flex items-center">
                <span className="text-gray-600 mr-2">#</span> skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-300 font-mono mb-3 pl-4 border-l border-purple-800/30">languages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm p-0.5 ">
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors ">
                        python
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        golang
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        javascript
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">c</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-300 font-mono mb-3 pl-4 border-l border-purple-800/30">web development</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm p-0.5">
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        react.js
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        node.js
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        express.js
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        fastapi
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-300 font-mono mb-3 pl-4 border-l border-purple-800/30">Databases & Tools</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm p-0.5 ">
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors ">
                        postgresql
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        mysql
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">
                        docker
                      </span>
                    </div>
                    <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-3 text-center transition-all hover:bg-black/30 group  bg-gray-800">
                      <span className="text-gray-400 font-mono group-hover:text-purple-400 transition-colors">git</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="mb-12">
              <h2 className="text-purple-500 font-mono mb-4 flex items-center">
                <span className="text-gray-600 mr-2">#</span> projects
              </h2>
              <div className="space-y-6">
                <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-4 relative transition-all hover:bg-black/30 group">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-300 font-mono group-hover:text-purple-400 transition-colors">
                      &gt; QueueIt
                    </h3>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-gray-500 font-mono mt-2">
                    A comprehensive virtual queue management platform with real-time updates using WebSockets. Built
                    with Golang and Gin framework for high performance.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">golang</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">gin</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">postgresql</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">websockets</span>
                  </div>
                </div>

                <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-4 relative transition-all hover:bg-black/30 group">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-300 font-mono group-hover:text-purple-400 transition-colors">
                      &gt; CarVista
                    </h3>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-gray-500 font-mono mt-2">
                    An interactive car viewing platform using React.js and Three.js for 3D model rendering. Features
                    detailed car specifications and immersive viewing experience.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">react.js</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">express.js</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">three.js</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">mysql</span>
                  </div>
                </div>

                <div className="border border-gray-800 hover:border-purple-800/30 rounded-md p-4 relative transition-all hover:bg-black/30 group">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-300 font-mono group-hover:text-purple-400 transition-colors">
                      &gt; Flight Management System
                    </h3>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-gray-500 font-mono mt-2">
                    A full-fledged Flight Booking Backend System using microservice architecture. Integrated with
                    RabbitMQ for inter-service communication.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">express.js</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">node.js</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">rabbitmq</span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-mono">mysql</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="achievements" className="mb-12">
              <h2 className="text-purple-500 font-mono mb-4 flex items-center">
                <span className="text-gray-600 mr-2">#</span> achievements
              </h2>
              <div className="pl-4 border-l border-purple-800/30 text-gray-400 font-mono">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <span>
                      Reached <span className="text-purple-400">3 star</span> on CodeChef with a max rating of{" "}
                      <span className="text-purple-400">1641</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <span>
                      Reached <span className="text-purple-400">Pupil</span> on CodeForces with a max Rating of{" "}
                      <span className="text-purple-400">1236</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <span>
                      Solved more than <span className="text-purple-400">300 problems</span> across all platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <span>
                      Achieved <span className="text-purple-400">Global Rank 784</span> in CodeChef Starters 127 (Div 3)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <span>
                      Achieved <span className="text-purple-400">Global Rank 253</span> in CodeChef Starters 119 (Div 4)
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="contact" className="mb-6">
              <h2 className="text-purple-500 font-mono mb-4 flex items-center">
                <span className="text-gray-600 mr-2">#</span> contact
              </h2>
              <div className="pl-4 border-l border-purple-800/30 text-gray-400 font-mono">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-purple-500" />
                    <a
                      href="mailto:amittalqaz@gmail.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      amittalqaz@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-purple-500" />
                    <a href="tel:+918299027502" className="hover:text-purple-400 transition-colors">
                      +91-8299027502
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github size={16} className="text-purple-500" />
                    <a href="https://github.com/stilln0thing" className="hover:text-purple-400 transition-colors">
                      github.com/stilln0thing
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin size={16} className="text-purple-500" />
                    <a href="#" className="hover:text-purple-400 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Terminal>

          <footer className="mt-8 text-center text-gray-600 text-sm font-mono">
            <p>© {new Date().getFullYear()} Atharv Mittal. All rights reserved.</p>
          
          </footer>
        </div>

        {/* Mobile navigation bar */}
        <div className="sticky bottom-0 bg-gray-900/80 backdrop-blur-sm w-full py-3 px-4 border-t border-purple-800/30 flex justify-around">
          <a href="#about" className="text-purple-500 hover:text-purple-400">
            <div className="h-1 w-1 rounded-full bg-purple-500 mx-auto mb-1"></div>
            <span className="text-xs">About</span>
          </a>
          <a href="#skills" className="text-gray-500 hover:text-purple-400">
            <div className="h-1 w-1 rounded-full bg-gray-500 mx-auto mb-1"></div>
            <span className="text-xs">Skills</span>
          </a>
          <a href="#projects" className="text-gray-500 hover:text-purple-400">
            <div className="h-1 w-1 rounded-full bg-gray-500 mx-auto mb-1"></div>
            <span className="text-xs">Projects</span>
          </a>
          <a href="#achievements" className="text-gray-500 hover:text-purple-400">
            <div className="h-1 w-1 rounded-full bg-gray-500 mx-auto mb-1"></div>
            <span className="text-xs">Achievements</span>
          </a>
        </div>
      </div>
    </main>
  )
}
