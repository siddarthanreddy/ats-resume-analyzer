import { useState } from "react";
import { FileText, HelpCircle, Upload, Sparkles, Target, Zap, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadSection from "@/components/upload-section";
import ResultsSection from "@/components/results-section";

interface AnalysisResult {
  id: number;
  analysis: {
    overallScore: number;
    keywordMatchPercentage: number;
    formatScore: number;
    scoreBreakdown: any[];
    missingKeywords: any[];
    suggestions: any[];
  };
}

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold gradient-text ml-3">ATS Resume Analyzer</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Siddarthan Reddy</span>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-white/50">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <Button size="sm" className="gradient-bg hover:shadow-glow text-white border-0">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-float"></div>
          <h2 className="text-5xl font-bold gradient-text mb-6 animate-float">
            Unlock Your Resume's Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get instant ATS compatibility analysis, discover missing keywords, and receive 
            <span className="text-brand-blue font-semibold"> expert suggestions</span> to maximize your job application success rate.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Zap className="h-4 w-4 text-brand-blue mr-2" />
              <span>Instant Analysis</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 text-brand-green mr-2" />
              <span>Keyword Optimization</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-brand-amber mr-2" />
              <span>Expert Suggestions</span>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        {!analysisResult && (
          <UploadSection 
            onAnalysisComplete={handleAnalysisComplete}
            isAnalyzing={isAnalyzing}
            setIsAnalyzing={setIsAnalyzing}
          />
        )}

        {/* Results Section */}
        {analysisResult && (
          <ResultsSection 
            analysis={analysisResult.analysis}
            onNewAnalysis={handleNewAnalysis}
          />
        )}

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover-scale">
            <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-glow-green transition-all duration-300">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Analysis</h3>
            <p className="text-gray-600 text-base">Advanced AI analyzes your resume in seconds, providing comprehensive feedback instantly.</p>
          </div>
          <div className="text-center group hover-scale">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-green group-hover:shadow-glow transition-all duration-300">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Keyword Matching</h3>
            <p className="text-gray-600 text-base">Intelligent keyword analysis identifies gaps and optimization opportunities for any job.</p>
          </div>
          <div className="text-center group hover-scale">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-glow-green transition-all duration-300">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Recommendations</h3>
            <p className="text-gray-600 text-base">Get actionable, prioritized suggestions from industry experts to boost your success rate.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text ml-2">ATS Resume Analyzer</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              © 2024 ATS Resume Analyzer. Powered by advanced AI to maximize your career potential.
            </p>
            <p className="text-xs text-gray-500">
              Crafted with care to help professionals land their dream jobs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
