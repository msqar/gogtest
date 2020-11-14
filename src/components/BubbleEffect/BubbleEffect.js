import React from 'react';

/**
 * BubbleEffect Component:
 * This is a component effect, that shows a little bubble animation used as a click event feedback.
 *
 * Usage:
 * <BubbleEffect />
*/
class BubbleEffect extends React.PureComponent {
    render() {
        return (
            <div className="BubbleEffect">
                <div className="BubbleEffect-circle"></div>
            </div>
        )
    }
}

export default BubbleEffect;