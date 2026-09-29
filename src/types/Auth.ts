export interface RegisterUserData {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  name: string;
  surname: string;
}
