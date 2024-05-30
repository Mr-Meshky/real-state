export type SessionType = {
  user: { email: string };
} | null;

export type CategoriesTypes = ["villa" | "apartment" | "store" | "office"];

export interface ContextType {
  params: {
    profileId: any; slug: string 
};
  searchParams?: { [key: string]: string | string[] | undefined };
}
