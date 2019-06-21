import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Menu from './components/menu/Menu';
import Lesson from "./components/lessons/lesson_1/Lesson";
import 'react-day-picker/lib/style.css';
import './App.scss'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Menu/>
                    <div className="content">
                        <Switch>
                            <Route path="/lesson_1" component={Lesson}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

    // get lessons() {
    //     return LessonsNav.map((lesson, index) => (
    //             <Route
    //                 key={lesson.id}
    //                 path={`/lesson_${index}`}
    //                 render={(props) => <Lesson {...props} isAuthed={true} articles={articles} nav={LessonsNav}/>}
    //             />
    //         )
    //     )
    // }
}

export default App;
