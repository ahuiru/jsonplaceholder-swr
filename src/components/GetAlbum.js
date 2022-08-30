import React from "react";
import useSWR from "swr";

const GetAlbum = () => {
  const fetcher = url => fetch(url).then((r) => r.json())
  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/albums', fetcher)

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading•••</div>

  return (
    <div>
      {data.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </div>
  )
}


export default GetAlbum;
