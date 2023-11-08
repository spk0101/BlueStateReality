import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      // match: /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,})/,
    },
    //one will be time of creation of the user and the other will be updation for the user
    avatar: {
      type: String,
      default:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcBAv/EADMQAAICAQICBwYFBQAAAAAAAAABAgMEBREhMQYSE0FRccEjMmGBkaEHIkJS0RRicoLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAB5JpJtvbYD0wXZVVXBveXguZDys2U94VNqPj3shlkRNnqE+UIpefEwvMvf69vJGAFwSFm3r9afmjNXqEt9rIJ+RBAwXNORXcvyS4+D5mYoOT3J+JmvhC5+Uv5JhqwATBFAAAAAArM/I683XD3VzfiyZmW9lQ2vefBFOWAACsgMOZl04WPLIybFCuPN+PwXxNRzOmOTKbWHj1119zs/NJ+iA3QGn6f0xs7RR1CiDg+dlW6a+T5m202130wtpmp1zXWjKL4NAfYAKJ+n5G77Kf+r9CwKGLaaaezXIuqLFbVGa70ZqxkABFAABWalP2sYruW5DM+c98qfyMBqIAAI0TpnnyyNS/pYy9lj7cPGbXF+n1NfLDpDFx1zOT59q39eJXlA2voNnS7S3AnLeDj2ta8H3r1+pqhd9DYuWu1tL3a5t/Tb1COgAAihYaZPeM4Pu4oryXpj9vJf2irFoADKgAAqM9bZUvikyOTdTh+eE1ya2IRqIAAI03prplkchajVHeuaUbdv0yXJ+T9PiasdbcVJOLSkmtmmt90UWboehOze5V47fHaFvU+wGgm6dDNMsx6rM66PVlalGtPn1ebfz9Cdp+i6LCanjQqvlF8HKztNvlyLkAAABM0xe2k/CJDLHTIbVym17z4CrE4AGVAABhyqu2pce/mvMpmtnxWxfldqGNxdta/yXqWJUErtZ1jH0mlO19e2XuVR5v+F8TPqebXp+DZlW8VBcI/ub5I5pl5NuZkTyMifWsm92/RfA0idqWu5+oSanc66nyqqeyXqyrSS5IAGi4NPvXJ+Bc6Z0kz8GSjOf9RT+yx8fk+a+5TADqGmajj6njq3Gnvt70H70X4MlnMNK1C7TcyGRTx7pw7px8DpeNfXlUV30y61dkVKLXgwMsIynJRiuLeyLuqCrrjCPJIi4GN2a7Sa/O1wXgiaZrQACAAAAYAGp9NdBy9Sxq3p7i+zbnKlvbrv4ffgc0tqsoslXdCVdkeEoyWzR3fbcgano+n6nX1M7Ghbtyk+Eo+TXFFlSxxQHQc38PKJtywc2yr+22HXX1W3qVln4faon7PIxJrxcpL0NamNRBt9X4fanJ+1ysWC8U5S9EW2D+H2FU1LOyrch/tguzj6v7obDGgYmLkZl0acSmdtsuUYrf/kdU6JaNkaZpsas6cJ2qTlGMeKrT7viWuDp+Hp9PZYWPXTDvUFz833kpGbVkegAigAAAAAAAAAAAAAAAAAAAAAAAP/Z",
    },
  },
  { timestap: true }
);

//when we create model with a singular name , it adds an prural name to the collection when we add many things onto it. 

const User = mongoose.model('User', Schema);

export default User;