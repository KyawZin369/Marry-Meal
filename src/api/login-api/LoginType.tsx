export interface LoginFormValues {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    message: string;
    user: {
      id: number;
      email: string;
      user_name: string;
      role_as: number;
      type: string;
    };
}
  