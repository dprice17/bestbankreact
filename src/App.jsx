import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar.jsx";
import AccountDetails from "./AccountDetails.jsx";
import data from "./data.js";
import bestbanklogo from "/src/assets/bestbank_logo.png";

export default function App() {
  const [financialData, setFinancialData] = useState(data);
  const [renderSpendingInfo, setRenderSpendingInfo] = useState(false);

  const handleAccountClick = (title) => {
    setFinancialData((prevData) =>
      prevData.map((account) => ({
        ...account,
        isClicked: account.title === title ? !account.isClicked : false,
      }))
    );

    const mainAccount = financialData[0].isClicked;
    const expensesAccount = financialData[1].isClicked;

    if (title === "Main Account") {
      if (expensesAccount === false) {
        setRenderSpendingInfo((prev) => !prev);
      }
    } else if (title === "Expenses") {
      if (mainAccount === false) {
        setRenderSpendingInfo((prev) => !prev);
      }
    } else {
      setRenderSpendingInfo(false);
    }
  };

  return (
    <div>
      <header>
        <img className="bank-logo" src={bestbanklogo} />
      </header>
      <NavBar />
      <AccountDetails
        financialData={financialData}
        renderSpendingInfo={renderSpendingInfo}
        handleAccountClick={handleAccountClick}
      />
    </div>
  );
}
