import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="pt-10">
      <div className="bg-fireGreen py-28 flex justify-center">
        <Link href="/blog">
          <p className="font-bold text-4xl text-white cursor-pointer">
            Learn more on our blog
          </p>
        </Link>
      </div>
    </section>
  );
}
