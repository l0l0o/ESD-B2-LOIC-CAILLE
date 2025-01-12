// import connectAirtable from "./connect";
// import { Subscriber, SubscriberDto } from "../type/subscriber";

// const createClient = (
//   subscriberDto: SubscriberDto,
//   setSubscriber: React.Dispatch<React.SetStateAction<Subscriber>>
// ) => {
//   const base = connectAirtable();
//   const TABLE_NAME = "Table 1";
//   const table = base(TABLE_NAME);

//   const newSubscriber = {
//     fields: {
//       ...subscriberDto,
//     },
//   };

//   table.create([newSubscriber], (error, records) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     if (!records) {
//       console.error("No records found");
//       return;
//     }
//     for (const record of records) {
//       setSubscriber((previousSubscriber) => {
//         return {
//           ...previousSubscriber,
//           id: record.id,
//           ...record.fields,
//         } as Subscriber;
//       });
//     }
//   });
// };

// export default createClient;
