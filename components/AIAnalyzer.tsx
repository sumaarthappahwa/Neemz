import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Search, AlertCircle, RefreshCcw, CheckCircle2, X } from 'lucide-react';

const AIAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeSmile = async () => {
    if (!image) return;

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setError("API Key is missing. Please configure the environment variable in Vercel settings.");
      return;
    }

    setAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const base64Data = image.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Data,
              },
            },
            {
              text: "You are a highly experienced AI Dental Assistant for Dr. Neemz Dentistry. Analyze this dental photo. Identify visible concerns such as possible cavities, plaque build-up, tooth alignment issues, or gum irritation. Provide a friendly, professional summary of what you see. Suggest the most appropriate service (e.g., Root Canal, Braces, or Cleaning). End with a note saying that a physical exam at our Salem clinic is necessary for a definitive diagnosis.",
            },
          ],
        },
      });

      setResult(response.text || "I couldn't generate a report. Please try again with a clearer photo.");
    } catch (err) {
      console.error(err);
      setError("Failed to analyze image. Please ensure your internet connection is stable and use a clear photo of your teeth.");
    } finally {
      setAnalyzing(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="ai-assessment" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-[#82BC24] font-bold text-xs uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82BC24] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#82BC24]"></span>
            </span>
            New: AI Smile Scan
          </div>
          <h2 className="text-4xl font-extrabold text-[#1A237E] mb-4">Instant Dental AI Analysis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a clear photo of your teeth for an instant preliminary assessment by our advanced Dental AI. Get insights into your oral health in seconds.
          </p>
        </div>

        <div className="bg-[#f8fafc] rounded-[2rem] p-6 md:p-10 border-2 border-dashed border-gray-200 shadow-sm relative overflow-hidden">
          {!image ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 text-[#82BC24]">
                <Upload size={32} />
              </div>
              <p className="text-xl font-bold text-[#1A237E] mb-2">Upload or Take Photo</p>
              <p className="text-gray-500 mb-8 max-w-xs">For best results, use good lighting and ensure your teeth are clearly visible.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-[#1A237E] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-900 transition-all shadow-lg"
                >
                  <Upload size={20} /> Select from Gallery
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative group">
                  <img 
                    src={image} 
                    alt="Patient Tooth" 
                    className="w-full rounded-2xl shadow-xl border-4 border-white object-cover aspect-square" 
                  />
                  {!analyzing && !result && (
                    <button 
                      onClick={reset}
                      className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-red-500 shadow-lg hover:bg-white transition-all"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {!result && !analyzing && (
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="font-bold text-[#1A237E] text-xl mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-[#82BC24]" /> Photo Captured
                      </h3>
                      <p className="text-gray-600 mb-6">Ready to scan your smile. Our AI will look for common dental conditions.</p>
                      <button 
                        onClick={analyzeSmile}
                        disabled={analyzing}
                        className="w-full bg-[#82BC24] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#6fa11e] transition-all shadow-xl"
                      >
                        <Search size={22} /> Analyze My Smile
                      </button>
                    </div>
                  )}

                  {analyzing && (
                    <div className="p-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                      <div className="relative w-20 h-20 mb-6">
                        <div className="absolute inset-0 border-4 border-[#82BC24]/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-[#82BC24] rounded-full border-t-transparent animate-spin"></div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1A237E] animate-pulse">Scanning Teeth...</h3>
                      <p className="text-gray-500 mt-2">Checking for cavities, plaque, and alignment</p>
                    </div>
                  )}

                  {error && (
                    <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                      <AlertCircle className="text-red-500 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-red-800">Oops! Something went wrong</p>
                        <p className="text-red-600 text-sm mt-1">{error}</p>
                        <button onClick={analyzeSmile} className="mt-4 text-red-800 font-bold text-sm underline">Try Again</button>
                      </div>
                    </div>
                  )}

                  {result && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#82BC24]">
                        <h3 className="font-bold text-[#1A237E] text-xl mb-4 flex items-center gap-2">
                          <CheckCircle2 className="text-[#82BC24]" /> AI Assessment Report
                        </h3>
                        <div className="prose prose-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {result}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button 
                          onClick={() => window.location.hash = '#booking'}
                          className="flex-1 bg-[#1A237E] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg"
                        >
                          Book Expert Checkup
                        </button>
                        <button 
                          onClick={reset}
                          className="bg-gray-100 text-gray-600 px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                        >
                          <RefreshCcw size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer Area */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-100 flex items-start gap-4">
          <AlertCircle className="text-amber-500 shrink-0 mt-1" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold uppercase tracking-tight text-amber-800 block mb-1">Medical Disclaimer:</span>
            The AI analysis provided is for informational and educational purposes only and is <span className="font-bold">not a substitute for professional dental diagnosis, advice, or treatment</span>. Dr. Neemz AI tool identifies potential visible patterns but cannot replace a comprehensive physical examination, X-rays, or the professional judgment of a licensed dentist. If you are experiencing pain, swelling, or bleeding, please book an urgent appointment immediately.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalyzer;