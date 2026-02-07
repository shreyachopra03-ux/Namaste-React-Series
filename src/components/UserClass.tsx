import React from "react";

type Props = {
    name: string;
    location: string; 
}

type State = {
    count: number;
    count2: number;
}

// Class Based Component -> very important for interview also
class UserClass extends React.Component<Props, State> {
    constructor(props:Props){
        super(props);

        // This is how state variable is created in a class based component 
        this.state = {
            count: 0,
            count2: 2,
        }
    };

    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return (
             <div className="user-card">
            <h2>Name: {name}</h2>
            <h2>Count: {count}</h2>
            <button 
            onClick = {() => {
                // NEVER UPDATE STATE VARIABLES DIRECTLY
                this.setState({
                    count: this.state.count + 1,
                });
            }}
            >Count Increase</button>
           
            <h3>Location: {location}</h3>
            <h4>Contact info : @chopra_shreya03</h4>
        </div>
        );
    };
};

export default UserClass;