import volumes from "@/lib/data";

export default function Fellowship() {

    console.log(volumes[0].slug)
    // volumes.find((volume) => {
    //     volume.slug === "the-fellowship-of-the-ring";
    // })
    
    return <>
        <h2>{volumes[0].title}</h2>
    </>
}