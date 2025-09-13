import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FlagImage from "/Flag_of_Jonglei.png";
import { 
  Building2,
  Star,
  Users,
  FileText,
  MessageSquare,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="gov-hero text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Government Building Background Image */}
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern government building"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/70 to-primary-900/90"></div>
        </div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-primary-500/15 to-primary-400/25"></div>
      </div>
      
      <div className="gov-container relative z-20 w-full">
        <div className="py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Welcome Message */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
                <Star className="h-4 w-4 mr-2 text-white" />
                Official Government Portal
              </div>
              
              {/* Main Heading */}
              <h1 className="font-display responsive-text-6xl font-black leading-tight tracking-tight text-white">
                <span className="block mb-2 sm:mb-4">Welcome to the State of</span>
                <span className="text-white block">Jonglei State</span>
                <span className="block mt-2 sm:mt-4 responsive-text-3xl font-bold text-white/90">
                  YOUR JONGLEI STARTS HERE!
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="responsive-text-lg text-white/90 leading-relaxed max-w-lg">
                Modern digital platform for government services and citizen engagement
              </p>

              {/* CTA Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl rounded-2xl font-bold text-lg border-0 touch-friendly transform hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/citizen-portal" className="flex items-center space-x-3">
                    <img 
                      src={FlagImage} 
                      alt="Jonglei State Flag" 
                      className="h-6 w-6 object-contain"
                    />
                    <span>Find State Organization</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 shadow-xl hover:shadow-2xl rounded-2xl font-semibold text-lg backdrop-blur-sm touch-friendly transform hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/about" className="flex items-center space-x-3">
                    <Star className="h-6 w-6" />
                    <span>Learn More</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Quick Links */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md space-y-6">
                {/* Quick Links Card */}
                <div className="glass-effect rounded-3xl shadow-2xl p-8 border border-white/10 backdrop-blur-md">
                  <div className="space-y-3">
                    <Button className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0" asChild>
                      <Link to="/citizen-portal" className="flex items-center justify-center">
                        <Users className="h-5 w-5 mr-3" />
                        Citizen Portal
                      </Link>
                    </Button>
                    <Button className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0" asChild>
                      <Link to="/departments" className="flex items-center justify-center">
                        <img 
                          src={FlagImage} 
                          alt="Jonglei State Flag" 
                          className="h-5 w-5 mr-3 object-contain"
                        />
                        Departments
                      </Link>
                    </Button>
                    <Button className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0" asChild>
                      <Link to="/projects" className="flex items-center justify-center">
                        <FileText className="h-5 w-5 mr-3" />
                        Projects
                      </Link>
                    </Button>
                    <Button className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0" asChild>
                      <Link to="/contact" className="flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 mr-3" />
                        Contact
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="mt-20 animate-apple-slide-in [animation-delay:0.6s]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <img 
                      src={FlagImage} 
                      alt="Jonglei State Flag" 
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div className="font-display text-3xl font-black text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">7</div>
                  <div className="text-sm text-white/90 font-semibold group-hover:text-white transition-colors duration-300">Counties</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-black text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">2.1M+</div>
                  <div className="text-sm text-white/90 font-semibold group-hover:text-white transition-colors duration-300">Population</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-black text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">45+</div>
                  <div className="text-sm text-white/90 font-semibold group-hover:text-white transition-colors duration-300">Services</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md p-6 rounded-3xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-black text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">98%</div>
                  <div className="text-sm text-white/90 font-semibold group-hover:text-white transition-colors duration-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;