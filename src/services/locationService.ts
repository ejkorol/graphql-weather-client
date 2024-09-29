"use server";
import { Cities } from "@/types";

const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("API_URL is not defined in the environment variables.");
}

export const getCities = async (isoCode: string): Promise<Cities> => {
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

  try {
    const res = await fetch(apiUrl as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch cities: ${res.status} ${res.statusText}`,
      );
    }

    const { data } = await res.json();

    return data.cities;
  } catch (error) {
    throw new Error(`Error fetching cities: ${error}`);
  }
};
