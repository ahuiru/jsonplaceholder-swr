import React from "react";
import useSWR from "swr";

const GetPost = () => {
  const fetcher = url => fetch(url).then((r) => r.json())
  const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)

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

export default GetPost;
