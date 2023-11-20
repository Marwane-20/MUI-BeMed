import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

const IconButton = ({ text, iconName }) => (
    <Button
        variant="contained"
        color="secondary"
        startIcon={<Icon>{iconName}</Icon>}
    >
        {text}
    </Button>
);

export default IconButton;
