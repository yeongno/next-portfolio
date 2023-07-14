import CircleAnimation from "./common/circle-animation";
import BackCircle from "./common/circle-graph/stack-back-circle";
import DBCircle from "./common/circle-graph/stack-db-circle";
import FrontCircle from "./common/circle-graph/stack-front-circle";
import StackFrame from "./skill-stack/stack-frame";
import StackLib from "./skill-stack/stack-lib";
import StackOther from "./skill-stack/stack-other";

export default function SkillStack() {

    
    return (
                 <div className="container flex flex-col flex-wrap items-start justify-start p-4 px-6 py-2 mx-auto border border-gray-500 rounded-md space-x-auto md:flex-row">
            <div className="flex justify-center lg:w-1/3 md:w-1/2 xl:w-1/3">
                <StackFrame />
            </div>
            <div className="flex justify-center lg:w-1/3 md:w-1/2 xl:w-1/3">
                <StackLib />

            </div>
            <div className="flex justify-center lg:w-1/3 md:w-1/2 xl:w-1/3">
                <StackOther />
            </div>
            </div>
    )
}