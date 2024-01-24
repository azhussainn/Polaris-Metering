const ToggleButton = ({ on, handleChange }) => {
    return (
        <button
            className={on ? 'on' : 'off'}
            onClick={handleChange}
            aria-label="change graph"
        >
            <span className="pin" />
        </button>
    )
}

export default ToggleButton