export const metadata = {
  title: "Terms and Conditions | NovaMac",
  description: "Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#05060c] text-white gradient-mesh">
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg font-light leading-relaxed prose-headings:font-heading prose-headings:text-white prose-a:text-brand">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access our services.</p>

        <h2>2. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, NovaMac and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>using this Website in any way that is or may be damaging to this Website;</li>
          <li>using this Website in any way that impacts user access to this Website;</li>
        </ul>

        <h2>4. No Warranties</h2>
        <p>This Website is provided "as is," with all faults, and NovaMac express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>

        <h2>5. Limitation of Liability</h2>
        <p>In no event shall NovaMac, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. NovaMac, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

        <h2>6. Indemnification</h2>
        <p>You hereby indemnify to the fullest extent NovaMac from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

        <h2>7. Governing Law & Jurisdiction</h2>
        <p>These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which NovaMac operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located there for the resolution of any disputes.</p>
      </div>
    </main>
  );
}
