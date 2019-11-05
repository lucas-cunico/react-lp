const styles = ({palette}) => {
  return {
    banner: {
      padding: "40px 40px",
      background: `linear-gradient(45deg, ${palette.primary.main} 30%, ${palette.secondary.main} 90%)`,
      "& h2": {
        height: 80,
        textAlign: "center",
        fontWeight: 400,
      },
    },
  }
}
export default styles
