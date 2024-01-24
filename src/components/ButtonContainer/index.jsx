import { BUTTON_CONTAINER_STYLE } from "../../styles"

const Container = ({ children, extraStyle }) => {
    return (
        <div 
            style={{ ...BUTTON_CONTAINER_STYLE, ...extraStyle }} 
            className="custom-button-container"
        >
            {children}
        </div>
    )
}

export default Container