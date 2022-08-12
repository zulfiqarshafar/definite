import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Banner from "./components/sections/Banner";
import Header from "./components/sections/Header";
import Search from "./components/sections/Search";
import DealerList from "./components/sections/DealerList";
import MobileBanner from "./components/sections/MobileBanner";
import "./App.scss";

function App() {
  const [dealerObject, setDealerObject] = useState({});
  const [dealerList, setDealerList] = useState([]);
  const [provinceList, setProvincesList] = useState([]);
  const [province, setProvince] = useState({ id: 0 });
  const [queryParams, setQueryParams] = useState({ page: 1, limit: 9 });

  useEffect(() => {
    document.title = "Mitsubishi - Find Dealer";
  });

  useEffect(() => {
    const getDealerList = async () => {
      let queryString = new URLSearchParams(queryParams).toString();

      await fetch(
        `https://mitsubishi.trinix.id/api/frontend/search-dealers?${queryString}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDealerObject(data);
          setDealerList((prevState) => [...prevState, ...data.data]);
        })
        .catch((error) => console.log(error));
    };

    getDealerList();
  }, [queryParams]);

  useEffect(() => {
    const getProvinceList = async () => {
      await fetch(`https://mitsubishi.trinix.id/api/frontend/get-provinces`)
        .then((response) => response.json())
        .then((data) => {
          setProvincesList(data);
        })
        .catch((error) => console.log(error));
    };

    getProvinceList();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setDealerObject({});
        setDealerList([]);
        setQueryParams((prevState) => ({
          ...prevState,
          latlong: `${position.coords.latitude}, ${position.coords.longitude}`,
        }));
      });
    }
  }, []);

  const handleSearchChange = (e) => {
    const selectedProvince = provinceList.find(
      (prov) => prov.id == e.target.value
    );
    setProvince(selectedProvince);
    setDealerObject({});
    setDealerList([]);
    setQueryParams({
      limit: 9,
      page: 1,
      keyword: selectedProvince.name,
    });
  };

  return (
    <div className="App">
      <Layout>
        <main>
          <Banner />
          <Header />
          <Search
            provinceList={provinceList}
            province={province}
            handleSearchChange={handleSearchChange}
          />
          <DealerList
            dealerObject={dealerObject}
            dealerList={dealerList}
            setQueryParams={setQueryParams}
          />
          <MobileBanner />
        </main>
      </Layout>
    </div>
  );
}

export default App;
