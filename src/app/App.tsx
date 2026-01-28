import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Star,
  MapPin,
  Shield,
  Clock,
  Droplets,
  Sparkles,
  Car,
} from "lucide-react";
import { ZekieButton } from "@/app/components/ZekieButton";
import { MobileActionBar } from "@/app/components/MobileActionBar";
import { ServiceCard } from "@/app/components/ServiceCard";
import { ReviewCard } from "@/app/components/ReviewCard";
import { BeforeAfterSlider } from "@/app/components/BeforeAfterSlider";
import { BookingModule } from "@/app/components/BookingModule";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Calendar } from "@/app/components/ui/calendar";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

// Logo placeholder - replace with actual logo image
const logoImage = "";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:7204482369";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Zekie Mobile Detailing"
                className="h-12 lg:h-16 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider"
              >
                FAQ
              </button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <ZekieButton
                variant="secondary"
                size="sm"
                onClick={() => setQuoteDialogOpen(true)}
              >
                Get Quote
              </ZekieButton>
              <ZekieButton
                variant="primary"
                size="sm"
                onClick={() => setBookingDialogOpen(true)}
              >
                Book Now
              </ZekieButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0a0a0b]">
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="block w-full text-left text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider py-2"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("service-area")}
                className="block w-full text-left text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider py-2"
              >
                Service Area
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider py-2"
              >
                FAQ
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Red glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2626] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DC2626] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-[#DC2626]" />
            <span className="text-white/80 text-sm">
              Serving Broomfield, CO & Surrounding Areas
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl mb-6 leading-tight tracking-wider">
            <span className="text-white">SHOWROOM FINISH.</span>
            <br />
            <span className="text-[#DC2626]">DONE AT YOUR LOCATION.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialists in Ceramic Coating, Paint Correction & Interior
            Detailing.
            <span className="text-white block mt-2">
              Mobile service that comes to you.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <ZekieButton size="lg" onClick={() => setBookingDialogOpen(true)}>
              Book Now
            </ZekieButton>
            <ZekieButton
              variant="secondary"
              size="lg"
              onClick={() => setQuoteDialogOpen(true)}
            >
              Get a Quote
            </ZekieButton>
            <button
              onClick={handleCall}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-heading uppercase text-sm tracking-wider"
            >
              <Phone className="w-5 h-5" />
              (720) 448-2369
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-white/60">
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-[#DC2626]" />
              <span className="text-sm">Mobile Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#DC2626]" />
              <span className="text-sm">Ceramic & Paint Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#DC2626]" />
              <span className="text-sm">Fast Scheduling</span>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#DC2626] fill-[#DC2626]"
                />
              ))}
            </div>
            <span className="text-white/70 text-sm">
              5.0 • Based on customer reviews
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4 text-white uppercase tracking-wider">
              Premium Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Specialized treatments that deliver showroom-quality results at
              your location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              title="Ceramic Coating"
              description="Hydrophobic protection with deep gloss. Long-lasting shine and protection against the elements."
              icon={<Droplets className="w-6 h-6" />}
              imageUrl="https://images.unsplash.com/photo-1641900409160-3d288c5a5805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjZXJhbWljJTIwY29hdGluZyUyMHNoaW5lfGVufDF8fHx8MTc2OTU3NTMzNXww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <ServiceCard
              title="Paint Correction"
              description="Swirl removal, clarity, and mirror finish. Professional multi-stage polishing for flawless paint."
              icon={<Sparkles className="w-6 h-6" />}
              imageUrl="https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludCUyMGNvcnJlY3Rpb24lMjBwb2xpc2hpbmd8ZW58MXx8fHwxNzY5NTc1MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <ServiceCard
              title="Interior Detailing"
              description="Deep clean, stain and odor removal, complete reset. Restore your interior to like-new condition."
              icon={<Shield className="w-6 h-6" />}
              imageUrl="https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY5NTA0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>

          {/* Additional services list */}
          <div className="bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-white/10 rounded-xl p-8">
            <h3 className="font-heading text-2xl mb-6 text-white uppercase tracking-wider text-center">
              Also Available
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              {[
                "Waxing",
                "Polishing",
                "Stain Removal",
                "Odor Removal",
                "Steam Cleaning",
                "Exterior & Interior Detailing",
              ].map((service) => (
                <div
                  key={service}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  • {service}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => scrollToSection("results")}
              className="text-[#DC2626] hover:text-[#EF4444] transition-colors font-heading uppercase text-sm tracking-wider"
            >
              View Results →
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Action Bar */}
      <MobileActionBar
        onBookClick={() => setBookingDialogOpen(true)}
        onQuoteClick={() => setQuoteDialogOpen(true)}
        onCallClick={handleCall}
      />

      {/* Booking Dialog - Placeholder for now */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="bg-[#1a1a1c] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl uppercase tracking-wider">
              Book Your Detail
            </DialogTitle>
          </DialogHeader>
          <BookingModule onComplete={() => setBookingDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Quote Dialog */}
      <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
        <DialogContent className="bg-[#1a1a1c] border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl uppercase tracking-wider">
              Request a Quote
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-6">
            <div>
              <Label>Name</Label>
              <Input
                className="bg-[#0a0a0b] border-white/10 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                className="bg-[#0a0a0b] border-white/10 text-white"
                placeholder="(720) 448-2369"
                type="tel"
              />
            </div>
            <div>
              <Label>Service Interested In</Label>
              <Select>
                <SelectTrigger className="bg-[#0a0a0b] border-white/10 text-white">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1c] border-white/10 text-white">
                  <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                  <SelectItem value="paint">Paint Correction</SelectItem>
                  <SelectItem value="interior">Interior Detailing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Vehicle Info</Label>
              <Input
                className="bg-[#0a0a0b] border-white/10 text-white"
                placeholder="Year, Make, Model"
              />
            </div>
            <div>
              <Label>Additional Details</Label>
              <Textarea
                className="bg-[#0a0a0b] border-white/10 text-white"
                placeholder="Tell us about your vehicle's condition and your goals..."
                rows={4}
              />
            </div>
            <ZekieButton className="w-full" type="submit">
              Submit Quote Request
            </ZekieButton>
          </form>
        </DialogContent>
      </Dialog>

      {/* Results Section */}
      <section
        id="results"
        className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0b] via-[#1a1a1c] to-[#0a0a0b]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4 text-white uppercase tracking-wider">
              Zekie Squeaky Clean Results
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See the transformation. Real results from our mobile detailing
              services.
            </p>
          </div>

          {/* Before/After Slider */}
          <div className="mb-12">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1594798546489-0a5cd52bb4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwZGlydHklMjBiZWZvcmV8ZW58MXx8fHwxNzY5NTc1MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGx1eHVyeSUyMGNhciUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTU3NTM1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              altText="Paint correction transformation"
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-[#DC2626]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1641900409160-3d288c5a5805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjZXJhbWljJTIwY29hdGluZyUyMHNoaW5lfGVufDF8fHx8MTc2OTU3NTMzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ceramic coating result"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading text-lg uppercase tracking-wider">
                  Ceramic Coating
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-[#DC2626]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludCUyMGNvcnJlY3Rpb24lMjBwb2xpc2hpbmd8ZW58MXx8fHwxNzY5NTc1MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Paint correction result"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading text-lg uppercase tracking-wider">
                  Paint Correction
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-[#DC2626]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY5NTA0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior detailing result"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading text-lg uppercase tracking-wider">
                  Interior Detail
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <ZekieButton size="lg" onClick={() => setBookingDialogOpen(true)}>
              Book Your Detail
            </ZekieButton>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4 text-white uppercase tracking-wider">
              How It Works
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Simple, transparent process from booking to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-heading text-2xl mb-4 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                  1
                </div>
                <h3 className="font-heading text-2xl mb-3 text-white uppercase tracking-wider">
                  Choose Service + Time
                </h3>
                <p className="text-white/70">
                  Select your service and preferred date/time. We'll work around
                  your schedule.
                </p>
              </div>
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-heading text-2xl mb-4 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                  2
                </div>
                <h3 className="font-heading text-2xl mb-3 text-white uppercase tracking-wider">
                  We Confirm Details
                </h3>
                <p className="text-white/70">
                  We'll discuss your vehicle's condition and goals. Quote
                  confirmed before any work.
                </p>
              </div>
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-heading text-2xl mb-4 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                3
              </div>
              <h3 className="font-heading text-2xl mb-3 text-white uppercase tracking-wider">
                We Arrive + You Approve
              </h3>
              <p className="text-white/70">
                We come to you with professional equipment. Inspect results
                before we leave.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-[#DC2626]/30 rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-[#DC2626] mx-auto mb-3" />
            <p className="text-white/80">
              <span className="text-white font-heading uppercase tracking-wider">
                Satisfaction Guarantee:{" "}
              </span>
              Quote confirmed before any work begins. You approve results before
              we leave.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="relative py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0b] via-[#1a1a1c] to-[#0a0a0b]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-6xl mb-4 text-white uppercase tracking-wider">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Real feedback from satisfied customers in Broomfield and
              surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              name="Michael R."
              rating={5}
              review="Best ceramic coating I've ever had. The hydrophobic effect is incredible and Zekie's attention to detail is unmatched. Worth every penny."
              date="2 weeks ago"
            />
            <ReviewCard
              name="Sarah K."
              rating={5}
              review="My paint looks brand new after the correction service. They removed swirls I thought were permanent. Mobile service made it so convenient!"
              date="1 month ago"
            />
            <ReviewCard
              name="David L."
              rating={5}
              review="Interior was disgusting after my kids' sports season. Zekie made it look and smell brand new. Can't believe the transformation!"
              date="3 weeks ago"
            />
            <ReviewCard
              name="Jennifer M."
              rating={5}
              review="Professional, on time, and the results speak for themselves. My Tesla has never looked this good. Highly recommend!"
              date="2 months ago"
            />
            <ReviewCard
              name="Robert T."
              rating={5}
              review="Quote-only pricing was fair and transparent. They explained everything and the work quality exceeded expectations."
              date="1 month ago"
            />
            <ReviewCard
              name="Amanda P."
              rating={5}
              review="Love that they come to me in Broomfield. Saved me so much time and my car looks absolutely stunning now."
              date="3 weeks ago"
            />
          </div>
        </div>
      </section>

      {/* Mobile Action Bar */}
    </div>
  );
}
