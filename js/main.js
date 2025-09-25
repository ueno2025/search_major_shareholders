import { fetchCompanyByCode } from "./fetchData.js";
import { renderResult } from "./render.js";

async function main() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");   // URLの ?code=XXXX を取得

  if (code) {
    const company = await fetchCompanyByCode(code);
    renderResult(company, code);
  }
}

main();
