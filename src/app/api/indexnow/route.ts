import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/services-data";

const INDEXNOW_KEY = "9f8e7d6c5b4a39281706152433425160";
const HOST = "novamacsolutions.com";

export async function GET() {
  const staticUrls = [
    `https://${HOST}/`,
    `https://${HOST}/home`,
    `https://${HOST}/services`,
    `https://${HOST}/pricing`,
    `https://${HOST}/work`,
    `https://${HOST}/about`,
    `https://${HOST}/contact`,
    `https://${HOST}/book`,
    `https://${HOST}/us`,
    `https://${HOST}/uk`,
    `https://${HOST}/eu`,
  ];

  const serviceUrls = SERVICES.map((s) => `https://${HOST}/services/${s.slug}`);
  const allUrls = [...staticUrls, ...serviceUrls];

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: allUrls,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      status: res.status,
      submittedUrlsCount: allUrls.length,
      urls: allUrls,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
