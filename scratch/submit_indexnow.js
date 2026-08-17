const fs = require('fs');

async function submitIndexNow() {
  const payload = {
    host: "novamacsolutions.com",
    key: "9f8e7d6c5b4a39281706152433425160",
    keyLocation: "https://novamacsolutions.com/9f8e7d6c5b4a39281706152433425160.txt",
    urlList: [
      "https://novamacsolutions.com/",
      "https://novamacsolutions.com/home",
      "https://novamacsolutions.com/services",
      "https://novamacsolutions.com/pricing",
      "https://novamacsolutions.com/work",
      "https://novamacsolutions.com/about",
      "https://novamacsolutions.com/contact",
      "https://novamacsolutions.com/book",
      "https://novamacsolutions.com/us",
      "https://novamacsolutions.com/uk",
      "https://novamacsolutions.com/eu",
      "https://novamacsolutions.com/services/custom-web-development",
      "https://novamacsolutions.com/services/ecommerce-development",
      "https://novamacsolutions.com/services/ai-automation",
      "https://novamacsolutions.com/services/crm-business-automation",
      "https://novamacsolutions.com/services/mobile-app-development",
      "https://novamacsolutions.com/services/ui-ux-design"
    ]
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log("IndexNow API Response Status:", res.status);
    console.log("Submitted URLs count:", payload.urlList.length);
  } catch (err) {
    console.error("IndexNow Submission Error:", err);
  }
}

submitIndexNow();
