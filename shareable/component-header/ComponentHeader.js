import ComponentInfo from "./component-info/ComponentInfo"
import ComponentTitle from "./component-title/ComponentTitle"

const ComponentHeader = ({info,title}) => {
    return (
        <div className="component__header">
            <ComponentInfo info={info}/>
            <ComponentTitle title={title}/>
        </div>
    )
}

export default ComponentHeader
