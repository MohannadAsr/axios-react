import React from 'react';
import useApi from './hooks/useApi';
import { ToastContainer } from 'react-toastify';
import { productDto } from './API/dto/products';
import { Produts_API } from './API/endpoints/products';

function App() {
  const [state, setState] = React.useState<productDto[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const { GET } = useApi();

  React.useEffect(() => {
    async function fetch() {
      try {
        const response = await GET(Produts_API.GET_ALL_PRODUCTS, {
          success: 'done',
          error: 'fail',
        });
        setState(response?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setLoading((state) => !state);
        }}
      >
        Hello World
      </div>
      <ToastContainer />
      {loading && <div>Lodaing ...</div>}
      {state?.map((item: productDto) => {
        return <div key={item.id}>{state && <div>{item.title}</div>}</div>;
      })}
    </>
  );
}

export default App;
