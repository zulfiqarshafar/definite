import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Banner from "./components/sections/Banner";
import Header from "./components/sections/Header";
import Search from "./components/sections/Search";
import DealerList from "./components/sections/DealerList";
import MobileBanner from "./components/sections/MobileBanner";
import "./App.scss";

function App() {
  const [dealerList, setDealerList] = useState([]);
  const [provinceList, setProvincesList] = useState([]);
  const [province, setProvince] = useState({ id: 0 });
  const [latlong, setLatlong] = useState([null, null]);

  useEffect(() => {
    document.title = "Mitsubishi - Find Dealer";
  });

  useEffect(() => {
    getDealerList();
  }, [province]);

  useEffect(() => {
    getProvinceList();
  }, []);

  const getLatlong = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatlong([position.coords.latitude, position.coords.longitude]);
      });
    }
  };

  const generateQueryParams = () => {
    let queryParams = { page: 1, limit: 9 };
    getLatlong();

    if (province.id != 0) {
      queryParams.keyword = province.name;
    } else if (latlong[0] && latlong[1]) {
      console.log("test");
      queryParams.latlong = `${latlong[0]},${latlong[1]}`;
    }

    console.log(queryParams);

    return new URLSearchParams(queryParams).toString();
  };

  const getDealerList = async () => {
    let queryString = generateQueryParams();

    console.log(queryString);
    await fetch(
      `https://mitsubishi.trinix.id/api/frontend/search-dealers?${queryString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDealerList(data);
      })
      .catch((error) => console.log(error));
  };

  const getProvinceList = async () => {
    await fetch(`https://mitsubishi.trinix.id/api/frontend/get-provinces`)
      .then((response) => response.json())
      .then((data) => {
        setProvincesList(data);
      })
      .catch((error) => console.log(error));
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
            setProvince={setProvince}
          />
          <DealerList dealerList={dealerList} />
          <MobileBanner />
        </main>
      </Layout>
    </div>
  );
}

export default App;
