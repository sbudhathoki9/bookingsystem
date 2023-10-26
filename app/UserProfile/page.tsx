import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const user = await getSession();

  return (
    user && (
      <div>
        <h1>User Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
