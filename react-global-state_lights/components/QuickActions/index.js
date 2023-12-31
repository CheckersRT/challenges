import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({allOff, allOn}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          allOff();
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          
          allOn();
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
