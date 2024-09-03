import React from 'react'

function Urlshortener({className,url,setUrl,handleShorten,shortenedUrl,handleCopy,show}) {
  return (
    <main className={className} >
    <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
      style={{backgroundColor:"rgba(31,41,55,0.8)"}}
      >
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="url">
          Enter URL
        </label>
        <input
          type="text"
          id="url"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the URL here"
        />
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Shorten
        </button>
      </div>
      <div className={!show?`hidden`:``} >
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md text-center"
      style={{backgroundColor:"rgba(31,41,55,0.8)"}}
      >
        <p className="text-gray-200 text-lg font-medium mb-4">
          Shortened URL: 
          <a 
            href={shortenedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline ml-1"
          >
            {shortenedUrl}
          </a>
        </p>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
    </main>
  )
}

export default Urlshortener
