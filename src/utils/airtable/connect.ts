// import Airtable from "airtable";

// const connectAirtable = () => {
//   if (!process.env.AIRTABLE_API_KEY) {
//     throw new Error("AIRTABLE_API_KEY is not set");
//   }

//   Airtable.configure({
//     apiKey: process.env.AIRTABLE_API_KEY,
//   });

//   if (!process.env.AIRTABLE_BASE_ID) {
//     throw new Error("AIRTABLE_BASE_ID is not set");
//   }

//   const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
//   console.log("Connected to base");
//   return base;
// };

// export default connectAirtable;
