import {useEffect, useRef, useState} from "react";
import NeedsVolunteerCard from "../NeedsVolunteer/NeedsVolunteerCard";

const SearchVolunteer = () => {
  const [needsVolunteer, setNeedsVolunteer] = useState([]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);
  const searchRef = useRef(null);
  const handleSearch = () => {
   const value = searchRef.current.value
   setSearchQuery(value);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const visibleServices = showMore ? needsVolunteer : needsVolunteer.slice(0, 3);

    useEffect(() => {
        fetch(`http://localhost:5000/needsVolunteer?search=${searchQuery}`)
            .then(res => res.json())
            .then(data => setNeedsVolunteer(data));
    },[searchQuery])

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15 mt-24">
        <h2 className="lg:text-4xl text-2xl text-center font-medium">
          All Services
        </h2>

        <div className="w-full md:w-2/5 flex mt-5 gap-5 mx-auto">
          <input
            type="text"
            name="name"
            id=""
            className="w-full border-2 hover:border-[#38AA95] md:flex-1 p-2 rounded-lg border-[1px solid #DEDEDE] bg-[#FFF] text-[rgba(11, 11, 11, 0.40)] text-sm"
            placeholder="Search here...."
            ref={searchRef}
          />
          <button
            className="w-full md:w-auto bg-[#38AA95] text-[#FFF] text-base font-semibold py-2  px-4 rounded-lg"
            onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5">
                {
                    visibleServices.map(needsVolunteer => <NeedsVolunteerCard key={needsVolunteer._id} needsVolunteer={needsVolunteer}></NeedsVolunteerCard>)
                }
            </div>
        {!showMore && needsVolunteer.length > 3 && (
          <div className="flex justify-center">
              <button
                onClick={handleShowMore}
                className="btn border-2 border-[#38AA95] hover:text-white hover:bg-[#38AA95] w-36">
                Show More
              </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SearchVolunteer;

