import Filters from '../Filters';
import ToggleGraph from '../ToggleGraph';
import ToggleCluster from '../ToggleCluster';

const Header = ({ 
    showCluster, graphType, startDuration, 
    endDuration, allMeters, selectedMeters,
    changeGraphType, toggleClusters, 
    handleChangeDuration, handleChangeMeters,
}) => {
    return (
        <header 
            style={{ 
                display: "flex", flexWrap: "wrap", 
                justifyContent: "center", gap: 16, 
                marginBottom: 15 
            }}
        >
            <Filters 
                allMeters={allMeters} 
                selectedMeters={selectedMeters}
                startDuration={startDuration}
                endDuration={endDuration}
                handleChangeDuration={handleChangeDuration}
                handleChangeMeters={handleChangeMeters}
            />
            <ToggleCluster 
                showCluster={showCluster} 
                toggleClusters={toggleClusters} 
            />
            <ToggleGraph
                type={graphType}
                handleChange={changeGraphType}
            />
        </header>
    )
}

export default Header