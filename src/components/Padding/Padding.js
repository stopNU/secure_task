import React from 'react';

function Padding(props) {
    let {left, top, right, bottom, compact, factor, style, ...otherProps} = props;
    factor = compact ? 0.5 : factor;
    return <div style={{
        paddingLeft: (left * factor) + 'px',
        paddingTop: (top * factor) + 'px',
        paddingRight: (right * factor) + 'px',
        paddingBottom: (bottom * factor) + 'px',
        ...style
    }} {...otherProps}></div>
}

Padding.defaultProps = {
    left: 16,
    top: 16,
    right: 16,
    bottom: 16,
    compact: false,
    factor: 1
};

export default Padding;