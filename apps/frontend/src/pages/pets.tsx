import { useLoaderData } from "react-router";
import { HiOutlineBell, HiChevronDown, HiLocationMarker } from "react-icons/hi";
import type { Pet } from "backend/src/schema";

export default function petsPage() {
  const { pets, user } = useLoaderData() as {
    pets: Pet[]
    user: {
      id: number;
      name: string;
      image: string;
      location: string;
    }
  }
  console.log(pets)
  return (
    <>
    <header className="pets-header">
      <img src={user.image} alt={user.name} className="profile-picture"/>
      <span className="user-location"><HiLocationMarker /> {user.location} <HiChevronDown /></span>
      <div className="notifications-button">
        <HiOutlineBell/>
      </div>
    </header>
      <main>

        <h1></h1>
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.breed}</li>
          ))}
        </ul>
      </main>
    </>

  )
}
