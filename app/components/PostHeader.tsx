import Avatar from "@/components/Avatar";
import Date from "@/components/Date";
import PostTitle from "@/components/PostTitle";
import SectionSeparator from "@/components/SectionSeparator";

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <div className="px-4 mt-16 mb-2 space-y-3 md:mt-12">
        <PostTitle>{title}</PostTitle>
        <div className="flex items-center py-4 space-x-3">
          <Avatar name={author.name} image={author.image} />
          <div className="text-sm text-primaryLight dark:text-gray-400">|</div>
          <Date dateString={date} />
        </div>
      </div>
      <SectionSeparator />
    </>
  );
}
