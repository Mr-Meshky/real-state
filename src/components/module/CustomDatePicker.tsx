import { Dispatch } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

interface CustomDatePickerProps {
  profileData: any;
  setProfileData: Dispatch<any>;
}

function CustomDatePicker({
  profileData,
  setProfileData,
}: CustomDatePickerProps) {
  const changeHandler = (e: any): void => {
    const date: Date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="mb-14">
      <p className="mb-1">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
        className="w-[110px] border border-primary border-dashed"
      />
    </div>
  );
}

export default CustomDatePicker;
