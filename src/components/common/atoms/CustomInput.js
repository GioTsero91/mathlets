import React from 'react';

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        borderRadius: "9999px",
        backgroundColor: "#353648",
        color: "#81828D",
        outline: "none",
        border: "1px solid #81828D",
        padding: "10px",
        fontStyle: "italic",
        fontSize:"14px",
        paddingLeft: "20px",
    },
    icon: {
        position: "relative",
        left: "-35px",
        height: "20px"
    }
};

class CustomInput extends React.Component {
    render() {
        let width = this.props.width ?? "300px";
        return <div style={styles.container}>
            <input style={{...styles.input, width: width}}
                   placeholder={this.props.placeholder}
                   value={this.props.value}/>
            {this.props.icon && <img style={styles.icon} src={this.props.icon}/>}
        </div>
    }
}

export default CustomInput