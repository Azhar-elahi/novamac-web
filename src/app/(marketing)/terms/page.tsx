export const metadata = {
  title: "Terms and Conditions | NovaMac",
  description: "Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-12 sm:pt-20 pb-24 px-6 md:px-12 xl:px-20 bg-[#0B1220] text-[#F8FAFC] relative font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="px-4 py-1.5 bg-gradient-to-r from-[#0F1C33] to-[#091222] border border-[#1E2E4A] border-t-white/10 text-[#3B82F6] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block mb-2 shadow-md">
          TERMS OF SERVICE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#F8FAFC] mb-2">Terms and Conditions</h1>
        <p className="text-[#94A3B8] text-xs sm:text-sm font-mono mb-8 border-b border-[#1E2E4A] pb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-[#94A3B8] leading-relaxed font-normal text-xs sm:text-base">
          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access our services.</p>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">2. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, NovaMac and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">3. Restrictions</h2>
            <p className="mb-4">You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#94A3B8]">
              <li>publishing any Website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>publicly performing and/or showing any Website material;</li>
              <li>using this Website in any way that is or may be damaging to this Website;</li>
              <li>using this Website in any way that impacts user access to this Website;</li>
            </ul>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">4. No Warranties</h2>
            <p>This Website is provided "as is," with all faults, and NovaMac express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">5. Limitation of Liability</h2>
            <p>In no event shall NovaMac, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. NovaMac, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">6. Indemnification</h2>
            <p>You hereby indemnify to the fullest extent NovaMac from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
          </section>

          <section className="bg-gradient-to-b from-[#0F1C33] via-[#091222] to-[#050A14] border border-[#1E2E4A] border-t-white/15 p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] mb-3">7. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which NovaMac operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located there for the resolution of any disputes.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
