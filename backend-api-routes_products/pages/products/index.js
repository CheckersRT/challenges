import useSWR from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function AllProducts() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);
  console.log(data);

  if(!data) {
    return (
        <div>No data</div>
    )
  }

  return (
    <>
      {data.map((product) =>
         (
          <StyledDiv key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>
                {product.currency}
                {product.price}
              </p>
          </StyledDiv>
        )
      )}
    </>
  );
}

const StyledDiv = styled.div`
 background-color: lightblue;
 padding: 5px;
 margin: 10px;
`