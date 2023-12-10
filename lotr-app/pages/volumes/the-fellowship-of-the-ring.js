import { volumes } from "@/lib/data"
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
    const volume = volumes.find((volume) => {
        return volume.slug === "the-fellowship-of-the-ring";
    })
    const currentIndex = volumes.findIndex((volume) => volume.slug === "the-fellowship-of-the-ring");
    const currentSlug = volumes[currentIndex].slug
    // console.log(currentSlug)
    return <>
        <h2>{volume.title}</h2>
        <p>{volume.description}</p>
        <ul>
            {volume.books.map((book) => {
            return <li key={book.ordinal}>{`${book.ordinal}: ${book.title}`}</li>
            })}
        </ul>
        <Image
            src="/../public/images/the-fellowship-of-the-ring.png"
            height={230}
            width={140}
            alt="cover photo"
        />
        <button>
            <Link href={currentIndex !== 0 ? 
                `/volumes/${volumes[currentIndex - 1].slug}` :
                ""
                }>Previous</Link>
        </button>
        <button><Link href={`/volumes/${volumes[currentIndex + 1].slug}`}>Next</Link></button>
    </>
}