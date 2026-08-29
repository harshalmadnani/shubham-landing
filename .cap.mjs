import { chromium } from "playwright";
const OUT = "/tmp/claude-0/-home-user-shubham-landing/c3eb2a99-66c2-52d3-b837-44f7f8cf1d1c/scratchpad";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
for (const [name, w, h] of [["desktop", 1280, 1000], ["mobile", 390, 900]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto("http://localhost:4321/book/", { waitUntil: "networkidle" });
  await p.evaluate(() => window.scrollBy(0, 380));
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `${OUT}/book-group-${name}.png` });
  if (await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) console.log("OVERFLOW", w);
  await p.close();
}
await b.close(); console.log("ok");
