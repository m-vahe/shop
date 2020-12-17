import ComponentInfo from "./component-info/ComponentInfo"
import ComponentTitle from "./component-title/ComponentTitle"

const ComponentHeader = ({info,title}) => {
    return (
        <div className="text-center">
            <ComponentInfo info={info}/>
            <ComponentTitle title={title}/>
        </div>
    )
}

export default ComponentHeader
