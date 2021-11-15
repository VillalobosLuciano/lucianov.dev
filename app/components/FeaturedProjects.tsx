import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";

export default function Projects({ projects }) {
  return (
    <section>
      <p className="px-4 pb-4 mt-2 leading-snug text-primaryLight dark:text-gray-400 lg:pb-12">
        Real projects that I developed for learning, for friends, for free, for
        fun.
      </p>

      <div className="px-4 py-6 mx-auto overflow-hidden md:py-0 ">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
          {projects.length ? (
            projects.map((project) => (
              <ProjectPreview
                key={project._id}
                slug={project.slug}
                mainImage={project.mainImage}
                projectName={project.projectName}
                projectType={project.projectType}
              />
            ))
          ) : (
            <div className="text-center">No Projects Yet</div>
          )}
        </div>
      </div>

      <div className="flex mt-6 mb-4">
        <Link href="/projects">
          <a className="w-full py-2 mx-4 font-semibold text-center border rounded-2xl text-neptune-500 border-opacity-80 border-neptune-500 bg-neptune-500 bg-opacity-10 dark:bg-yellow-700 dark:border-yellow-500 dark:text-yellow-500 dark:border-opacity-80 md:hidden dark:bg-opacity-20">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
