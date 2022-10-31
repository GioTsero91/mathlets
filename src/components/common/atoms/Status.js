import React from 'react';

class Status extends React.Component {

    render() {
        this.data = this.props.data ?? null;

        return <div>
            <div className="text-pink mb-2 text-sm">
                {this.data.status}
            </div>
            <div className="mb-1 w-20 h-1 bg-teal text-left overflow-hidden" style={{borderRadius:'3px'}}>
                <div className={"bg-pink h-full"} style={{width: this.data.progress + '%'}}></div>
            </div>
            <div className="text-sm text-center">
                {this.data.progress} %
            </div>
        </div>
    }
}

export default Status