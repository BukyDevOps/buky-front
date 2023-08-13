export const Ratings = ({ ratings }) => {
  return (
    <>
      {ratings.map((r) => {
        let checked = [];
        for (let index = 0; index < r.ratingValue; index++) {
          checked.push(<span class="fa fa-star checked"></span>);
        }
        return (
          <div key={r.id} className="row d-flex justify-content-between">
            <h4>{r.guest.username}</h4>
            <p>1/1/2023</p>
            <p>{r.description}</p>
            <div class="star">
              {checked}
              <span class="fa fa-star"></span>
            </div>
          </div>
        );
      })}
    </>
  );
};
