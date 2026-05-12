const Base_Url = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await fetch(`${Base_Url}/posts`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function getPost() {
  const res = await fetch(`${Base_Url}/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch post");
  }
  return res.json();
}
