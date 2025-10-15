export interface User {
  id: number;
  name: string;
  email: string;
}

export const mockLogin = async (email: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id: 1, name: 'John Doe', email };
};

export const mockSignup = async (name: string, email: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id: 2, name, email };
};
