import Avatar from "@/components/Avatar";
import Date from "@/components/Date";
import PostTitle from "@/components/PostTitle";
import SectionSeparator from "./SectionSeparator";

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <div className="px-4 mt-16 mb-8 space-y-3 md:text-center md:mt-12">
        <PostTitle>{title}</PostTitle>
        <div className="flex items-center py-4 md:justify-center">
          <Avatar name={author.name} image={author.image} />
          <Date dateString={date} />
        </div>
      </div>
      <SectionSeparator />
    </>
  );
}
