import axios from 'axios';
import { toast } from 'react-toastify';

type typer = {
  success?: string;
  error?: string;
};
const useApi = () => {
  const serverURL = 'https://fakestoreapi.com';
  const GET = async (url: string, messages?: typer) => {
    try {
      const response = await axios.get(serverURL + url);
      messages?.success ? toast.success(`${messages?.success}`) : null;

      return response;
    } catch (err) {
      if (err) {
        messages?.error ? toast.error(`${messages?.error}`) : null;
      }
    }
  };
  //   const POST = (url: string) => {};

  return { GET };
};
export default useApi;
