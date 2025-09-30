import { account } from "../lib/appwrite";

export async function register(email, password, name) {
  try {
    const user = await account.create("unique()", email, password, name);
    console.log("User created:", user);
    return user;
  } catch (err) {
    console.error("Register error:", err);
    throw err;
  }
}


export async function login(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    console.log("Logged in:", session);
    return session;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
}


export async function logout() {
  try {
    await account.deleteSession("current");
    console.log("Logged out");
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
}

