import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  wrapper: {
    borderLeft: "1px gray solid",
    height: 80,
    padding: "1em",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    fontWeight: "lighter",
  },
  value: {
    fontWeight: "normal",
  },
}));

type KeyValProps = { label: string; value: string };

const KeyVal: React.FC<KeyValProps> = ({ label, value }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

export default KeyVal;
