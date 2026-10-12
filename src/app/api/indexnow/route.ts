import { NextResponse } from "next/server";

export async function GET() {
  const host = "novamacsolutions.com";
  const apiKey = "4273be4ed66b4f9dbd685a10a39d1db7";
  const keyLocation = `https://${host}/${apiKey}.txt`;

  const urls = [
    `https://${host}`,
    `https://${host}/about`,
    `https://${host}/services`,
    `https://${host}/work`,
    `https://${host}/portfolio`,
    `https://${host}/process`,
    `https://${host}/pricing`,
    `https://${host}/faq`,
    `https://${host}/blog`,
    `https://${host}/contact`,
    `https://${host}/audit`,
    `https://${host}/book`,
    `https://${host}/services/pos-development`,
    `https://${host}/services/erp-development`,
    `https://${host}/services/crm-development`,
    `https://${host}/services/custom-software`,
    `https://${host}/services/website-development`,
    `https://${host}/services/ai-automation`,
    `https://${host}/services/digital-marketing`,
    `https://${host}/services/saas-development`,
    `https://${host}/blog/salesforce-cost-vs-custom-crm-calculator-2026`,
    `https://${host}/blog/offline-first-cloud-pos-architecture-nextjs-case-study`,
    `https://${host}/blog/wordpress-to-nextjs-migration-guide-benchmarks-2026`,
    `https://${host}/blog/building-erp-systems-for-growing-companies`,
    `https://${host}/blog/ai-automation-agents-for-business`,
    `https://${host}/blog/saas-mvp-development-blueprint`,
    `https://${host}/us`,
    `https://${host}/uk`,
    `https://${host}/ca`,
    `https://${host}/eu`,
    `https://${host}/middle-east`,
    `https://${host}/ae`,
    `https://${host}/pk`,
  ];

  try {
    const payload = {
      host,
      key: apiKey,
      keyLocation,
      urlList: urls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      keyLocation,
      message: response.ok
        ? `Successfully submitted ${urls.length} URLs to IndexNow!`
        : "IndexNow submission returned status " + response.status,
      submittedUrls: urls,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  return GET();
}
