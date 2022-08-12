import React, { useState } from "react";
import DealerItem from "../DealerItem";
import Modal from "../Modal";
import "./DealerList.scss";

function DealerList({ dealerList, handleClickMore }) {
  const [selectedDealer, setSelectedDealer] = useState({});
  const [stringIdx, setStringIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelClickDealer = (dealer, stringIdx) => {
    setSelectedDealer(dealer);
    setIsModalOpen(true);
    setStringIdx(stringIdx);
    document.querySelector("body").style.overflow = "hidden";
  };

  console.log(dealerList);
  return (
    <section className="dealer-list">
      {dealerList.total > 0 ? (
        <div className="dealer-list__container">
          <div className="dealer-list__content">
            {dealerList.data.map((dealer, idx) => (
              <DealerItem
                key={idx}
                stringIdx={String.fromCharCode(idx + 65)}
                dealer={dealer}
                handelClickDealer={handelClickDealer}
              />
            ))}
          </div>
          {dealerList.next_page_url && (
            <div className="dealer-list__more">
              <button onClick={handleClickMore}>LOAD MORE</button>
            </div>
          )}
        </div>
      ) : (
        <div>No result found</div>
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
