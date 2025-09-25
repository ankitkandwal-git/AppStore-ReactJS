import './index.css'

const TabItem = props =>{
    const {tabItemDetails,updateApps,isActive} = props 
    const {displayText,tabId} = tabItemDetails
    const onClickTab = () =>{
        updateApps(tabId)
    }
    const className = isActive ?  'apply' : 'not-apply'
    return(
        <li className="tab-item">
            <button type="button" className={`tab-button${className}`} onClick={onClickTab}>
                {displayText}
            </button>
        </li>
    )
}

export default TabItem