interface DashboardPageProps {
  createdAt: Date;
}

function DashboardPage({ createdAt }: DashboardPageProps) {
  return (
    <div>
      <h3 className="text-primary font-normal text-2xl mb-5">سلام 👋</h3>
      <p className="text-gray-500">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="mt-24 flex w-fit py-1 px-2.5 rounded bg-[#304ffe18]">
        <p className="text-gray-500 m-0 font-normal ml-2.5">تاریخ عضویت:</p>
        <span className="text-primary">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
