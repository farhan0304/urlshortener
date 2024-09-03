import React,{useState} from 'react'
import Urlshortener from '../components/Urlshortener'
import { useNavigate } from 'react-router-dom';

function UrlForm() {
  const navigate = useNavigate();
    const baseurl = "http://localhost:8000"
    const [url, setUrl] = useState('');
    const [shortenedUrl,setShortenedUrl] = useState("");
    const [show,setShow] = useState(false)
  
    const handleShorten = async() => {
      const data = await fetch("/api",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          redirectedurl: url
        }), 
  
      })
      const response = await data.json();
      if (response.url){
        navigate(`${response.url}`)
      }
      setUrl("");
      setShortenedUrl(`${baseurl}/${response.shortid}`)
      setShow(true)
    };
    const handleCopy = ()=>{
      window.navigator.clipboard.writeText(shortenedUrl);
  
    }

    return (
        <Urlshortener className={`h-[80%] flex flex-col gap-4 justify-center items-center`}
        url={url} setUrl={setUrl} handleShorten={handleShorten}
        shortenedUrl={shortenedUrl} handleCopy={handleCopy} show={show}
        /> 
    )
}

export default UrlForm
