import React, { useState, useEffect } from 'react';
import { Mic, Video, Users, Zap, CheckCircle, Play, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function MetcordLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "AI Transcription",
      desc: "Automatic real-time transcription with 98% accuracy"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Smart Recording",
      desc: "Record meetings with intelligent scene detection"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Speaker Detection",
      desc: "Identify and label different speakers automatically"
    }
  ];

  const benefits = [
    "Unlimited meeting recordings",
    "AI-powered summaries",
    "Searchable transcripts",
    "Multi-language support",
    "Cloud storage included",
    "Team collaboration tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Metcord
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-gray-700">Features</a>
              <a href="#pricing" className="block text-gray-700">Pricing</a>
              <a href="#about" className="block text-gray-700">About</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-600">AI-Powered Meeting Assistant</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Never Miss a
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Meeting Moment
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Record, transcribe, and analyze your meetings with powerful AI. Focus on the conversation while Metcord handles the rest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span className="font-semibold">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Trusted by 50,000+ teams</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 overflow-hidden">
                {/* Meeting Interface Mockup */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                        alt="User" 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">Team Standup</div>
                        <div className="text-sm text-gray-500">12 participants</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600">Recording</span>
                    </div>
                  </div>

                  {/* Live Transcription Display */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" 
                        alt="Speaker" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-indigo-600 mb-1">John Smith</div>
                        <div className="text-sm text-gray-700">Let's discuss the Q4 roadmap and key priorities...</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" 
                        alt="Speaker" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-purple-600 mb-1">Sarah Johnson</div>
                        <div className="text-sm text-gray-700 animate-pulse">I agree, we should focus on...</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Icons Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {features.map((feature, i) => (
                      <div 
                        key={i}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          activeFeature === i 
                            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg scale-105' 
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={activeFeature === i ? 'text-white' : 'text-indigo-600'}>
                          {feature.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to make your meetings more productive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.desc}
                </p>
                {/* Feature specific images */}
                {i === 0 && (
                  <div className="mt-4 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=400&h=300&fit=crop" 
                      alt="Transcription" 
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
                {i === 1 && (
                  <div className="mt-4 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" 
                      alt="Recording" 
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
                {i === 2 && (
                  <div className="mt-4 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Teams Love Metcord
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams already saving hours every week with automated meeting intelligence.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Meeting Analytics</h3>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Analytics image */}
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                      alt="Analytics Dashboard" 
                      className="w-full h-48 object-cover rounded-xl opacity-80"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Speaking Time</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur">
                        <div className="h-full w-3/4 bg-white rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Engagement</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur">
                        <div className="h-full w-11/12 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Start your free trial today. No credit card required.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Metcord</span>
          </div>
          <p className="text-gray-400">
            © 2025 Metcord. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}