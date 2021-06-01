import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const URL =  '';
function dateSort(a, b) {
  return new Date(a.ArrivalDate  != null? a.ArrivalDate : '12/12/9999').getTime() - new Date(b.ArrivalDate!= null? b.ArrivalDate : '12/12/9999').getTime();
}
export default function Shipment() {
  const [shipments, setshipments] = useState(null);
  const [itemInput, setItemInput] = useState({Name: '',TrackingID: ''});

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(URL);
        let data = response.data.sort((a, b) => dateSort(a, b));
        setshipments(data);
      } catch (e) {
        console.log(e);

      }
    };
    fetchData();



  }, []);

  const postData = (e) => {
    try {
      console.log("asdasd");
      e.preventDefault();
      const date = (new Date()).toLocaleDateString('en-US');
      const response = axios.post(URL,
        {
          Name: itemInput.Name,
          TrackingID: itemInput.TrackingID,
          AddedDate: date
        }
      ).then(function (response) {

        console.log(response);
      });
    } catch (e) {
      console.log(e);

    }
  };

  return (
    <div class="ShipmentsArea">
      <div class="ShipmentForm">
        <form onSubmit={postData}>
          <label>
            Shipment Name:
            <input type="text" onChange={event => {
                                          const val1 = event.target.value
                                          setItemInput(prevState => {
                                            return Object.assign({}, prevState, { Name: val1 });
                                          })}} value={itemInput.Name} />
          </label>
          <label>
            Tracking ID:
            <input type="text" onChange={event => {
                                          const val2 = event.target.value
                                          setItemInput(prevState => {
                                            return Object.assign({}, prevState, { TrackingID: val2 });
                                          })}} value={itemInput.TrackingID} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      {/* Display data from API */}
      <div className="shipments_main">
        {shipments &&
          shipments.map((shipment, index) => {

            const cleanedAddedDate = new Date(shipment.AddedDate).toDateString();
            const cleanedArrivalDate = new Date(shipment.ArrivalDate).toDateString();
            const ArrivalDate = new Date(shipment.ArrivalDate).getTime();
            const todayObj = new Date().getTime();
            const todayDate = new Date().toDateString();
            const sevenDayDate = new Date();
            sevenDayDate.setDate(sevenDayDate.getDate() + 7);

            var colorClassConst = "";

            if (todayDate === cleanedArrivalDate) {
              colorClassConst = "arrivingToday";
            }
            else if (ArrivalDate <= todayObj) {
              colorClassConst = "arrivingLate";

            }
            else if (ArrivalDate <= sevenDayDate) {
              colorClassConst = "arrivingSoon";

            }
            else {
              colorClassConst = "arrivingLater";

            }

            return (
              <div className={colorClassConst + " shipment-block"} key={index}>
                <h3>{shipment.Name}</h3>
                <div className="details">
                  <p>📦: {shipment.TrackingID}</p>
                  <p>🚚: {shipment.Transporter}</p>
                  <p>⏰: {cleanedAddedDate}</p>
                  <p>🏘️: {cleanedArrivalDate}</p>
                </div>
              </div>
            );
          })}
      </div>

    </div>
  );
}










