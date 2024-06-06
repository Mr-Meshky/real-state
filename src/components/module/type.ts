import { Dispatch, SetStateAction } from "react";

import { CategoriesType } from "@/constants/strings";
import { ProfileType } from "@/models/Profile";

export interface TextInputProps {
  title: string;
  name: keyof ProfileType;
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
  textarea?: boolean;
}

export interface TextListProps {
  title: string;
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
  type: "amenities" | "rules";
}

export interface SideBarProps {
  searchParams: { category?: CategoriesType } | undefined;
}

export interface RadioListProps {
  profileData: any;
  setProfileData: Dispatch<SetStateAction<any>>;
}

export interface DashboardCardProps {
  data: ProfileType;
}

export interface CustomDatePickerProps {
  profileData: any;
  setProfileData: Dispatch<any>;
}

export interface CategoryCardProps {
  name: string;
  title: string;
}
