const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const generateURL = (url) => new URL(url, BACKEND_URL);

export async function loginUser({ username, password }) {
  const url = generateURL("/auth/login");
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    return {
      data: await response.json(),
      status: response.status,
      ok: response.ok,
    };
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser({ username, password }) {
  const url = generateURL("/auth/register");
  try {
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    return {
      data: await response.json(),
      status: response.status,
      ok: response.ok,
    };

  } catch (err) {
    console.error(err);
  }
}