import Image from "next/legacy/image";
function ProjectItem({ data }) {
    const title = data.properties.title.title[0]?.plain_text
    const githubLink = data.properties.Github?.url 
    const description = data.properties.Description.rich_text[0]?.plain_text 
    const siteLink = data.properties.DeploySite?.url
    const startDate = data.properties.WorkPeriod?.date?.start
    const endDate = data.properties.WorkPeriod?.date?.end
    const tags = data.properties.Tag.multi_select
    const img = data.cover?.file?.url || data.cover?.external?.url
    
 
    const calculatedPeriod = (start, end) => {
        const startDateStringArray = (start||'').split('-');
        const endDateStringArray = (end||'').split('-');
        var startDate = new Date(startDateStringArray[0], startDateStringArray[1] - 1, startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1] - 1, endDateStringArray[2]);
        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;
    };
    return(
        <div className="project-card">
            <div>
                {
                    img && (
                         <Image
                            className="rounded-t-xl"
                            priority={true} 
                            src={img}
                            alt="cover Image"
                            width="100%"
                            height="60%"
                            layout="responsive"
                            objectFit="cover"
                            quality={100}
                        />  
                    )
                }
            </div>
                
            <div className="flex flex-col p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
       
                <h3 className="my-1">
                    작업기간 : {startDate} ~ {endDate} ({calculatedPeriod(startDate,endDate)}일)
                </h3>
                <a href={githubLink}>깃허브 바로가기</a>
                {
                    siteLink && (
                <a href={siteLink}>사이트 바로가기</a>
                    )
                }
                <div className="flex flex-wrap items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mb-2 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
         </div>
    )
}

export default ProjectItem