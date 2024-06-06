import { Dispatch, ReactNode, SetStateAction } from "react";

import { ProfileType } from "@/models/Profile";

export interface Inputs {
  email: string;
  password: string;
  rePassword?: string;
}

export interface MyProfilesPageProps {
  profiles: ProfileType[];
}

export interface DashboardPageProps {
  createdAt: Date;
}

export interface AddProfilePageProps {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: [];
  amenities: [];
}

export interface ChildrenProps {
  children: ReactNode;
}
