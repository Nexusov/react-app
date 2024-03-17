import { ApiSchema } from "../../types/types";

async function fetchData<T>({ url, method = 'GET', body = null, headers = {} }: ApiSchema): Promise<T> {
  const response = await fetch(url, { method, body, headers });
  if (!response.ok) {
    console.error(`fetchData failed with status: ${response.status}`);
    throw new Error(`fetchData failed with status: ${response.status}`);
  }
  return await response.json();
}


export default fetchData;