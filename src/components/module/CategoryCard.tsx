import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  title: string;
}

function CategoryCard({ name, title }: CategoryCardProps) {
  return (
    <div className="shadow-[#304ffe4a_0px_4px_15px] border-2 border-primary rounded-2xl overflow-hidden p-2.5 transition duration-100 my-2.5 hover:-rotate-6">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
          className="rounded-lg"
        />
        <p className="text-lg font-normal my-2.5 ml-1 text-center text-primary">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
