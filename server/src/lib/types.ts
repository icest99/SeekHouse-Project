import { Collection, ObjectId } from 'mongodb';

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE",
}

export interface BookingsIndexMonth {
  [key: string]: boolean;
}

export interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear
}

export interface Booking {
  _id: ObjectId;
  listing: ObjectId; //1:1 booking:listing
  tenant: string; //1:1 booking:tenant
  checkIn: string;
  checkOut: string;
}

export interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  host: string //one to one, one listing will have one host
  type: ListingType;
  address: string;
  country: string;
  admin: string;
  city: string;
  bookings: ObjectId[];
  bookingsIndex: BookingsIndex;
  price: number;
  numOfGuests: number;
}

export interface User {
  _id: string; //string because auth lib return string 
  token: string;
  name: string;
  avatar: string;
  contact: string;
  walletId?: string;
  income: number;
  bookings: ObjectId[]; //one to many. One User will have many bookings 
  listings: ObjectId[];
}

export interface Database {
  bookings: Collection<Booking>
  listings: Collection<Listing>;
  users: Collection<User>;
}
