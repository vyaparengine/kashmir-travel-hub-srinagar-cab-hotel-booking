import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, Car, HelpCircle, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, TAXI_FLEET, getWhatsAppUrl } from '../data';

export default function PricingCalculator() {
  const [days, setDays] = useState<number>(5);
  const [selectedTaxiId, setSelectedTaxiId] = useState<string>('etios_swift');
  const [includeHotels, setIncludeHotels] = useState<boolean>(false);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    'gulmarg', 'pahalgam', 'srinagar_sightseeing'
  ]);

  const toggleDestination = (id: string) => {
    if (selectedDestinations.includes(id)) {
      setSelectedDestinations(selectedDestinations.filter(item => item !== id));
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  const getTaxiRate = () => {
    switch (selectedTaxiId) {
      case 'innova':
        return 5500;
      case 'tempo_traveler':
        return 7500;
      case 'etios_swift':
      default:
        return 4000;
    }
  };

  const getTaxiName = () => {
    const taxi = TAXI_FLEET.find(t => t.id === selectedTaxiId);
    return taxi ? taxi.name : 'Standard Sedan';
  };

  const totalFare = days * getTaxiRate();

  const handleSendToWhatsApp = () => {
    const destList = selectedDestinations.map(d => d.charAt(0).toUpperCase() + d.slice(1).replace('_', ' ')).join(', ');
    const msg = `Hi Aniket & Rafiq Bhai! I visited your website and calculated my custom Kashmir Itinerary:
- Cab Model Selected: ${getTaxiName()} (₹${getTaxiRate()}/day)
- Number of Days: ${days} days
- Destinations We Plan to Cover: ${destList}
- Need Direct Associated Hotels List: ${includeHotels ? 'Yes, please share best rates!' : 'No, we booked our own'}
- Calculated Fare (Toll, Permits & Driver Night Allowance included): ₹${totalFare}

Please let me know if these dates and Rafiq Bhai are available!`;

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50/70 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16" id="pricing_head">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200/50 text-xs font-semibold uppercase tracking-wider" id="pricing_top_tag">
            <Calculator className="w-3.5 h-3.5 animate-pulse" />
            <span>Transparent Pricing, Zero Agent Commissions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Calculate Your Cab Cost Instantly
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg">
            No bargaining drama, no last-minute surcharge surprise. Calculate exact rates for your Kashmir rides and send the plan directly to Rafiq Bhai over WhatsApp!
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto" id="calculator_grid">
          
          {/* Inputs Section (Left Side - 7 Cols) */}
          <div className="bg-white rounded-2xl border border-indigo-100 p-6 sm:p-8 shadow-md lg:col-span-7 space-y-6" id="calculator_inputs">
            
            {/* Step 1: Select Taxi Model */}
            <div className="space-y-3" id="calc_step_1">
              <label className="block text-sm sm:text-base font-bold text-gray-900 font-display">
                1. Select Cab taxi type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="taxi_selector">
                {TAXI_FLEET.map((taxi) => {
                  const rate = taxi.id === 'innova' ? 5500 : taxi.id === 'tempo_traveler' ? 7500 : 4000;
                  const isSelected = selectedTaxiId === taxi.id;
                  return (
                    <button
                      key={taxi.id}
                      type="button"
                      onClick={() => setSelectedTaxiId(taxi.id)}
                      className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' 
                          : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                      }`}
                      id={`taxi_btn_${taxi.id}`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <Car className={`w-5 h-5 ${isSelected ? 'text-indigo-650' : 'text-gray-400'}`} />
                        {isSelected && <span className="h-2 w-2 rounded-full bg-indigo-500" />}
                      </div>
                      <p className="font-display font-bold text-gray-900 text-sm mt-2">{taxi.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{taxi.capacity}</p>
                      <p className="text-sm font-extrabold text-indigo-700 mt-2">₹{rate}/day</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration Slider / Direct adjust */}
            <div className="space-y-3" id="calc_step_2">
              <div className="flex justify-between items-center">
                <label className="text-sm sm:text-base font-bold text-gray-900 font-display">
                  2. Cab & Transport Needed for how many days?
                </label>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600 text-white font-extrabold text-sm sm:text-base shadow-sm">
                  {days} Days Trip
                </span>
              </div>
              
              <div className="flex items-center gap-4 py-2" id="day_slider_container">
                <button 
                  type="button" 
                  disabled={days <= 1}
                  onClick={() => setDays(days - 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 hover:bg-slate-50 flex items-center justify-center font-bold text-lg disabled:opacity-30 cursor-pointer"
                >
                  -
                </button>
                <input 
                  type="range" 
                  min="1" 
                  max="14" 
                  value={days} 
                  onChange={(e) => setDays(parseInt(e.target.value) || 5)} 
                  className="flex-1 accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <button 
                  type="button" 
                  disabled={days >= 14}
                  onClick={() => setDays(days + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 hover:bg-slate-50 flex items-center justify-center font-bold text-lg disabled:opacity-30 cursor-pointer"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-400 italic">
                *Most tourists require 5 to 7 days to cover Srinagar, Gulmarg, Pahalgam, and Sonamarg properly. Airport pickup and drop are completely included!
              </p>
            </div>

            {/* Step 3: Destinations Coverage Indicator */}
            <div className="space-y-3" id="calc_step_3">
              <label className="block text-sm sm:text-base font-bold text-gray-900 font-display">
                3. Choose scenic points you plan to visit (Any or All of these!):
              </label>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2" id="calc_dest_grid">
                {[
                  { id: 'gulmarg', label: 'Gulmarg' },
                  { id: 'pahalgam', label: 'Pahalgam' },
                  { id: 'sonamarg', label: 'Sonamarg' },
                  { id: 'doodhpathri', label: 'Doodhpathri' },
                  { id: 'srinagar', label: 'Srinagar Local' },
                  { id: 'shikara', label: 'Shikara Ride' }
                ].map((item) => {
                  const active = selectedDestinations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleDestination(item.id)}
                      className={`px-3 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-150 text-center cursor-pointer ${
                        active 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-bold' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                      id={`dest_pill_${item.id}`}
                    >
                      {active ? '✓ ' : ''}{item.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-indigo-800 bg-indigo-50/50 p-2 border border-indigo-100 rounded-lg">
                👉 <strong>Kashmiri Golden Rule:</strong> Unlike third-party brokers, we do not bill you extra for adding beautiful viewpoints or local sightseeing stops. The price is strictly calculated by duration! Enjoy comprehensive itinerary coverage.
              </p>
            </div>

            {/* Step 4: Include Associated Hotels? */}
            <div className="p-4 bg-indigo-50/30 border border-indigo-100/75 rounded-xl flex items-start gap-3" id="calc_step_4">
              <input 
                type="checkbox" 
                id="hotels_checkbox"
                checked={includeHotels} 
                onChange={(e) => setIncludeHotels(e.target.checked)}
                className="w-5 h-5 rounded border-indigo-300 text-indigo-605 accent-indigo-600 mt-0.5 cursor-pointer"
              />
              <div className="space-y-0.5 cursor-pointer" onClick={() => setIncludeHotels(!includeHotels)}>
                <label htmlFor="hotels_checkbox" className="text-xs sm:text-sm font-bold text-gray-900 font-display block select-none">
                  Check here if you also need cheap Associated Hotel suggestion lists!
                </label>
                <p className="text-xs text-gray-500 leading-normal">
                  Rafiq Bhai has direct hoteller deals with clean houseboats and premium family hotels in Srinagar & Gulmarg. Save 30-40% agent commission!
                </p>
              </div>
            </div>

          </div>

          {/* Pricing Results Section (Right Side - 5 Cols) */}
          <div className="bg-gradient-to-b from-gray-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl lg:col-span-5 flex flex-col justify-between space-y-6 lg:h-full" id="calculator_results">
            
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 pb-2 border-b border-white/15">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Estimated Fare Summary</span>
              </div>

              {/* Big Estimated Fare Block */}
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-wide text-gray-300">Total Cab Trip Estimate</p>
                <div className="flex items-baseline gap-1" id="calculated_amount_display">
                  <span className="text-3xl sm:text-4.5xl font-extrabold text-white">₹{totalFare}</span>
                  <span className="text-xs text-amber-300 font-semibold uppercase">({days} Days Total)</span>
                </div>
                <p className="text-xs text-amber-300 font-medium">✨ Driver charge & Car fuel already included</p>
              </div>

              {/* Guarantee List of What is Covered */}
              <div className="space-y-2.5 pt-4 border-t border-white/10" id="fare_inclusion_checklist">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Pure Inclusions (No Extra Charges):</p>
                
                {[
                  'Driver Food & Night Allowance included',
                  'Mountain Road Toll Taxes paid by us',
                  'Inter-district Permit permits sorted',
                  'All Parking charges included',
                  'Airport Pickup & Drop names sign inclusion',
                  'Chinar Leaf visual sightseeing stops anytime!'
                ].map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-350" id={`inclusion_item_${i}`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              {/* Associated Hotels Info */}
              {includeHotels && (
                <div className="mt-2 bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 text-xs leading-normal text-amber-200 animate-float" id="associated_hotels_panel">
                  🏨 <strong>Direct Hotels:</strong> We will provide a customized hotel accommodation PDF directly on your WhatsApp based on your safety & luxury preferences! No extra management fees.
                </div>
              )}
            </div>

            {/* glowing call to action */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-4.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] text-slate-950 text-base font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer"
                id="btn_whatsapp_calculator"
              >
                <MessageSquare className="w-5 h-5 text-slate-950" />
                Discuss the Plan on WhatsApp
              </button>
              
              <div className="flex items-center justify-between text-xs text-gray-400" id="trust_summary_footer">
                <span>⚡ Estimates based on local standard rates</span>
                <span className="text-amber-405 font-semibold">100% genuine</span>
              </div>
            </div>

          </div>

        </div>

        {/* Taxi Fleet Specifications Grid */}
        <div className="mt-16 max-w-5xl mx-auto" id="taxi_fleet_showcase">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 text-center mb-8 uppercase tracking-wider">
            Our Private Cab Fleet – Choose According to Your Members
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="fleet_grid">
            {TAXI_FLEET.map((fleet) => (
              <div 
                key={fleet.id} 
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm space-y-4 hover:border-indigo-200 transition-all text-sm leading-normal flex flex-col justify-between"
                id={`fleet_card_${fleet.id}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-700">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-tight">{fleet.name}</h4>
                      <p className="text-xs text-indigo-700 font-medium">{fleet.capacity} | {fleet.luggage}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-2">
                    {fleet.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="h-1 w-1 rounded-full bg-indigo-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-50 flex justify-between items-center bg-slate-50/50 p-2.5 rounded-lg">
                  <span className="text-xs text-gray-500 font-medium">Best for: <strong className="text-gray-800">{fleet.bestFor}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
