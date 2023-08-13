export const AccommodationCard = () => {
  return (
    <div class="single-destinations">
      <div class="thumb">
        <img src="img/hotels/d6.jpg" alt="" />
      </div>
      <div class="details">
        <h4 class="d-flex justify-content-between">
          <span>Hilton Star Hotel</span>
          <div class="star">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
        </h4>
        <p>View on map | 49 Reviews</p>
        <ul class="package-list">
          <li class="d-flex justify-content-between align-items-center">
            <span>Swimming pool</span>
            <span>Yes</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Gymnesium</span>
            <span>No</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Wi-fi</span>
            <span>Yes</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Room Service</span>
            <span>No</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Air Condition</span>
            <span>Yes</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Restaurant</span>
            <span>Yes</span>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <span>Price per night</span>
            <a href="#" class="price-btn">
              $250
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccommodationCard;
