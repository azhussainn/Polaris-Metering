import { Suspense } from "react";
import ButtonContainer from "../ButtonContainer";
import Filters from '../Filters';
import { Link } from 'react-router-dom';
import { Config } from "../Icons";

const HEADER_STYLE = {
    display: "flex", flexWrap: "wrap",
    justifyContent: "center", gap: 16,
    marginBottom: 15
}

const Header = () => {
    return (
        <header style={HEADER_STYLE}>
            <Filters />
            
            <ButtonContainer>
                <Link to="/config">
                    <Suspense fallback={<p>Loading...</p>}>
                        <Config />
                    </Suspense>
                </Link>
            </ButtonContainer>
        </header>
    )
}

export default Header