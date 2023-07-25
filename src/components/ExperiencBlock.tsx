interface ExperienceBlockProps {
  company: string;
  companyDesc: string;
  period: {
    start: string;
    end: string;
  };
  title: string;
  works: string[];
  techStack: {
    name: string;
    path: string;
  }[];
}

export default function ExperienceBlock({
  company,
  companyDesc,
  period,
  title,
  works,
  techStack,
}: ExperienceBlockProps) {
  return (
    <div className="work-experience mb-8">
      <div className="text-xl font-bold border-l-4 border-cyan-800 pl-4">
        <h3 className="flex justify-between text-2xl ">
          {company}
          <span className=" font-normal">
            {period.start} - {period.end}
          </span>
        </h3>
        <div>{companyDesc}</div>
        <p>{title}</p>
      </div>
      <div className="tech-stacks flex my-4">
        {techStack.map(({ path, name }, index) => {
          return (
            <div
              className="h-16 w-16 relative bg-teal-50 rounded-2xl overflow-hidden flex justify-center items-center mr-2"
              key={index}
            >
              <div className="h-12 w-12 relative">
                <img className="h-full w-full" src={`${path}`} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 text-xl">
        <ul className="list-disc pl-8">
          {works.map((work, index) => (
            <li key={index} className=" mb-4">
              {work}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
