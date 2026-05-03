import React, { useState, useRef } from "react";
import { useContent } from "../context/ContentContext";
import { motion } from "motion/react";
import { Save, RefreshCcw, Image as ImageIcon, Type, MapPin, Mail, Phone, ArrowLeft, CheckCircle, BookOpen, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export const Admin = () => {
  const { content, updateContent, resetContent } = useContent();
  const [formData, setFormData] = useState(content);
  const [activeTab, setActiveTab] = useState<"hero" | "narrative" | "contact" | "guidelines">("hero");
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    updateContent(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (section: keyof typeof content, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value
      }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("hero", "backgroundImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="container-wide py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 hover:bg-zinc-100 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold tracking-tighter">CMS DASHBOARD</h1>
              <p className="text-[10px] micro-label text-zinc-400">SITE CONTENT MANAGEMENT</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if(confirm("Reset all changes to default?")) {
                  resetContent();
                  setFormData(content);
                }
              }}
              className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-2"
            >
              <RefreshCcw className="w-3 h-3" />
              Reset Defaults
            </button>
            <button 
              onClick={handleSave}
              className="bg-zinc-900 text-white px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-emerald-accent transition-all flex items-center gap-2 shadow-xl shadow-zinc-200"
            >
              <Save className="w-3 h-3" />
              Save Changes
            </button>
          </div>
        </div>
      </header>

      <main className="container-wide py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <aside className="lg:w-64 space-y-2">
            {[
              { id: "hero", label: "Hero & Headline", icon: ImageIcon },
              { id: "narrative", label: "Brand Narrative", icon: Type },
              { id: "contact", label: "Contact Info", icon: MapPin },
              { id: "guidelines", label: "Image Guidelines", icon: BookOpen },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all border ${
                  activeTab === tab.id 
                    ? "bg-white border-zinc-200 shadow-sm text-zinc-900" 
                    : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-emerald-accent" : ""}`} />
                {tab.label}
              </button>
            ))}
          </aside>

          {/* Form Area */}
          <div className="flex-1 bg-white border border-zinc-200 p-8 lg:p-12">
            {activeTab === "hero" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Hero Section</h2>
                    <p className="text-sm text-zinc-500">Configure the main entry point of your website.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Badge Text</label>
                    <input 
                      type="text" 
                      value={formData.hero.badge}
                      onChange={(e) => handleChange("hero", "badge", e.target.value)}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50 focus:bg-white focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Title / Headline</label>
                    <textarea 
                      value={formData.hero.title}
                      onChange={(e) => handleChange("hero", "title", e.target.value)}
                      rows={2}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50 focus:bg-white focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="micro-label text-zinc-400">Subtitle Text</label>
                    <textarea 
                      value={formData.hero.subtitle}
                      onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
                      rows={3}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50 focus:bg-white focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Primary Button Label</label>
                    <input 
                      type="text" 
                      value={formData.hero.primaryCta}
                      onChange={(e) => handleChange("hero", "primaryCta", e.target.value)}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Background Image URL</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={formData.hero.backgroundImage}
                        onChange={(e) => handleChange("hero", "backgroundImage", e.target.value)}
                        className="flex-1 border border-zinc-100 p-3 text-sm bg-zinc-50 focus:bg-white focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                      />
                      <input 
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-zinc-100 hover:bg-zinc-200 px-4 transition-colors text-zinc-600 flex items-center justify-center border border-zinc-100"
                        title="Upload Image"
                      >
                        <Upload className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[10px] text-zinc-400">Recommended: 2600x1600px Unsplash Source.</p>
                  </div>
                </div>

                {/* Image Preview */}
                <div className="pt-6">
                  <span className="micro-label text-zinc-400 block mb-4">Background Preview</span>
                  <div className="aspect-[21/9] bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
                    <img src={formData.hero.backgroundImage} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-[10px] micro-label tracking-widest font-bold">CURRENT BACKGROUND IMAGE</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "narrative" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Brand Narrative</h2>
                  <p className="text-sm text-zinc-500">Manage the 'Project Narrative' text found on project detail pages.</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Section Label</label>
                    <input 
                      type="text" 
                      value={formData.narrative.label}
                      onChange={(e) => handleChange("narrative", "label", e.target.value)}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Narrative Headline</label>
                    <input 
                      type="text" 
                      value={formData.narrative.headline}
                      onChange={(e) => handleChange("narrative", "headline", e.target.value)}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50 font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Main Description</label>
                    <textarea 
                      value={formData.narrative.description}
                      onChange={(e) => handleChange("narrative", "description", e.target.value)}
                      rows={4}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="micro-label text-zinc-400">Additional Context (Paragraph 2)</label>
                    <textarea 
                      value={formData.narrative.additionalText}
                      onChange={(e) => handleChange("narrative", "additionalText", e.target.value)}
                      rows={4}
                      className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Global Contact Info</h2>
                  <p className="text-sm text-zinc-500">Update company contact details used across the site.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="micro-label text-zinc-400">Office Address</label>
                      <input 
                        type="text" 
                        value={formData.contact.address}
                        onChange={(e) => handleChange("contact", "address", e.target.value)}
                        className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="micro-label text-zinc-400">Official Email</label>
                      <input 
                        type="email" 
                        value={formData.contact.email}
                        onChange={(e) => handleChange("contact", "email", e.target.value)}
                        className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="micro-label text-zinc-400">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.contact.phone}
                        onChange={(e) => handleChange("contact", "phone", e.target.value)}
                        className="w-full border border-zinc-100 p-3 text-sm bg-zinc-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "guidelines" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Image Optimization Guide</h2>
                  <p className="text-sm text-zinc-500">Best practices for maintaining site performance and visual quality.</p>
                </div>

                <div className="space-y-12">
                  {/* Table */}
                  <section>
                    <h3 className="micro-label text-zinc-900 font-bold mb-4 uppercase tracking-widest">Recommended Dimensions</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-zinc-200">
                            <th className="py-3 font-bold uppercase text-[10px] micro-label">Location</th>
                            <th className="py-3 font-bold uppercase text-[10px] micro-label">Dimensions</th>
                            <th className="py-3 font-bold uppercase text-[10px] micro-label">Ratio</th>
                            <th className="py-3 font-bold uppercase text-[10px] micro-label">Format</th>
                          </tr>
                        </thead>
                        <tbody className="text-zinc-600">
                          <tr className="border-b border-zinc-50">
                            <td className="py-4 font-medium text-zinc-900">Hero Headline</td>
                            <td className="py-4 font-mono">2600 x 1600 px</td>
                            <td className="py-4">16:10</td>
                            <td className="py-4 underline decoration-emerald-accent/30 decoration-2 underline-offset-4">WebP / JPG</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-4 font-medium text-zinc-900">Service Cards</td>
                            <td className="py-4 font-mono">1200 x 1800 px</td>
                            <td className="py-4">2:3 (Portrait)</td>
                            <td className="py-4 underline decoration-emerald-accent/30 decoration-2 underline-offset-4">WebP / JPG</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-4 font-medium text-zinc-900">Project Showcase</td>
                            <td className="py-4 font-mono">1600 x 1000 px</td>
                            <td className="py-4">16:10 / 4:3</td>
                            <td className="py-4 underline decoration-emerald-accent/30 decoration-2 underline-offset-4">WebP / JPG</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-4 font-medium text-zinc-900">Admin/Avatars</td>
                            <td className="py-4 font-mono">800 x 800 px</td>
                            <td className="py-4">1:1 (Square)</td>
                            <td className="py-4 underline decoration-emerald-accent/30 decoration-2 underline-offset-4">PNG / WebP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Tips cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                      <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">File Size Limits</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Aim for <span className="text-zinc-900 font-medium">500KB - 800KB</span> per image. 
                        Files over <span className="text-zinc-900 font-medium">2MB</span> significantly degrade mobile experience and may cause browser crashes during high-concurrency visits.
                      </p>
                    </div>
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                      <h4 className="text-sm font-bold mb-3 uppercase tracking-wider">Unsplash Optimization</h4>
                      <p className="text-xs text-zinc-500 mb-3">Copy-paste this URL pattern and replace [ID]:</p>
                      <code className="block p-3 bg-zinc-900 text-[10px] text-emerald-accent/80 font-mono break-all leading-relaxed">
                        https://images.unsplash.com/[ID]?q=80&w=2600&auto=format&fit=crop
                      </code>
                    </div>
                  </div>

                  <div className="p-6 bg-emerald-50/50 border border-emerald-100/50 rounded-sm">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 mb-1">Architecture-Aware Assets</h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          The system automatically uses 700ms micro-transitions and Blur-Up placeholders. 
                          Using the correct aspects ensures your layout stays geometrically perfect across 4K displays and mobile panels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Success Notification */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showSuccess ? 0 : 100, opacity: showSuccess ? 1 : 0 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-8 py-4 shadow-2xl flex items-center gap-3 z-[60]"
      >
        <CheckCircle className="w-5 h-5 text-emerald-accent" />
        <span className="text-sm font-bold tracking-widest uppercase">Changes Published Successfully</span>
      </motion.div>

      {/* Footer Meta */}
      <footer className="container-wide py-12 border-t border-zinc-200 mt-24">
        <p className="text-[10px] micro-label text-zinc-400 text-center uppercase tracking-widest">
           Powered by Antigravity CMS • Local Storage Persistence Active
        </p>
      </footer>
    </div>
  );
};
