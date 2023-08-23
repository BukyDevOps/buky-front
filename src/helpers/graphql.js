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

export const GET_HOST_RATINGS = gql`
  query GetHostRatings($id: ID!) {
    getAllHostRatings(id: $id) {
      id
      guest {
        id
        username
      }
      ratingValue
      description
      createdAt
    }
  }
`;

export const GET_ACCOMMODATION_RATINGS = gql`
  query GetAccommodationRatings($id: ID!) {
    getAllAccommodationRatings(id: $id) {
      id
      guest {
        id
        username
      }
      ratingValue
      description
      createdAt
    }
  }
`;
