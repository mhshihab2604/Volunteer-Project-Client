import {useEffect, useRef, useState} from "react";
import NeedsVolunteerCard from "../NeedsVolunteer/NeedsVolunteerCard";
import LayoutTable from "../LayoutTable/LayoutTable";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdTableRows } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const SearchVolunteer = () => {
  const [layout, setLayout] = useState("column");
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
        fetch(`https://assignment-11-server-one-pied.vercel.app/needsVolunteer?search=${searchQuery}`)
            .then(res => res.json())
            .then(data => setNeedsVolunteer(data));
    },[searchQuery])

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15 mt-20">
        <h2 className="lg:text-4xl text-2xl text-center font-medium">
          All
          <span className="ml-2" style={{ color: '#38AA95', fontWeight: 'medium' }}>
              <Typewriter
              words={['Services']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1200}
              onLoopDone={handleDone}
              />
          </span>
        </h2>

        <div className="w-full md:w-2/5 flex mt-5 mx-auto">
          <input
            type="text"
            name="name"
            id=""
            className="w-full border-2 hover:border-[#38AA95] outline-none md:flex-1 p-2 rounded-l-lg border-[1px solid #DEDEDE] bg-[#FFF] text-[rgba(11, 11, 11, 0.40)] text-sm"
            placeholder="Search here...."
            ref={searchRef}
          />
          <button
            className="w-full md:w-auto bg-[#38AA95] text-[#FFF] text-base font-semibold py-2  px-4 rounded-r-lg"
            onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Layout Section */}
        <div className="mt-10">
          {layout === "column" ? (
            <div className="flex justify-center gap-2">
              <h1 className="text-2xl font-semibold">Layout: </h1>
              <button onClick={() => setLayout("table")}><TfiLayoutGrid3Alt ></TfiLayoutGrid3Alt></button>
            </div>
          ) : (
            <div className="flex justify-center gap-2">
              <h1 className="text-2xl font-semibold">Layout: </h1>
              <button onClick={() => setLayout("column")}><MdTableRows className="text-xl"></MdTableRows></button>
            </div>
          )}

          {layout === "column" ?  
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
          </div> : ""}
          {layout === "table" ? <LayoutTable></LayoutTable>: ""}
        </div>
      </div>
    </div>
  );
};

export default SearchVolunteer;

