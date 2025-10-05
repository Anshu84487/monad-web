// hooks/useMonadData.ts
// hooks/useMonadData.ts

// Change this line:
// import useSWR from 'swr'; 

// TO THIS:
import { useSWR } from 'swr'; // CORRECTED IMPORT

const rpcFetcher = async (rpcMethod: string) => { 
    // ... rest of the code ...
}
// ... rest of the file ...