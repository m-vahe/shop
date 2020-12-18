import ComponentInfo from "./component-info/ComponentInfo"
import ComponentTitle from "./component-title/ComponentTitle"

const ComponentHeader = ({info,title}) => {
    return (
<<<<<<< HEAD
        <div className="component__header">
=======
        <div className="text-center">
>>>>>>> 04a3525be177e81093e8b739a25dc8befd9ccc60
            <ComponentInfo info={info}/>
            <ComponentTitle title={title}/>
        </div>
    )
}

export default ComponentHeader
