const ToggleButton = ({ on, handleChange }) => {
    return (
        <button
            className={on ? 'on' : 'off'}
            onClick={handleChange}
        >
            <span className="pin" />
        </button>
    )
}

export default ToggleButton