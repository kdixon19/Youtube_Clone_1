// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// Page Imports
import VideoPage from "../VideoPage/VideoPage";
import SearchResultsPage from "../SearchPage/SearchPage";

// Utility Imports
import DATA from "../HomePage/localData"

// Component Imports
import SearchBar from "../../components/SearchBar/SearchBar";

function YouTubePage() {
  const [videoResults, setVideoResults] = useState([DATA]);
  const navigate = useNavigate();

  if (process.env.NODE_ENV !== "production") {
    console.log("It's working!");
  }

  useEffect(() => {
    fetchResults("starwars");
  }, []);

  const fetchResults = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            q: searchTerm,
            key: process.env.REACT_APP_YT_API_KEY,
            part: "snippet",
            type: "video",
            maxResults: 5,
          },
        }
      );
      setVideoResults(response.data.items);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <SearchBar handleSearch={fetchResults} />
      <Routes>
        <Route
          path="/"
          element={<SearchResultsPage results={videoResults} />}
        />
        <Route path="/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default YouTubePage;
