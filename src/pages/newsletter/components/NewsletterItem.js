import React from 'react';

const styles = {
    container: {
        display: "inline-flex",
        alignItems: "center",
        overflowX: "auto",
        padding: "10px",
        marginRight: "10px",
        borderRadius: "10px",
        height: "100px",
        width: "500px",
    },
};

class NewsletterItem extends React.Component {
    render() {
        const data = this.props.data ?? {};

        return <div className="bg-gradient-to-r from-[#37A0EC] to-[#6C30CD] flex" style={styles.container}>
            <div className="overflow-hidden rounded-lg flex-1"
                 style={
                     {
                         height: "80px",
                         minWidth: "120px",
                         backgroundImage: "url(" + data.img + ")",
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                     }
                 }>
            </div>
            <div className="ml-5">
                <div className="text-xl font-bold">
                    {data.userName}
                </div>
                <div style={{ maxWidth: "300px",}} className="text-sm font-normal line-clamp-2 whitespace-pre-wrap">
                    {data.descr}
                </div>
            </div>
        </div>
    }
}

export default NewsletterItem