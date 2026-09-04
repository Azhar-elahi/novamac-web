export const metadata = {
  title: "Privacy Policy | NovaMac",
  description: "Learn how we handle and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-12 sm:pt-20 pb-24 px-6 md:px-12 xl:px-20 bg-[#FAF2F2] text-[#202020] relative font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full inline-block mb-2 shadow-sm">
          LEGAL & COMPLIANCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#202020] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-xs sm:text-sm font-mono mb-8 border-b border-[#F0DCDC] pb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-gray-600 leading-relaxed font-normal text-xs sm:text-base">
          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">1. Introduction</h2>
            <p>At NovaMac, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong className="text-[#202020]">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-[#202020]">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong className="text-[#202020]">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong className="text-[#202020]">Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">3. How We Use Your Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>

          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">5. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
          </section>

          <section className="bg-white border border-[#F0DCDC] p-6 sm:p-9 rounded-3xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202020] mb-3">6. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:hello@novamacsolutions.com" className="text-[#FF5733] underline font-bold">hello@novamacsolutions.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

