import { useState } from "react";

export const AccommodationModifyForm = ({ accommodation }) => {
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const [currentTag, setCurrentTag] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const addTag = () => {
    tags.push(currentTag);
    setTags([...tags]);
    setCurrentTag("");
  };

  const removeTag = (tag) => {
    let index = tags.indexOf(tag);
    if (index > -1) {
      tags.splice(index, 1);
    }

    setTags([...tags]);
  };

  const addImage = () => {
    images.push(currentImage);
    setImages([...images]);
    setCurrentImage("");
  };

  const removeImage = (image) => {
    let index = images.indexOf(image);
    if (index > -1) {
      images.splice(index, 1);
    }

    setImages([...images]);
  };

  const modifyAvailability = () => {
    alert("nema");
  };

  return (
    <div class="section-top-border">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <h3 class="mb-30">Basic informations</h3>
          <form action="#">
            <div class="mt-10">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                class="single-input"
              />
            </div>
            <div class="mt-10">
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                required
                class="single-textarea"
              />
            </div>
            <div class="mt-10">
              <label placeholder="Min guests number:">Price</label>
              <input type="number" name="price" required class="single-input" />
            </div>
            <div class="mt-10">
              <label placeholder="Min guests number:">Min guests number</label>
              <input
                type="number"
                name="minGuestNum"
                required
                class="single-input"
              />
            </div>
            <div class="mt-10">
              <label placeholder="Max guests number:">
                Max guests number:{" "}
              </label>
              <input
                type="number"
                name="maxGuestNum"
                required
                class="single-input"
              />
            </div>
            <div class="switch-wrap d-flex mt-10">
              <label>Auto approve reservation</label>
              <div class="primary-switch ml-10">
                <input type="checkbox" id="default-switch" />
                <label for="default-switch"></label>
              </div>
            </div>
            <div class="mt-10">
              <input
                type="text"
                placeholder="Lokacija !treba smisliti"
                name="location"
                required
                class="single-input"
              />
            </div>
          </form>
          <h3 class="mb-30 mt-30">Tags</h3>
          {tags.map((tag, i) => {
            return (
              <div
                key={i}
                className="row mt-10 d-flex align-items-center justify-content-between"
              >
                <h4>{tag}</h4>
                <button className="primary-btn" onClick={() => removeTag(tag)}>
                  Remove tag
                </button>
              </div>
            );
          })}
          <div class="row mt-10">
            <input
              type="text"
              name="tag"
              placeholder="Tag name"
              onChange={(e) => setCurrentTag(e.target.value)}
              class="single-input"
            />
            <button className="primary-btn mt-2" onClick={addTag}>
              Add tag
            </button>
          </div>
          <div class="single-element-widget">
            <h3 class="mb-30 mt-30">Images</h3>
            {images.map((img, i) => {
              return (
                <div
                  key={i}
                  className="row mt-10 d-flex justify-content-between align-items-center"
                >
                  <img src={img} height={200} />
                  <button
                    className="primary-btn"
                    onClick={() => removeImage(img)}
                  >
                    Remove image
                  </button>
                </div>
              );
            })}
            <div class="row mt-10">
              <input
                type="text"
                name="image"
                placeholder="Image (just copy image url)"
                onChange={(e) => {
                  setCurrentImage(e.target.value);
                }}
                class="single-input"
              />
              <button className="primary-btn mt-2" onClick={addImage}>
                Add image
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mt-sm-30 element-wrap">
          <div class="single-element-widget">
            <h3 class="mb-30">Availability</h3>
            <button className="primary-btn" onClick={modifyAvailability}>
              Modify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationModifyForm;
