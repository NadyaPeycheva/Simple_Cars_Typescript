
import Container from "@mui/material/Container"
import "./BacgroundStyles.scss"
import { ReactNode } from "react"


const Bacground:React.FC<{children:ReactNode}>=(props)=>{
    return(
        <div className="backgroundContainer">
        <Container className="mainContainer"
          component="main"
          maxWidth="xs"
          sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            background: "white",
          }}
        >
          {props.children}
        </Container>
      </div>
    )
}
export default Bacground;