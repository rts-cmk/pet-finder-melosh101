import { useLoaderData } from "react-router";
import {HiOutlineBell} from "react-icons/hi";

export default function petsPage() {
  const { pets } = useLoaderData()
  console.log(pets)
  return (
    <>
    <main>

      <h1></h1>
      <ul>
        {pets.map((pet: { id: number; breed: string }) => (
          <li key={pet.id}>{pet.breed}</li>
        ))}
      </ul>
    </main>
    </>
    
  )
}
