import React from "react";


class Explore extends React.Component {
    render () {
        return(
                <div id = "firstDiv">
                    <ul>
                        <li className="firstLi"><a href="/arts?ref=global-footer" >Arts</a></li>
                        <li className="firstLi"><a href="/comics-illustration?ref=global-footer" >Comics & Illustration</a></li>
                        <li className="firstLi"><a href="/design-tech?ref=global-footer" >Design & Tech</a></li>
                        <li className="firstLi"><a href="/film?ref=global-footer" >Film</a></li>
                        <li className="firstLi"><a href="/food-craft?ref=global-footer" >Food & Craft</a></li>
                        <li className="firstLi"><a href="/games?ref=global-footer" >Games</a></li>
                        <li className="firstLi"><a href="/music?ref=global-footer" >Music</a></li>
                        <li className="firstLi"><a href="/publishing?ref=global-footer" >Publishing</a></li>
                    </ul>
                </div>
        )
    }
}





export default Explore;