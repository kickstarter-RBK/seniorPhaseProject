import React from "react";


class Table extends React.Component {
    render () {
        return(
            <div id = "secondDiv">
                <table>
                    <thead>
                        <tr>
                            <th>ABOUT</th>
                            <th>SUPPORT</th>
                            <th>HELLO</th>
                            <th>MORE FROM KICKSTARTER</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/about?ref=global-footer">About us</a></td>
                            <td><a href="/help?ref=global-footer">Help Center</a></td>
                            <td><a href="/newsletters?ref=global-footer">Newsletters</a></td>
                            <td><a href="https://thecreativeindependent.com?ref=global-footer">The Creative Independent</a></td>
                        </tr>
                        <tr>
                            <td><a href="/charter?ref=global-footer">Our charter</a></td>
                            <td><a href="/rules?ref=global-footer">Our Rules</a></td>
                            <td><a href="/mobile?ref=global-footer">Mobile apps</a></td>
                            <td><a href="https://medium.com/kickstarter?ref=global-footer">Kickstarter Magazine</a></td>
                        </tr>
                        <tr>
                            <td><a href="/help/stats?ref=global-footer">Stats</a></td>
                            <td><a href="/help/handbook?ref=global-footer">Creator Handbook</a></td>
                            <td><a href="/blog?ref=global-footer">Kickstarter Blog</a></td>
                            <td><a href="/podcast?ref=global-footer">Kickstarter Podcast</a></td>
                        </tr>
                        <tr>
                            <td><a href="/press?ref=global-footer">Press</a></td>
                            <td><a href="/patrons?ref=global-footer">Patrons</a></td>
                            <td><a href="/backing-and-hacking?ref=global-footer">Engineering Blog</a></td>
                        </tr>
                        <tr>
                            <td><a href="/jobs?ref=global-footer">Jobs</a></td>
                            <td></td>
                            <td><a href="/research?ref=global-footer">Research</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}





export default Table;