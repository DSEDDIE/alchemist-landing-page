import React, { useState } from "react";

const QuoteWizard = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        squareFootage: "",
        substrate: "",
        system: "",
        timeline: "",
        budget: "",
        vision: "",
    });

    if (!open) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFinish = async () => {
  try {
    const response = await fetch("https://formspree.io/f/mrbkonak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _subject: "New Quote Wizard Submission",
        ...formData
      })
    });

    if (response.ok) {
      alert("Thank you! Your quote request has been sent.");
      onClose();  
      setStep(1);
      setFormData({
        squareFootage: "",
        substrate: "",
        system: "",
        timeline: "",
        budget: "",
        vision: "",
      });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
  }
};

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]">
            <div className="bg-[#1c1c1c] border border-[#d1a054] rounded-lg p-10 max-w-[500px] w-[90%] shadow-[0_10px_40px_rgba(209,160,84,0.2)] animate-in fade-in slide-in-from-bottom-2">
                <h2 className="text-2xl font-bold text-[#d1a054] mb-5 text-center">Step {step}</h2>

                {step === 1 && (
                    <div>
                        <p className="text-[#e0e0e0] text-base mb-4">What is the square footage or dimensions of your space?</p>
                        <input
                            type="text"
                            name="squareFootage"
                            className="w-full px-4 py-3 mb-5 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)] placeholder-[#808080]"
                            placeholder="e.g. 400 sq ft"
                            value={formData.squareFootage}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <p className="text-[#e0e0e0] text-base mb-4">What is the substrate?</p>
                        <select
                            name="substrate"
                            className="w-full px-4 py-3 mb-5 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)]"
                            value={formData.substrate}
                            onChange={handleInputChange}
                        >
                            <option value="">Choose one</option>
                            <option>Concrete</option>
                            <option>Wood</option>
                            <option>Tile</option>
                            <option>Marble / Granite</option>
                        </select>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <p className="text-[#e0e0e0] text-base mb-4">Which system are you interested in?</p>
                        <select
                            name="system"
                            className="w-full px-4 py-3 mb-5 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)]"
                            value={formData.system}
                            onChange={handleInputChange}
                        >
                            <option value="">Choose one</option>
                            <option>Flake System</option>
                            <option>Metallic Epoxy</option>
                            <option>Multi-Color Metallic</option>
                            <option>Epoxy Countertop</option>
                            <option>Concrete Countertop</option>
                            <option value="Other">Other (Tell us your vision)</option>
                        </select>
                        {formData.system === "Other" && (
                            <input
                                type="text"
                                name="vision"
                                className="w-full px-4 py-3 mt-3 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)] placeholder-[#808080]"
                                placeholder="Describe your vision..."
                                value={formData.vision}
                                onChange={handleInputChange}
                            />
                        )}
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <p className="text-[#e0e0e0] text-base mb-4">How soon do you want this installed?</p>
                        <select
                            name="timeline"
                            className="w-full px-4 py-3 mb-5 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)]"
                            value={formData.timeline}
                            onChange={handleInputChange}
                        >
                            <option>ASAP</option>
                            <option>Within 2 weeks</option>
                            <option>This month</option>
                            <option>Not sure</option>
                        </select>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <p className="text-[#e0e0e0] text-base mb-4">What is your budget?</p>
                        <input
                            type="text"
                            name="budget"
                            className="w-full px-4 py-3 mb-5 bg-[#101010] border border-[#404040] rounded-lg text-white text-sm focus:outline-none focus:border-[#d1a054] focus:ring-2 focus:ring-[rgba(209,160,84,0.1)] placeholder-[#808080]"
                            placeholder="$"
                            value={formData.budget}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                <div className="flex gap-3 justify-center mt-8">
                    {step > 1 && <button onClick={() => setStep(step - 1)} className="flex-1 px-6 py-3 bg-[#404040] text-white rounded-lg font-semibold text-sm hover:bg-[#505050] transition">Back</button>}
                    {step < 5 && <button onClick={() => setStep(step + 1)} className="flex-1 px-6 py-3 bg-[#404040] text-white rounded-lg font-semibold text-sm hover:bg-[#505050] transition">Next</button>}
                    {step === 5 && <button onClick={handleFinish} className="flex-1 px-6 py-3 bg-[#d1a054] text-black rounded-lg font-semibold text-sm hover:bg-[#e6b566] transition hover:translate-y-[-2px]">Finish</button>}
                </div>
            </div>
        </div>
    );
};

export default QuoteWizard;