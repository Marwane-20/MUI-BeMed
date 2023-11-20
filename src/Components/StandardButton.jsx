import { Button } from '@nextui-org/react';

const StandardButton = ({ text, color = 'primary' }) => (
    <Button color={color}>{text}</Button>
);

export default StandardButton;
