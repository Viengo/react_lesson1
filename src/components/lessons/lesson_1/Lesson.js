import React, {Component} from 'react';
import Sidebar from "../sidebar/Sidebar";
import articles from '../../../fixtures';


class Lesson extends Component {
    render() {
        return (
            <div className="lesson">
                <h1>Lesson 1</h1>
                <div className="section_wrap">
                    <Sidebar/>
                    {/*<LessonContent/>*/}
                </div>
            </div>
        );
    }
}

export default Lesson;