import { createClient } from "@/prismicio";

const Users = async () => {
  const client = createClient();
  const users = await client.getAllByType("user");

  return users;
};

export default Users;
