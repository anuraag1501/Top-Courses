import './App.css';
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { Spinner } from "./components/Spinner";
import { Cards } from "./components/Cards";

import { filterData, apiUrl } from "./data";
import { apiData } from "./api-response";
import { toast } from "react-toastify";

function App() {
  const [allData, setAllData] = useState(null);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  function filterCourses(category, output = null) {
    if (!output) output = allData;

    if (!output) {
      toast.error("No course data found!");
    } else {
      let filteredCourses = [];
      Object.values(output).forEach((data) => {

        Object.entries(data).forEach(([categoryName, categoryValue]) => {
          //PERFORMING FILTERING 
          if (category === "All" || categoryName === category) {
            categoryValue.forEach((course) => {
              filteredCourses.push(course);
            });
          }
        })

      });
      
      setCourses(filteredCourses);
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();

      setAllData(output);
      filterCourses("All", apiData);

    } catch (error) {
      toast.error("Error fetching courses from API");
      
      setAllData(apiData);
      filterCourses("All", apiData);
      
      toast.success("Fetched data from local storage");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <div className='flex-1 bg-bgDark2'>
        <Filter filterData={filterData} filterCourses={filterCourses} />

        <div className='w-11/12 max-2-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
          {loading ? <Spinner /> : <Cards courses={courses} />}
        </div>
      </div>
    </div>
  );
}

export default App;
