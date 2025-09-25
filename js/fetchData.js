export async function fetchCompanyByCode(code) {
  const response = await fetch("./data/data.json");
  const companies = await response.json();

  return companies.find(c => c["証券コード"] === code) || null;
}
