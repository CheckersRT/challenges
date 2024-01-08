import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailsPage() {
    const router = useRouter();
    console.log(router)
    const id = router.query.id
    console.log(id)

    const {data, isLoading, error} = useSWR(`/api/products/${id}`, fetcher)

    console.log(data)

    if(!data) return <div>No Data, Douchebag</div>

    return (
            <StyledDiv>
                <h3>{data.data.name}</h3>
                <p>{data.data.description}</p>
                <p>{data.data.category}</p>
                <p>
                  {data.data.currency}
                  {data.data.price}
                </p>
            </StyledDiv>
          )
}

const StyledDiv = styled.div`
 background-color: lightblue;
 padding: 5px;
 margin: 10px;
`