import Image from "next/image";
import logoImg from "../../public/images/image.png";
import heroImg from "../../public/images/hero_therapist_child_1780133652125.png";
import physioImg from "../../public/images/physiotherapy_illustration_1780133669136.png";
import occImg from "../../public/images/occupational_therapy_illustration_1780133686844.png";
import speechImg from "../../public/images/speech_therapy_illustration_1780133704729.png";
import behaveImg from "../../public/images/behavioral_therapy_illustration_1780133728434.png";
import playImg from "../../public/images/kids_playroom_1780133745469.png";
import handImg from "../../public/images/child_handprints_1780133762637.png";

import { Calendar, PlayCircle, Shield, CheckCircle2, Phone, BrainCircuit, Users, HeartHandshake, Puzzle, Smile, Activity, MessageCircle, Star, Sparkles, Clock, ArrowRight, Mail, MapPin } from "lucide-react";
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-main font-sans overflow-x-hidden">
      
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center px-12 py-2 text-xs font-medium text-gray-300 bg-[#212121]">
        <div className="flex items-center gap-2">
          <span className="text-accent text-sm">🌿</span>
          Compassionate Care. Meaningful Progress.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-accent" />
            Mon - Sat: 9:00 AM - 7:00 PM
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            +91 98765 43210
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 sticky top-0 z-50 bg-bg/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Image 
            src={logoImg} 
            alt="SEEDs Therapy Center Logo" 
            width={48} 
            height={48} 
            className="w-16 h-16 object-contain" 
          />
          <div className="flex flex-col">
            <div className="flex items-baseline">
               <span className="font-extrabold text-2xl tracking-tight text-primary">SEEDS</span>
               <span className="font-semibold text-2xl tracking-tight text-text-main">THERAPHY</span>
            </div>
            <span className="text-[10px] text-secondary tracking-[0.2em] font-bold">CENTER</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-text-light text-sm">
          <a href="#home" className="text-primary border-b-2 border-primary pb-1">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#therapies" className="hover:text-primary transition-colors flex items-center gap-1">Therapies <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#conditions" className="hover:text-primary transition-colors flex items-center gap-1">Conditions <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#resources" className="hover:text-primary transition-colors flex items-center gap-1">Resources <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <button className="bg-primary text-surface px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-secondary transition-all text-sm">
          <Calendar size={16} /> Book a Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-8 pb-8 md:pb-12 pt-2 md:pt-4 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-8 relative -mt-4">
        {/* Soft mountain shapes in background */}
        <div className="absolute top-0 right-0 w-[120%] h-[120%] z-0 pointer-events-none overflow-hidden -mx-8 px-8 -translate-y-16">
           {/* SVG for wavy background */}
           <svg viewBox="0 0 1440 600" className="absolute top-0 right-0 w-full h-auto min-h-[500px] object-cover" preserveAspectRatio="none">
              <path d="M0,350 Q200,280 400,400 T800,350 T1200,480 L1440,400 L1440,600 L0,600 Z" fill="var(--soft-green)" opacity="0.6"/>
              <path d="M0,450 Q250,380 500,500 T1000,420 T1440,520 L1440,600 L0,600 Z" fill="var(--secondary)" opacity="0.2"/>
              <path d="M800,100 Q1000,0 1200,200 T1440,150 L1440,600 L800,600 Z" fill="var(--soft-green)" opacity="0.4"/>
           </svg>
        </div>

        <div className="flex-1 space-y-5 relative z-10 pl-4 md:pl-12 lg:pr-8 -mt-8 md:-mt-12">
          <div className="inline-flex items-center gap-2 bg-[#EBE5D9] text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase opacity-0 animate-fade-in-up">
            <span className="text-accent text-xs">🌿</span> WHERE LITTLE STEPS LEAD TO BIG CHANGES
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-primary tracking-tight opacity-0 animate-fade-in-up delay-100">
            Understanding.<br/>
            Supporting.<br/>
            <span className="text-primary/90 font-serif italic font-medium" style={{ fontFamily: 'Georgia, serif' }}>Helping Them Thrive.</span> 
            <svg className="inline-block ml-2 w-8 h-8 text-primary opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </h1>
          
          <p className="text-text-main font-medium text-base max-w-lg leading-relaxed py-1 opacity-0 animate-fade-in-up delay-200">
            We provide personalized, evidence-based therapies to <span className="font-bold">help children reach their full potential</span> in a safe, caring, and nurturing environment.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-1 opacity-0 animate-fade-in-up delay-300">
            <button className="bg-primary text-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-secondary transition-all text-xs shadow-md hover:scale-105 active:scale-95">
              <Calendar size={16} /> Book a Consultation
            </button>
            <button className="bg-transparent text-primary border-2 border-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-surface transition-all text-xs hover:scale-105 active:scale-95">
              <PlayCircle size={16} /> Watch Our Story
            </button>
          </div>
          
          <div className="flex items-center justify-between w-full max-w-xl pt-10 gap-2 opacity-0 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-xs font-bold text-text-main leading-tight whitespace-nowrap">
               <Smile size={24} className="text-primary stroke-[1.5] shrink-0" />
               Child-Centered<br/>Approach
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-text-main leading-tight whitespace-nowrap">
               <Users size={24} className="text-primary stroke-[1.5] shrink-0" />
               Experienced<br/>Therapists
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-text-main leading-tight whitespace-nowrap">
               <HeartHandshake size={24} className="text-primary stroke-[1.5] shrink-0" />
               Family<br/>Involvement
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-text-main leading-tight whitespace-nowrap">
               <Shield size={24} className="text-primary stroke-[1.5] shrink-0" />
               Safe & Nurturing<br/>Environment
            </div>
          </div>
        </div>
        
        <div className="flex-[1.1] relative z-10 w-full flex justify-end mt-12 md:mt-0 opacity-0 animate-fade-in-right delay-300">
          <div className="relative w-full max-w-[550px]">
             {/* Masked Image container */}
             <div className="w-full relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Image 
                   src={heroImg} 
                   alt="Therapist and Child" 
                   width={800} 
                   height={600} 
                   className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                />
             </div>
             
             {/* Floating Info Box on Image */}
             <div className="absolute -bottom-8 right-0 bg-primary text-surface p-8 rounded-3xl max-w-[320px] shadow-2xl z-20 animate-float" style={{ borderRadius: '24px 24px 8px 24px' }}>
                <h3 className="font-extrabold text-xl mb-3 leading-tight">Every Child is Unique.<br/>Every Step Matters.</h3>
                <p className="text-sm opacity-90 leading-relaxed font-medium">We're here to understand, support, and celebrate your child's journey.</p>
                
                {/* Floating Circle Heart */}
                <div className="absolute -bottom-6 -right-4 w-16 h-16 bg-bg border border-soft-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="hero-heart" />
                    <div className="svg-container">
                      <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="10,10 20,20"></polygon>
                          <polygon points="10,50 20,50"></polygon>
                          <polygon points="20,80 30,70"></polygon>
                          <polygon points="90,10 80,20"></polygon>
                          <polygon points="90,50 80,50"></polygon>
                          <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Leaves Decoration */}
             <div className="absolute top-20 -left-12 z-30 opacity-90 animate-float" style={{ animationDelay: '1s' }}>
                <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
                  <path d="M30 0 C45 15 60 30 30 50 C0 70 15 85 30 100" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="40" cy="20" rx="10" ry="6" transform="rotate(-30 40 20)" fill="var(--secondary)"/>
                  <ellipse cx="20" cy="35" rx="10" ry="6" transform="rotate(30 20 35)" fill="var(--secondary)"/>
                  <ellipse cx="45" cy="55" rx="10" ry="6" transform="rotate(-40 45 55)" fill="var(--secondary)"/>
                  <ellipse cx="15" cy="70" rx="10" ry="6" transform="rotate(40 15 70)" fill="var(--secondary)"/>
                </svg>
             </div>
          </div>
        </div>
      </section>

      {/* Our Therapies */}
      <section id="therapies" className="py-20 px-8 max-w-7xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 text-accent font-bold text-xs tracking-widest uppercase mb-4">
             <span className="text-secondary">🌿</span> OUR THERAPIES <span className="text-secondary">🌿</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-16">
             Personalized Therapies for Every Child
          </h2>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <StaggerItem className="bg-surface p-8 rounded-[40px] text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-soft-green flex flex-col items-center">
            <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden bg-soft-green/30 p-2">
               <Image src={physioImg} alt="Physiotherapy" fill className="object-contain p-2 mix-blend-multiply" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-3">Physiotherapy</h3>
            <p className="text-sm text-text-light mb-6 flex-grow leading-relaxed">Improving strength, mobility, balance, and coordination through fun and effective therapy sessions.</p>
            <a href="#" className="text-primary font-bold text-sm flex items-center justify-center gap-2 group w-full border-t border-soft-green pt-4">
               Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          </StaggerItem>

          {/* Card 2 */}
          <StaggerItem className="bg-surface p-8 rounded-[40px] text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-soft-green flex flex-col items-center">
            <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden bg-soft-green/30 p-2">
               <Image src={occImg} alt="Occupational Therapy" fill className="object-contain p-2 mix-blend-multiply" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-3">Occupational Therapy</h3>
            <p className="text-sm text-text-light mb-6 flex-grow leading-relaxed">Helping children develop daily life skills, fine motor abilities, and independence.</p>
            <a href="#" className="text-primary font-bold text-sm flex items-center justify-center gap-2 group w-full border-t border-soft-green pt-4">
               Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          </StaggerItem>

          {/* Card 3 */}
          <StaggerItem className="bg-surface p-8 rounded-[40px] text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-soft-green flex flex-col items-center">
            <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden bg-soft-green/30 p-2">
               <Image src={speechImg} alt="Speech Therapy" fill className="object-contain p-2 mix-blend-multiply" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-3">Speech Therapy</h3>
            <p className="text-sm text-text-light mb-6 flex-grow leading-relaxed">Enhancing communication skills, speech clarity, and language development.</p>
            <a href="#" className="text-primary font-bold text-sm flex items-center justify-center gap-2 group w-full border-t border-soft-green pt-4">
               Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          </StaggerItem>

          {/* Card 4 */}
          <StaggerItem className="bg-surface p-8 rounded-[40px] text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-soft-green flex flex-col items-center">
            <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden bg-soft-green/30 p-2">
               <Image src={behaveImg} alt="Behavioral Therapy" fill className="object-contain p-2 mix-blend-multiply" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-3">Behavioral Therapy</h3>
            <p className="text-sm text-text-light mb-6 flex-grow leading-relaxed">Supporting positive behavior, emotional regulation, and social skills.</p>
            <a href="#" className="text-primary font-bold text-sm flex items-center justify-center gap-2 group w-full border-t border-soft-green pt-4">
               Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </a>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Conditions We Support */}
      <section id="conditions" className="py-10 px-8 max-w-7xl mx-auto relative z-10">
        <FadeIn className="bg-soft-green/40 rounded-[40px] p-10 border border-soft-green backdrop-blur-sm">
           <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-10">
             <span className="text-secondary">🌿</span> CONDITIONS WE SUPPORT <span className="text-secondary">🌿</span>
           </div>
           
           <StaggerContainer className="flex flex-wrap justify-between items-start gap-6">
              {[
                { icon: <Puzzle className="text-primary" size={32}/>, title: "Autism Spectrum\nDisorder (ASD)" },
                { icon: <BrainCircuit className="text-primary" size={32}/>, title: "ADHD" },
                { icon: <HeartHandshake className="text-primary" size={32}/>, title: "Intellectual\nDisability (ID)" },
                { icon: <Activity className="text-primary" size={32}/>, title: "Global\nDevelopmental\nDelay (GDD)" },
                { icon: <Users className="text-primary" size={32}/>, title: "Specific Learning\nDisorder (SLD)" }
              ].map((cond, idx) => (
                <StaggerItem key={idx} className="flex flex-col items-center text-center gap-4 w-32 group cursor-pointer">
                   <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-green">
                     {cond.icon}
                   </div>
                   <p className="text-xs font-bold text-text-main whitespace-pre-line">{cond.title}</p>
                </StaggerItem>
              ))}
              
              <StaggerItem className="flex flex-col justify-center items-center w-32 h-[120px]">
                 <button className="bg-primary text-surface hover:bg-secondary transition-colors px-4 py-5 rounded-3xl text-sm font-bold flex flex-col items-center justify-center gap-2 w-full h-full shadow-lg">
                    View All<br/>Conditions <ArrowRight size={18}/>
                 </button>
              </StaggerItem>
           </StaggerContainer>
        </FadeIn>
      </section>

      {/* Why Parents Trust Us */}
      <section id="about" className="py-20 px-8 max-w-7xl mx-auto overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <SlideInLeft className="flex-1 space-y-6">
               <div className="flex items-center gap-2 text-accent font-bold text-xs tracking-widest uppercase">
                  <span className="text-secondary">🌿</span> WHY PARENTS TRUST US
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                  Compassion. Expertise.<br/>Results That Matter.
               </h2>
               <StaggerContainer className="space-y-4 pt-6">
                 {[
                   "Individualized therapy plans",
                   "Experienced & certified therapists",
                   "Play-based, child-friendly environment",
                   "Parent training & involvement",
                   "Progress tracking & regular updates"
                 ].map((item, idx) => (
                   <StaggerItem key={idx} className="flex items-center gap-4 text-text-main font-bold">
                      <div className="bg-secondary/20 p-1 rounded-full"><CheckCircle2 className="text-secondary" size={20} /></div>
                      {item}
                   </StaggerItem>
                 ))}
               </StaggerContainer>
               <button className="bg-primary text-surface px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-secondary transition-all mt-8 text-sm shadow-lg">
                  Know More About Us <ArrowRight size={18}/>
               </button>
            </SlideInLeft>

            <SlideInRight className="flex-1 relative h-[450px] w-full flex items-center justify-center">
               {/* Collage of Images */}
               <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-bg transform -translate-x-12 -translate-y-8 bg-soft-green/30">
                  <Image src={playImg} alt="Playroom" fill className="object-cover mix-blend-multiply opacity-90" />
               </div>
               <div className="absolute z-20 w-56 h-56 rounded-full overflow-hidden shadow-xl border-8 border-bg transform translate-x-20 translate-y-20 bg-surface animate-float">
                  <Image src={handImg} alt="Happy child" fill className="object-cover" />
               </div>
            </SlideInRight>
         </div>

         <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
            <StaggerItem className="bg-surface p-6 rounded-3xl border border-soft-green flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:-translate-y-1 transition-transform shadow-sm">
               <div className="w-14 h-14 bg-soft-green rounded-full flex items-center justify-center text-primary flex-shrink-0"><Users size={24}/></div>
               <div>
                 <h3 className="text-3xl font-extrabold text-primary">500+</h3>
                 <p className="text-xs text-text-light font-bold mt-1">Children Supported</p>
               </div>
            </StaggerItem>
            <StaggerItem className="bg-surface p-6 rounded-3xl border border-soft-green flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:-translate-y-1 transition-transform shadow-sm">
               <div className="w-14 h-14 bg-soft-green rounded-full flex items-center justify-center text-primary flex-shrink-0"><Star size={24}/></div>
               <div>
                 <h3 className="text-3xl font-extrabold text-primary">10+</h3>
                 <p className="text-xs text-text-light font-bold mt-1">Expert Therapists</p>
               </div>
            </StaggerItem>
            <StaggerItem className="bg-surface p-6 rounded-3xl border border-soft-green flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:-translate-y-1 transition-transform shadow-sm">
               <div className="w-14 h-14 bg-soft-green rounded-full flex items-center justify-center text-primary flex-shrink-0"><HeartHandshake size={24}/></div>
               <div>
                 <h3 className="text-3xl font-extrabold text-primary">4+</h3>
                 <p className="text-xs text-text-light font-bold mt-1">Specialized<br className="hidden lg:block"/>Therapies</p>
               </div>
            </StaggerItem>
            <StaggerItem className="bg-surface p-6 rounded-3xl border border-soft-green flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:-translate-y-1 transition-transform shadow-sm">
               <div className="w-14 h-14 bg-soft-green rounded-full flex items-center justify-center text-primary flex-shrink-0"><Smile size={24}/></div>
               <div>
                 <h3 className="text-3xl font-extrabold text-primary">98%</h3>
                 <p className="text-xs text-text-light font-bold mt-1">Parent Satisfaction</p>
               </div>
            </StaggerItem>
         </StaggerContainer>
      </section>

      {/* CTA Footer Section */}
      <section id="contact" className="py-12 px-8 max-w-[1400px] mx-auto pb-24 overflow-hidden">
         <FadeIn className="bg-soft-green rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm border border-secondary/20">
            
            {/* Decorative Mountain Background in CTA */}
            <div className="absolute bottom-0 right-0 w-full h-[150%] pointer-events-none opacity-20">
               <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" fill="none">
                 <path d="M800 400L800 0C650 150 500 50 350 250C200 450 50 300 0 400L800 400Z" fill="var(--secondary)" opacity="0.4"/>
                 <path d="M800 400L800 100C600 300 450 150 250 350C100 500 0 350 0 400L800 400Z" fill="var(--primary)" opacity="0.6"/>
               </svg>
            </div>
            
            <div className="relative z-10 space-y-4 max-w-xl">
               <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">Ready to Take the First Step?</h2>
               <p className="text-text-main font-medium">Let's work together to create a brighter, more confident future for your child.</p>
            </div>
            
            <div className="relative z-10 flex items-center gap-4 mt-8 md:mt-0">
               <button className="bg-primary text-surface px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary transition-all shadow-xl hover:scale-105 active:scale-95">
                  <Calendar size={18} /> Schedule Assessment
               </button>
               <button className="bg-surface text-primary p-4 rounded-full font-bold flex items-center justify-center hover:bg-bg transition-all shadow-md hover:scale-105 active:scale-95 border border-soft-green">
                  <MessageCircle size={24} />
               </button>
            </div>
         </FadeIn>

         {/* Bottom Trust Indicators */}
         <StaggerContainer className="flex flex-wrap justify-between items-center gap-6 mt-16 px-6 pt-10 border-t border-soft-green">
            {[
              { icon: <Shield size={20}/>, text: "Licensed Professionals" },
              { icon: <CheckCircle2 size={20}/>, text: "Evidence-Based" },
              { icon: <Phone size={20}/>, text: "24/7 Support" },
              { icon: <Clock size={20}/>, text: "Flexible Timings" },
              { icon: <Sparkles size={20}/>, text: "Child Friendly" }
            ].map((item, idx) => (
              <StaggerItem key={idx} className="flex items-center gap-2 text-text-light font-bold text-sm">
                 <div className="text-secondary">{item.icon}</div>
                 {item.text}
              </StaggerItem>
            ))}
         </StaggerContainer>
      </section>

      {/* Main Footer */}
      <footer className="bg-primary text-surface pt-20 pb-10 px-8 relative overflow-hidden">
         {/* Decorative Leaves for Footer */}
         <div className="absolute top-0 right-0 pointer-events-none opacity-20 transform scale-150 -translate-y-1/4">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
               <path d="M50 0 C75 25 100 50 50 83 C0 116 25 41 50 0" fill="var(--soft-green)"/>
            </svg>
         </div>

         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* Brand & Socials */}
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <Image src={logoImg} alt="SEEDs Therapy Logo" width={48} height={48} className="rounded-full bg-surface p-1" />
                  <span className="font-extrabold tracking-tight text-xl">SEEDs Therapy</span>
               </div>
               <p className="text-sm opacity-80 leading-relaxed font-medium max-w-xs">
                  Providing personalized, evidence-based therapies to help children reach their full potential in a caring environment.
               </p>
               <div className="flex items-center gap-4 pt-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-surface transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-surface transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-surface transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-surface transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
               </div>
            </div>

            {/* Quick Links */}
            <div>
               <h4 className="font-bold text-lg mb-6">Quick Links</h4>
               <ul className="space-y-3 opacity-80 font-medium text-sm">
                  <li><a href="#home" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Home</a></li>
                  <li><a href="#about" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</a></li>
                  <li><a href="#therapies" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Our Therapies</a></li>
                  <li><a href="#conditions" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Conditions We Support</a></li>
               </ul>
            </div>

            {/* Therapies */}
            <div>
               <h4 className="font-bold text-lg mb-6">Our Services</h4>
               <ul className="space-y-3 opacity-80 font-medium text-sm">
                  <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Physiotherapy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Occupational Therapy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Speech Therapy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14}/> Behavioral Therapy</a></li>
               </ul>
            </div>

            {/* Contact */}
            <div>
               <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
               <ul className="space-y-4 opacity-80 font-medium text-sm">
                  <li className="flex items-start gap-3">
                     <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                     <span>123 Healing Path Way,<br/>Wellness District, NY 10001</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <Phone size={18} className="text-secondary shrink-0" />
                     <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <Mail size={18} className="text-secondary shrink-0" />
                     <span>hello@seedstherapy.com</span>
                  </li>
               </ul>
            </div>
         </div>

         <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-secondary/40 text-center opacity-60 text-xs font-medium">
            <p>&copy; {new Date().getFullYear()} SEEDs Therapy Center. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

