
import Filters from '../Filters';
import ToggleGraph from '../ToggleGraph';
import ToggleCluster from '../ToggleCluster';

const HEADER_STYLE = { 
    display: "flex", flexWrap: "wrap", 
    justifyContent: "center", gap: 16, 
    marginBottom: 15 
}

const Header = () => {
    return (
        <header style={HEADER_STYLE}>
            <Filters />
            <ToggleCluster />
            <ToggleGraph />
        </header>
    )
}

export default Header