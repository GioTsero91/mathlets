import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'

const styles = {
    container: {
        width: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        position: "absolute",
    },
};

class Slider extends React.Component {
    render() {
        return <ScrollContainer horizontal="true" style={styles.container}>
            {
                this.props.children
            }
        </ScrollContainer>
    }
}

export default Slider