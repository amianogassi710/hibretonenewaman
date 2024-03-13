import axios from 'axios';

const axiosFetchWithRetry = async ({url, reqOptions, timeout = 3000, retryCount = 2, retryInterval = 1000}) => {
    const axiosInstance = axios.create({
        ...reqOptions, timeout,
    });

    for (let i = 0; i < retryCount; i++) {
        try {
            const response = await axiosInstance(url);
            return response.data;
        } catch (error) {
            console.log(`Attempt ${i + 1}: ${error.message}`);
            if (i === retryCount - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, retryInterval));
        }
    }
}

export default axiosFetchWithRetry;