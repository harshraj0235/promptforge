"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, ArrowLeft, Send } from "lucide-react";
import styles from "./PromptGenerator.module.css";
import CopyButton from "./CopyButton";
import { aiTools, tones, complexities, taskTypesByProfession } from "@/data/generator-options";
import { getAllProfessionSlugs, getProfessionBySlug } from "@/data/professions";

export default function PromptGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    aiTool: "chatgpt",
    profession: "real-estate-agent",
    task: "",
    tone: "Professional",
    complexity: "intermediate",
    context: "",
  });
  
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const professions = getAllProfessionSlugs().map(slug => getProfessionBySlug(slug)!);
  const availableTasks = taskTypesByProfession[formData.profession] || taskTypesByProfession["default"];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const updateForm = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    // Reset task if profession changes
    if (key === "profession") {
      setFormData(prev => ({ ...prev, task: "" }));
    }
  };

  const generatePrompt = () => {
    setIsGenerating(true);
    
    // Simulate generation delay for effect
    setTimeout(() => {
      const taskText = formData.task || "help me with a task";
      const detailInstruction = 
        formData.complexity === "beginner" ? "Keep it brief, direct, and simple." :
        formData.complexity === "intermediate" ? "Provide detailed output with context, structure, and examples if relevant." :
        "Act as an expert. Provide a comprehensive, multi-step output. Break down complex concepts, use advanced frameworks, and anticipate follow-up questions.";
      
      const contextText = formData.context ? `\n\nSpecific Context/Details to include:\n${formData.context}` : "";
      
      const prompt = `Act as an expert ${getProfessionBySlug(formData.profession)?.name}. 
I need you to: ${taskText}.

Tone: ${formData.tone}
Detail Level: ${detailInstruction}${contextText}

Please format the response clearly using markdown headings and bullet points where appropriate.`;

      setGeneratedPrompt(prompt);
      setIsGenerating(false);
      setStep(5); // Result step
    }, 800);
  };

  return (
    <div className={styles.generatorContainer}>
      {/* Progress Bar */}
      <div className={styles.progressHeader}>
        <div className={styles.progressSteps}>
          {[1, 2, 3, 4, 5].map(i => (
            <div 
              key={i} 
              className={`${styles.stepIndicator} ${step >= i ? styles.active : ""} ${step === i ? styles.current : ""}`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className={styles.progressLine}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.formContainer}>
        {/* Step 1: Tool & Profession */}
        {step === 1 && (
          <div className={`${styles.step} animate-fade-in`}>
            <h2>1. Who are you generating this for?</h2>
            
            <div className="input-group mt-4">
              <label className="input-label">Select AI Tool</label>
              <div className={styles.radioGrid}>
                {aiTools.map(tool => (
                  <button
                    key={tool.id}
                    className={`${styles.radioCard} ${formData.aiTool === tool.id ? styles.selected : ""}`}
                    onClick={() => updateForm("aiTool", tool.id)}
                  >
                    <span className={styles.radioIcon}>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="input-group mt-4">
              <label className="input-label">Select Your Profession</label>
              <select 
                className="input-field"
                value={formData.profession}
                onChange={(e) => updateForm("profession", e.target.value)}
              >
                {professions.map(p => (
                  <option key={p.slug} value={p.slug}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Task */}
        {step === 2 && (
          <div className={`${styles.step} animate-fade-in`}>
            <h2>2. What do you want the AI to do?</h2>
            
            <div className="input-group mt-4">
              <label className="input-label">Select a common task...</label>
              <div className={styles.radioGridVertical}>
                {availableTasks.map(task => (
                  <button
                    key={task}
                    className={`${styles.radioCard} ${formData.task === task ? styles.selected : ""}`}
                    onClick={() => updateForm("task", task)}
                  >
                    <span>{task}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">...or enter a custom task</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g., Write a welcome email sequence"
                value={!availableTasks.includes(formData.task) ? formData.task : ""}
                onChange={(e) => updateForm("task", e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Step 3: Tone & Complexity */}
        {step === 3 && (
          <div className={`${styles.step} animate-fade-in`}>
            <h2>3. How should it sound?</h2>
            
            <div className="input-group mt-4">
              <label className="input-label">Tone of Voice</label>
              <select 
                className="input-field"
                value={formData.tone}
                onChange={(e) => updateForm("tone", e.target.value)}
              >
                {tones.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="input-group mt-4">
              <label className="input-label">Detail Level</label>
              <div className={styles.radioGridVertical}>
                {complexities.map(c => (
                  <button
                    key={c.id}
                    className={`${styles.radioCard} ${formData.complexity === c.id ? styles.selected : ""}`}
                    onClick={() => updateForm("complexity", c.id)}
                  >
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Context */}
        {step === 4 && (
          <div className={`${styles.step} animate-fade-in`}>
            <h2>4. Add specific context (Optional)</h2>
            <p className={styles.helpText}>
              The more details you provide, the better the prompt will be. Add any specific rules, names, facts, or background info here.
            </p>
            
            <div className="input-group mt-4">
              <textarea 
                className="input-field" 
                rows={6}
                placeholder="e.g., The target audience is millennials. Mention our new feature 'AutoSync'. Do not use the word 'revolutionary'."
                value={formData.context}
                onChange={(e) => updateForm("context", e.target.value)}
              ></textarea>
            </div>
          </div>
        )}

        {/* Step 5: Result */}
        {step === 5 && (
          <div className={`${styles.step} animate-fade-in`}>
            <h2><Sparkles className="text-gradient" size={24} style={{ display: 'inline', marginRight: '8px' }}/> Your Custom Prompt</h2>
            <p className={styles.helpText}>
              Copy this and paste it directly into {aiTools.find(t => t.id === formData.aiTool)?.name}.
            </p>
            
            <div className={styles.resultBox}>
              <pre>{generatedPrompt}</pre>
            </div>
            
            <div className={styles.resultActions}>
              <CopyButton text={generatedPrompt} className="btn-primary" />
              <button className="btn btn-outline" onClick={() => setStep(1)}>
                Start Over
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 5 && (
          <div className={styles.navButtons}>
            <button 
              className={`btn btn-secondary ${step === 1 ? styles.hidden : ""}`} 
              onClick={handlePrev}
            >
              <ArrowLeft size={16} /> Back
            </button>
            
            {step < 4 ? (
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={step === 2 && !formData.task}
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                className={`btn btn-primary ${styles.generateBtn}`} 
                onClick={generatePrompt}
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Prompt"} <Send size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
