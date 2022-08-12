import React, { useState } from "react";
import DealerItem from "../DealerItem";
import Modal from "../Modal";
import "./DealerList.scss";

function DealerList({ dealerObject, dealerList, setQueryParams }) {
  const [selectedDealer, setSelectedDealer] = useState({});
  const [stringIdx, setStringIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelClickDealer = (dealer, stringIdx) => {
    setSelectedDealer(dealer);
    setIsModalOpen(true);
    setStringIdx(stringIdx);
    document.querySelector("body").style.overflow = "hidden";
  };

  const handleClickMore = (queryString) => {
    let queryParams = new URLSearchParams(queryString);
    setQueryParams(queryParams);
  };

  return (
    <section className="dealer-list">
      {dealerObject.total > 0 ? (
        <div className="dealer-list__container">
          <div className="dealer-list__content">
            {dealerList.map((dealer, idx) => (
              <DealerItem
                key={idx}
                stringIdx={String.fromCharCode(idx + 65)}
                dealer={dealer}
                handelClickDealer={handelClickDealer}
              />
            ))}
          </div>
          {dealerObject.next_page_url && (
            <div className="dealer-list__more">
              <button
                onClick={() => handleClickMore(dealerObject.next_page_url)}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="dealer-list__no-result">
          <p>No result found</p>
        </div>
      )}
      {isModalOpen && (
        <Modal
          dealer={selectedDealer}
          stringIdx={stringIdx}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
}

export default DealerList;
