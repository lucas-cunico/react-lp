const styles = {
  card: {
    marginTop: 50,
    display: "flex",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: "7px 7px 32px -18px rgba(0,0,0,0.75)",
    transition: "all ease-in-out 0.3s",
    "& img": {
      height: 400,
      width: "50%",
      objectFit: "cover",
    },
    "&:hover": {
      boxShadow: "7px 7px 32px -10px rgba(0,0,0,0.75)",
    },
    text: {
      width: "50%",
      fontWeight: 400,
    },
    "& h3, & p": {
      padding: 40,
    },
  },
}
export default styles
