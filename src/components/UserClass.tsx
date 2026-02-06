import React from "react";

type Props = {
    name: string;
    location: string;
}

// Class Based Component -> very important understand properlyyy 
class UserClass extends React.Component<Props> {
    constructor(props:Props){
        super(props);

        // This is how state variable is created in a class based component 
        this.state = {
            count: 0,
        };
    };

    render() {
        const { name, location } = this.props;
        return (
             <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact info : @chopra_shreya03</h4>
        </div>
        );
    };
};

export default UserClass;