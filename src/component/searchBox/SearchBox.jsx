
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import search from "./../../asset/images/search.svg";
import { Link } from 'react-router-dom';

function SearchBox() {
    const [courses, setCourses] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {

        axios.get(' http://localhost:8000/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);

    return (
        <div className="w-80 relative z-10">
            <div className="bg-slate-200 rounded-2xl flex items-center ">
                <img src={search} className="mr-2 mt-1" alt="Search" />
                <input
                    className="bg-slate-200 rounded-2xl text-sm w-4/5 pr-4"
                    placeholder="چی دوست داری یادبگیری؟"
                    onFocus={() => setShowList(true)}
                    onMouseDown={() => setShowList(false)}
                />
            </div>
            {showList && (
                <ul className="bg-white border rounded-lg mt-2 max-h-40 w-4/5 overflow-y-auto absolute  z-20">
                    {courses.map(course => (
                        <Link to={`/course/${course.id}`}>
                            <li key={course.id} className="p-2 hover:bg-gray-200 cursor-pointer">
                                {course.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBox;