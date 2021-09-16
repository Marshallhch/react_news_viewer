import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=36e9e89184ad4ea68bba14f8c4ccda0e"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Route path='/:category?' component={NewsPage} />
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    // <NewsList />
    // <div className='App'>
    //   <div>
    //     <button onClick={onClick}>view news</button>
    //   </div>
    //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    // </div>
  );
}

export default App;
