import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-5 rounded-lg mt-20 mb-2.5 bg-primary text-white">
      <div className="w-[70%] text-justify ml-8">
        <h3 className="font-semibold text-2xl mb-2.5">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul>
          <li className="ltr text-left">
            <Link
              href="https://mrmeshky.ir/"
              className="underline hover:text-blue-200"
            >
              MrMeshky
            </Link>
          </li>
          <li className="ltr text-left">
            <Link
              href="https://github.com/mr-meshky"
              className="underline hover:text-blue-200"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
