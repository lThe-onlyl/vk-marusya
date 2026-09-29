import { LoginUserData, RegisterUserData, UserProfile } from "@/types/Auth";

const API_URL = "https://cinemaguide.skillbox.cc";

export async function registerUser(data: RegisterUserData): Promise<void> {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }
}

export async function loginUser(data: LoginUserData): Promise<void> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  console.log("LOGIN STATUS:", response.status);
  console.log("LOGIN RESPONSE:", await response.text());

  if (!response.ok) {
    throw new Error("Failed to login user");
  }
}

export async function logoutUser(): Promise<void> {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to logout user");
  }
}

export async function getProfile(): Promise<UserProfile> {
  const response = await fetch(`${API_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("User is not authorized");
  }

  return response.json();
}
