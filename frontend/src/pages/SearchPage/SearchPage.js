import React from "react";
import VideoList from "../../components/VideoList/VideoList";

const SearchResultsPage = ({ results }) => {
  return (
    <div>
      <div className="searchGrid">
        <VideoList videos={results} />
      </div>
    </div>
  );
};

export default SearchResultsPage;