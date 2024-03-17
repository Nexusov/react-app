interface ApiSchema {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: BodyInit | null
  headers?: HeadersInit
}

async function fetchData<T>({ url, method = 'GET', body = null, headers = {} }: ApiSchema): Promise<T> {
  const response = await fetch(url, { method, body, headers });
  if (!response.ok) {
    console.error(`fetchData failed with status: ${response.status}`);
    throw new Error(`fetchData failed with status: ${response.status}`);
  }
  return await response.json();
}


export default fetchData;