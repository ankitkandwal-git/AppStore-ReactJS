import './index.css'

const AppItem = props =>{
    const {appItemDetails} = props
    const {appName, imageUrl} = appItemDetails
    return(
        <li className="app-item">
            <img src={imageUrl} alt={appName} className="app-image"/>
            <p className="app-name">{appName}</p>
        </li>
    )
}

export default AppItem
