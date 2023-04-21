import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  wrapper: {
    borderLeft: '1px gray solid',
    height: 80,
    padding: '1em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    fontWeight: 'lighter'
  },
  value: {
    fontWeight: 'normal'
  }
}));

const KeyVal: React.FC<{ label: string, value: string; }> = ({ label, value }) => {

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

export default KeyVal;