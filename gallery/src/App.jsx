import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArrowDownToLine } from 'lucide-react';

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`
    )
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((elem) => (
         <div>
            <div className=" relative overflow-hidden rounded-xl bg-white shadow-md">
            <a href={elem.url} target="_blank" rel="noopener noreferrer">
              <img
                src={elem.download_url}
                alt={elem.author}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
             </a>
              <a href={elem.download_url} target='_blank'>
                <div >
                  <ArrowDownToLine className='absolute  p-1 right-4 bottom-3 bg-amber-200 rounded w-10'/>
              </div>
              </a>
            </div>
            <h3 className="mt-2 text-center text-sm font-semibold text-gray-700">
              {elem.author}
            </h3>
         </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-5 py-2 rounded font-semibold transition
            ${
              page === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-amber-400 hover:bg-amber-500 active:scale-95'
            }`}
        >
          Prev
        </button>

        <span className="text-lg font-bold">Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-5 py-2 rounded font-semibold bg-amber-400 hover:bg-amber-500 active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
