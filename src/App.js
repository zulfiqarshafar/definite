import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Banner from "./components/sections/Banner";
import Header from "./components/sections/Header";
import Search from "./components/sections/Search";
import DealerList from "./components/sections/DealerList";
import MobileBanner from "./components/sections/MobileBanner";
import "./App.scss";

function App() {
  const [dealerList, setDealerList] = useState({});
  const [provinceList, setProvincesList] = useState([]);
  const [province, setProvince] = useState({ id: 0 });
  const [latlong, setLatlong] = useState([null, null]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Mitsubishi - Find Dealer";
  });

  useEffect(() => {
    const getDealerList = async () => {
      let queryParams = { limit: 9 };

      queryParams.page = page;
      if (province.id !== 0) {
        queryParams.keyword = province.name;
      } else if (latlong[0] && latlong[1]) {
        queryParams.latlong = `${latlong[0]},${latlong[1]}`;
      }

      let queryString = new URLSearchParams(queryParams).toString();

      // console.log(queryString);
      await fetch(
        `https://mitsubishi.trinix.id/api/frontend/search-dealers?${queryString}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDealerList(data);
          // setDealerList((prevState) => [...prevState, ...data.data]);
        })
        .catch((error) => console.log(error));
    };

    getDealerList();
  }, [province, latlong, page]);

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
        setLatlong([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  const handleSearchChange = (e) => {
    const selectedProvince = provinceList.find(
      (prov) => prov.id == e.target.value
    );
    setProvince(selectedProvince);
    setPage(1);
    setDealerList([]);
  };

  const handleClickMore = () => {
    setPage(page + 1);
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
            dealerList={dealerList}
            handleClickMore={handleClickMore}
          />
          <MobileBanner />
        </main>
      </Layout>
    </div>
  );
}

export default App;
