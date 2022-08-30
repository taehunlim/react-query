import React, {useState} from 'react';
import {useQuery, UseQueryResult} from "react-query";
import {AxiosResponse} from "axios";

interface Props {
    name: string;
    description: string;
    subscribers_count: number | string;
    stargazers_count: number | string;
    forks_count: number | string;
}

function App() {
    const { data, error, isLoading, isFetching }: UseQueryResult<Props> = useQuery("https://api.github.com/repos/tannerlinsley/react-query");

    console.log(`data:`,data, `isLoading: ${isLoading}`, `isFetching: ${isFetching}`)

    if(isLoading) return <strong>Loading....</strong>;
    if(error instanceof Error) return <strong>An error has occurred: {error.message}</strong>;

    return (
        <div className="App">
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <strong>👀 {data?.subscribers_count}</strong>{" "}
            <strong>✨ {data?.stargazers_count}</strong>{" "}
            <strong>🍴 {data?.forks_count}</strong>
            <strong>🍴 {data?.forks_count}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
        </div>
    );
}

export default App;
