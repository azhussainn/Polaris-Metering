const Container = ({ children }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", padding: 10, gap: 7 }} className="custom-button-container">
            {children}
        </div>
    )
}

export default Container