import { UserRating } from "../components/UserRating";
import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";

function Profile() {

  return(
    <>
      <div className="flex max-w-full flex-wrap h-max bg-gray-100">
        <UserRating
          userRatings={userRatingDummyData}
          currentUserRating={currentUserRatingDummyData}
          version="normal"
          className="p-5"
          />
      </div>
    </>
  );
}

export default Profile;