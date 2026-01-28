import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';
import { ZekieButton } from '@/app/components/ZekieButton';
import { Calendar as CalendarComponent } from '@/app/components/ui/calendar';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

interface BookingModuleProps {
  onComplete?: () => void;
}

export function BookingModule({ onComplete }: BookingModuleProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    service: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    vehicleInfo: '',
    notes: '',
  });

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Confirmation
  };

  if (step === 4) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-[#DC2626] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(220,38,38,0.5)]">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="font-heading text-3xl mb-4 text-white uppercase tracking-wider">
          Booking Request Received!
        </h3>
        <p className="text-white/70 mb-2">
          We'll confirm your appointment within 24 hours and provide your custom quote.
        </p>
        <p className="text-white/70 mb-8">
          A confirmation text will be sent to {formData.phone}
        </p>
        <div className="bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-white/10 rounded-xl p-6 text-left max-w-md mx-auto">
          <h4 className="font-heading text-xl mb-3 text-white uppercase tracking-wider">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/60">Service:</span>
              <span className="text-white">{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Date:</span>
              <span className="text-white">{selectedDate?.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Time:</span>
              <span className="text-white">{formData.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Location:</span>
              <span className="text-white">{formData.address}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm transition-all ${
              step >= num
                ? 'bg-[#DC2626] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                : 'bg-white/10 text-white/40'
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Step 1: Service & Date */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <Label className="text-white">Select Service *</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger className="bg-[#0a0a0b] border-white/10 text-white">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1c] border-white/10 text-white">
                <SelectItem value="Ceramic Coating">Ceramic Coating</SelectItem>
                <SelectItem value="Paint Correction">Paint Correction</SelectItem>
                <SelectItem value="Interior Detailing">Interior Detailing</SelectItem>
                <SelectItem value="Full Detail">Full Detail Package</SelectItem>
                <SelectItem value="Other">Other / Multiple Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-white">Select Date *</Label>
            <div className="mt-2 bg-[#0a0a0b] border border-white/10 rounded-lg p-4">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="mx-auto"
                disabled={(date) => date < new Date()}
              />
            </div>
          </div>

          <div>
            <Label className="text-white">Select Time *</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, timeSlot: time })}
                  className={`py-2 px-3 rounded-lg text-sm font-heading uppercase tracking-wider transition-all ${
                    formData.timeSlot === time
                      ? 'bg-[#DC2626] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <ZekieButton
            type="button"
            onClick={handleNext}
            disabled={!formData.service || !selectedDate || !formData.timeSlot}
            className="w-full"
          >
            Continue
          </ZekieButton>
        </div>
      )}

      {/* Step 2: Contact Info */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label className="text-white">Full Name *</Label>
            <Input
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label className="text-white">Phone Number *</Label>
            <Input
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="(720) 448-2369"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <Label className="text-white">Email</Label>
            <Input
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="john@example.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label className="text-white">Service Location (Address) *</Label>
            <Input
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="123 Main St, Broomfield, CO"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
            <p className="text-white/50 text-xs mt-1">We come to you! Enter where you'd like us to service your vehicle.</p>
          </div>

          <div className="flex gap-3">
            <ZekieButton type="button" variant="secondary" onClick={handleBack} className="flex-1">
              Back
            </ZekieButton>
            <ZekieButton
              type="button"
              onClick={handleNext}
              disabled={!formData.name || !formData.phone || !formData.address}
              className="flex-1"
            >
              Continue
            </ZekieButton>
          </div>
        </div>
      )}

      {/* Step 3: Vehicle Info & Notes */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <Label className="text-white">Vehicle Information *</Label>
            <Input
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="2023 Tesla Model 3"
              value={formData.vehicleInfo}
              onChange={(e) => setFormData({ ...formData, vehicleInfo: e.target.value })}
              required
            />
            <p className="text-white/50 text-xs mt-1">Year, Make, Model</p>
          </div>

          <div>
            <Label className="text-white">Additional Details</Label>
            <Textarea
              className="bg-[#0a0a0b] border-white/10 text-white"
              placeholder="Tell us about your vehicle's condition, problem areas, or specific goals..."
              rows={5}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-[#DC2626]/30 rounded-lg p-4">
            <p className="text-white/80 text-sm">
              <span className="text-[#DC2626] font-heading uppercase tracking-wider">Note: </span>
              We'll confirm your quote before beginning any work. No surprises.
            </p>
          </div>

          <div className="flex gap-3">
            <ZekieButton type="button" variant="secondary" onClick={handleBack} className="flex-1">
              Back
            </ZekieButton>
            <ZekieButton type="submit" disabled={!formData.vehicleInfo} className="flex-1">
              Confirm Booking
            </ZekieButton>
          </div>
        </div>
      )}
    </form>
  );
}
