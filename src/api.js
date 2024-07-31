const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const createPost = async (title, body) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    return response.json();
  } catch (error) {
    throw new Error("Failed to create post");
  }
};
