import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import { useEffect, useState } from "react";

const Home = () => {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     // Simulate loading data
    //     const timer = setTimeout(() => {
    //     setIsLoading(false);
    //     }, 2000);

    //     // Cleanup function
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto mt-20">
                <h1 className="lg:text-4xl text-2xl text-center font-medium">Browse Jobs By Categories</h1>
                <Tabs className="mx-auto text-center mt-5">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Web Development</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Graphics Design</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Digital Marketing</h2>
                    </TabPanel>
                </Tabs>
            </div>

            {/* <section>
                <div className="card card-compact w-96 bg-white shadow-2xl mt-10 p-1 border-2">
                    {isLoading ? (
                    <Skeleton height={200} />
                    ) : (
                    <figure><img src="https://i.ibb.co/ZMFr09T/job.jpg" alt="Job" /></figure>
                    )}
                    <div className="card-body">

                    <div className="flex justify-between  font-medium">
                        {isLoading ? (
                            <Skeleton width={70} borderRadius={100} height={40}/>
                        ) : (
                            <h1 className="rounded-full bg-gradient-to-r from-[#38aa95] to-[#6da59a] text-white p-2 font-medium">Offer</h1>
                        )}
                        {isLoading ? (
                            <Skeleton width={70} borderRadius={100} height={40}/>
                        ) : (
                            <h1 className="rounded-full bg-gradient-to-r from-[#38aa95] to-[#6da59a] text-white p-2 font-medium">Price</h1>
                        )}
                    </div>
                    {isLoading ? (
                        <Skeleton width={100} />
                    ) : (
                        <h2 className="card-title">E-commerce Website Development!</h2>
                    )}

                    {isLoading ? (
                        <Skeleton count={2} />
                    ) : (
                        <p>Dramatically redefine bleeding-edge infrastructures after client-focused value.</p>
                    )}

                    {isLoading ? (
                        <Skeleton width="full" height={50} />
                    ) : (
                        <div className="card-actions justify-center">
                            <button className="btn bg-[#38AA95] text-white w-full">Details</button>
                        </div>
                    )}
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;