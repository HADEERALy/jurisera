import React, { useEffect, useState } from "react";
import "./ImageGallery.css";
import axios from "axios";

export default function ImageGallery({ data, setData }) {
  const [membersImages, setMembersImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedDes, setSelectedDes] = useState("");

  useEffect(() => {
    GetTeamMembers();
  }, []);

  const GetTeamMembers = () => {
    axios
      .get("https://jurisera.bit68.com/api/members/?ordering=id")
      .then((res) => {
        setMembersImages(res.data);
        console.log("teammmmmmmmm", res);
        setData({
          name: res.data[0].name,
          description: res.data[0].small_description,
        });
        setSelectedDes(res.data[0].small_description);
        setSelectedName(res.data[0].name);
        setSelectedImage(res.data[0].picture);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleSelectedObj = (img, name, description) => {
    setData({ img, name, description });
    setSelectedImage(img);
    setSelectedName(name);
    setSelectedDes(description);
  };

  return (
    <div className="ce justify-content-center">
      <div className="d-flex">
        <div className="col-sm-7 col-lg-9">
          <img src={selectedImage} alt="selected" className="selected" />
        </div>
        <div className="col-sm-5 col-lg-2 imageContainerr">
          {membersImages.map((img, index) => {
            return (
              <div
                className={
                  selectedImage === img.picture
                    ? "small-img-contaniner-selected clickable"
                    : "small-img-contaniner clickable"
                }
              >
                <img
                  className="image-style"
                  key={index}
                  src={img.picture}
                  alt="devicee"
                  onClick={() => {
                    handleSelectedObj(
                      img.picture,
                      img.name,
                      img.small_description
                    );
                  }}
                />
              </div>
            );
          })}
          {/* <div className="description-container">
                  <p className="selected-name">{selectedName}</p>
                  <p className="selected-description">{selectedDes}</p>
               </div> */}
        </div>
      </div>
    </div>
  );
}
