import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    // static getDerivedStateFromProps (props, state){
    //     return {favoritecolor: props.favcol};
    // }

    // componentDidMount() {
    //     setTimeout( () => {
    //         this.setState({favoritecolor: "yellow"})
    //     }, 1000)
    // }

    shouldComponentUpdate() {
        return true;    // false이면 버튼을 눌러도 red가 blue로 바뀌지 않음
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

export default Header;