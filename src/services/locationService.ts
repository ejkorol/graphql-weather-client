"use server";

const apiUrl = process.env.API_URL;

export const getCities = async (isoCode: string) => {
  const query = `
  query Cities($isoCode: String!) {
    cities(isoCode: $isoCode) {
      latitude
      longitude
      name
    }
  }
  `;

  const variables = { isoCode };

  const res = await fetch(apiUrl as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await res.json();
  return data.cities;
};
