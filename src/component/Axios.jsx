import React, { Suspense, useEffect, useState } from 'react';
import Card from "../component/Card.jsx"
import axios from 'axios';
// const Card = lazy(() => delayForDemo(import("./component/Card.jsx")));
function Axios() {
    const [data, setData] = useState([]);
    const [pg, setPg] = useState(1);
    const [loading, setloading] = useState(true)

    // const [a, setA] = useState([])

    // Fetch image data from the API
    const getImageData = async () => {
        try {
            const API = `https://picsum.photos/v2/list?page=${pg}&limit=10`;
            const res = await axios.get(API);
            setData(res.data);
            // setLoading(true);
            // console.log(res)
        } catch (error) {
            console.error(error);
        } finally {
            setloading(false)
        }
    };


    // Update data when the page number changes
    useEffect(() => {
        getImageData();
    }, [pg]);

    // Handlers for page navigation
    const handlePageChange = (pageNumber) => {
        setPg(pageNumber);
    };

    return (
        <div className=' h-screen w-full'>
            <div className="grid grid-cols-6 gap-4">
                {/* {data.length > 0 && data.map((item, i) => ( */}
                    <Suspense fallback={<p>loading...</p>}>
                        {data.length > 0 && data.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </Suspense>

                {/* ))} */}
            </div>

            {/* Page Navigation Buttons */}
            <footer className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={() => handlePageChange(pg - 1)}
                    disabled={pg === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                >
                    Previous
                </button>

                {/* Page Buttons */}
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        // key={num}
                        onClick={() => handlePageChange(num)}
                        className={`px-4 py-2 ${pg === num ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'} rounded`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(pg + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </footer>

            {loading && <div className='w-screen h-screen flex items-center justify-center bg-slate-200 opacity-5'>
                <p>loading</p>
            </div>}
        </div>
        
        
    );
}

export default Axios;
