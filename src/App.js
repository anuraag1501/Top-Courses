import './App.css';
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import {Spinner} from "./components/Spinner";
import {Cards} from "./components/Cards";

import {filterData, apiUrl} from "./data";
import {apiData} from "./api-response";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output);
    }catch(error){
      toast.error("Error fetching courses from API");
      setCourses(apiData);
      toast.success("Fetched data from local storage");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar/>
      </div>

      <div className='bg-black bg-opacity-50'>
        <div>
          <Filter filterData={filterData}/>
        </div>

        <div className='w-11/12 max-2-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          { loading ? <Spinner/> : <Cards courses={courses}/> }
        </div>
      </div>
    </div>
  );
}

export default App;
