import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {QueryClientProvider, QueryClient, QueryFunctionContext} from 'react-query';
import axios from "axios";

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
    try {
        console.log(queryKey)
        const { data } = await axios.get(queryKey.join(""));
        return data;
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message)
        }
    }
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // refetchInterval: 3000,
            queryFn: defaultQueryFn
        }
    }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);