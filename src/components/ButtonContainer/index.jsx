const Container = ({ children, extraStyle }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: 10, gap: 7, ...extraStyle }} className="custom-button-container">
            {children}
        </div>
    )
}

export default Container