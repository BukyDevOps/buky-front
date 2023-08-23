import { gql } from "@apollo/client";

export const GET_ACCOMMODATION_BY_ID = gql`
  query GetAccommodationById($id: ID!) {
    accommodationById(id: $id) {
      id
      user {
        id
        username
        name
        surname
        rating
      }
      name
      description
      tags
      images
      location {
        id
        name
        fullAddress
        lon
        lat
      }
    }
  }
`;
