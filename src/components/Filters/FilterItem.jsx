const FilterItem = (props) => {
    const { otherProps, ...rest } = props;
    const { uniqueID, label, customContainerStyle } = otherProps;
    return (
        <>
            <div className="label-container" style={customContainerStyle}>
                <label htmlFor={uniqueID} className="custom-label">
                    {label}
                </label>
            </div>
            <input {...rest}  />
        </>
    )
}

export default FilterItem