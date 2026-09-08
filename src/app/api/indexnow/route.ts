import { NextResponse } from "next/server";

export async function GET() {
  const host = "novamacsolutions.com";
  const apiKey = "novamacsolutionsindexnow2026";
  const keyLocation = `https://${host}/${apiKey}.txt`;

  const urls = [
    `https://${host}`,
    `https://${host}/about`,
    `https://${host}/services`,
    `https://${host}/work`,
    `https://${host}/process`,
    `https://${host}/pricing`,
    `https://${host}/faq`,
    `https://${host}/blog`,
    `https://${host}/contact`,
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

    const response = await fetch("https://www.bing.com/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      message: response.ok
        ? "Successfully submitted 16 URLs to Bing IndexNow!"
        : "IndexNow submission failed",
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
