import React from 'react';
import { EventEmitter } from '../../services/event-emitter';
import { Events } from '../../services/index';
import { throttle } from 'lodash';

class OverlayBackground extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        EventEmitter.subscribe(Events.DROPDOWN_TOGGLE_EVENT, this.onDropdownToggle);
    }

    onDropdownToggle = ({isVisible}) => {
        this.setState({isVisible});
    }

    onOverlayClick = () => {
        this.setState({isVisible: false});
        EventEmitter.dispatch(Events.OVERLAY_CLICKED_EVENT, {});
    }

    render() {
        const { isVisible } = this.state;
        return (
            <>
                <div className={'OverlayBackground ' + (isVisible ? 'is--visible' : '')} onClick={ throttle(this.onOverlayClick, 300) }/>
            </>
        )
    }
}

export default OverlayBackground;