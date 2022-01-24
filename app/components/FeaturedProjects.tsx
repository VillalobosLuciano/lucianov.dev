import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";

export default function Projects({ projects }) {
  return (
    <section>
      <p className="px-4 pb-4 mt-2 leading-snug text-gray-400 lg:pb-12">
        Real projects that I developed for learning, for friends, for free, for
        <b> fun</b>.
      </p>

      <div className="px-4 py-6 mx-auto overflow-hidden md:py-0">
        <div className="flex grid-cols-1 mx-auto overflow-x-auto snap-proximity snap-x hide-scroll-bar sm:grid gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.length ? (
            projects.map((project) => (
              <ProjectPreview
                key={project._id}
                slug={project.slug}
                mainImage={project.mainImage}
                projectName={project.projectName}
                projectType={project.projectType}
                projectDescription={project.projectDescription}
                website={project.link}
                source={project.source}
                scrollX="true"
              />
            ))
          ) : (
            <div className="text-center">No Projects Yet</div>
          )}
        </div>
      </div>

      <div className="flex mt-6 mb-4 sm:hidden">
        <Link href="/projects">
          <a className="w-full py-2 mx-4 text-base font-semibold text-center border rounded-md text-teal-600/90 dark:border-amber-500/40 border-teal-600/40 dark:text-amber-500/90 md:hidden">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
